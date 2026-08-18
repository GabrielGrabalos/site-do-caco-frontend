/**
 * Serviço para upload de imagens
 */

import { httpClient } from '@/shared/lib/http';
import { uploadClient } from '@/shared/lib/upload';

class ImageUploadService {
  /**
   * Faz upload de uma imagem para o backend
   * @param {File} imageFile - Arquivo de imagem a ser enviado
   * @returns {Promise<string>} - URL da imagem no servidor
   */
  async uploadImage(imageFile) {
    try {
      const formData = new FormData();
      formData.append('image', imageFile);

      // Usa o método postFormData específico para upload de arquivos
      const response = await httpClient.postFormData('admin/images', formData);

      // O backend retorna a URL da imagem
      if (!response || !response.url) {
        throw new Error('Resposta inválida do servidor');
      }

      return response.url;
    } catch (error) {
      console.error('Erro ao fazer upload da imagem:', error);
      // Re-lança o erro com mensagem amigável
      const errorMessage = error.message || 'Falha ao enviar imagem. Tente novamente.';
      throw new Error(errorMessage);
    }
  }

  /**
   * Faz upload de uma imagem com callback de progresso
   * @param {File} imageFile - Arquivo de imagem a ser enviado
   * @param {Function} onProgress - Callback com percentual de progresso
   * @returns {Promise<string>} - URL da imagem no servidor
   */
  async uploadImageWithProgress(imageFile, onProgress = null) {
    try {
      const formData = new FormData();
      formData.append('image', imageFile);

      // Usa o método com progresso
      const response = await uploadClient.postFormDataWithProgress(
        'admin/images',
        formData,
        onProgress
      );

      // O backend retorna a URL da imagem
      if (!response || !response.url) {
        throw new Error('Resposta inválida do servidor');
      }

      return response.url;
    } catch (error) {
      console.error('Erro ao fazer upload da imagem:', error);
      const errorMessage = error.message || 'Falha ao enviar imagem. Tente novamente.';
      throw new Error(errorMessage);
    }
  }

  /**
   * Função adaptada para o MDXEditor
   * @param {File} imageFile - Arquivo de imagem
   * @returns {Promise<string>} - URL da imagem
   */
  async imageUploadHandler(imageFile) {
    return this.uploadImage(imageFile);
  }
}

export const imageUploadService = new ImageUploadService();
