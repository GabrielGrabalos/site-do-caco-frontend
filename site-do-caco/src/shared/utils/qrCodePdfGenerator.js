/**
 * Utilitário para gerar PDFs com QR Codes
 * Utiliza jsPDF e qrcode para criar documentos prontos para impressão
 */

import jsPDF from 'jspdf';
import QRCode from 'qrcode';

/**
 * Configurações do PDF
 */
const PDF_CONFIG = {
  margin: 10, // mm
  qrSize: 30, // mm
  fontSize: 8,
  textMargin: 2, // espaço entre QR e texto
  cols: 5, // QR codes por linha
  rows: 7, // linhas por página
  baseUrl: window.location.origin, // URL base do site
};

/**
 * Gera QR Code como data URL
 * @param {string} code - Código a ser transformado em QR
 * @returns {Promise<string>} Data URL da imagem do QR Code
 */
async function generateQRCodeImage(code) {
  try {
    const url = `${PDF_CONFIG.baseUrl}/stickers/claim/${code}`;
    const qrDataUrl = await QRCode.toDataURL(url, {
      errorCorrectionLevel: 'M',
      margin: 1,
      width: 300, // pixels para boa qualidade
      color: {
        dark: '#000000',
        light: '#FFFFFF',
      },
    });
    return qrDataUrl;
  } catch (err) {
    console.error(`Erro ao gerar QR Code para ${code}:`, err);
    throw err;
  }
}

/**
 * Gera PDF com QR Codes organizados em grade
 * @param {string[]} codes - Array de códigos
 * @param {string} stickerName - Nome do sticker (para o nome do arquivo)
 * @returns {Promise<void>}
 */
export async function generateQRCodesPDF(codes, stickerName = 'sticker') {
  if (!codes || codes.length === 0) {
    throw new Error('Nenhum código fornecido para gerar PDF');
  }

  try {
    // Gera todos os QR Codes em paralelo
    const qrPromises = codes.map(code => generateQRCodeImage(code));
    const qrImages = await Promise.all(qrPromises);

    // Cria documento PDF (A4)
    const doc = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4',
    });

    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    
    // Calcula dimensões disponíveis
    const availableWidth = pageWidth - (PDF_CONFIG.margin * 2);
    const availableHeight = pageHeight - (PDF_CONFIG.margin * 2);
    
    // Calcula espaçamento entre QR codes
    const cellWidth = availableWidth / PDF_CONFIG.cols;
    const cellHeight = availableHeight / PDF_CONFIG.rows;
    
    // Centraliza QR code na célula
    const qrOffset = (cellWidth - PDF_CONFIG.qrSize) / 2;
    
    let currentPage = 0;
    let itemsInCurrentPage = 0;

    // Processa cada código
    codes.forEach((code, index) => {
      // Verifica se precisa de nova página
      if (itemsInCurrentPage >= PDF_CONFIG.cols * PDF_CONFIG.rows) {
        doc.addPage();
        currentPage++;
        itemsInCurrentPage = 0;
      }

      // Calcula posição na grade
      const col = itemsInCurrentPage % PDF_CONFIG.cols;
      const row = Math.floor(itemsInCurrentPage / PDF_CONFIG.cols);

      // Calcula coordenadas
      const x = PDF_CONFIG.margin + (col * cellWidth) + qrOffset;
      const y = PDF_CONFIG.margin + (row * cellHeight) + qrOffset;

      // Adiciona QR Code
      doc.addImage(
        qrImages[index],
        'PNG',
        x,
        y,
        PDF_CONFIG.qrSize,
        PDF_CONFIG.qrSize
      );

      // Adiciona texto do código abaixo do QR
      doc.setFontSize(PDF_CONFIG.fontSize);
      doc.setFont('helvetica', 'normal');
      
      const textY = y + PDF_CONFIG.qrSize + PDF_CONFIG.textMargin + 3;
      const textX = PDF_CONFIG.margin + (col * cellWidth) + (cellWidth / 2);
      
      doc.text(code, textX, textY, { align: 'center' });

      itemsInCurrentPage++;
    });

    // Gera nome do arquivo
    const timestamp = new Date().toISOString().split('T')[0];
    const fileName = `qrcodes_${stickerName.replace(/\s+/g, '_')}_${timestamp}.pdf`;

    // Faz download
    doc.save(fileName);

  } catch (err) {
    console.error('Erro ao gerar PDF:', err);
    throw new Error('Falha ao gerar PDF com QR Codes');
  }
}

/**
 * Gera PDF com QR Codes em blocos (para grandes quantidades)
 * @param {string[]} codes - Array de códigos
 * @param {string} stickerName - Nome do sticker
 * @param {number} chunkSize - Tamanho do bloco (padrão: 100)
 * @returns {Promise<void>}
 */
export async function generateQRCodesPDFChunked(codes, stickerName = 'sticker', chunkSize = 100) {
  if (codes.length <= chunkSize) {
    return generateQRCodesPDF(codes, stickerName);
  }

  // Divide em chunks
  const chunks = [];
  for (let i = 0; i < codes.length; i += chunkSize) {
    chunks.push(codes.slice(i, i + chunkSize));
  }

  // Processa cada chunk
  for (let i = 0; i < chunks.length; i++) {
    const chunkName = `${stickerName}_parte_${i + 1}_de_${chunks.length}`;
    await generateQRCodesPDF(chunks[i], chunkName);
    
    // Pequeno delay entre chunks para não travar o browser
    if (i < chunks.length - 1) {
      await new Promise(resolve => setTimeout(resolve, 500));
    }
  }
}
