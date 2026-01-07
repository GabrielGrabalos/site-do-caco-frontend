/**
 * Dialog customizado para upload de imagem com feedback de progresso
 */

import React, { useState, useRef, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { imageUploadService } from '../services/imageUploadService';
import { useToast } from '@/components/ui/use-toast';

export const ImageUploadDialog = ({ isOpen, onClose, onImageUploaded, imageFile }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const fileInputRef = useRef(null);
  const { toast } = useToast();

  // Quando o imageFile é passado (vindo do MDXEditor), usa ele automaticamente
  useEffect(() => {
    if (imageFile && isOpen) {
      handleFileSelect(null, imageFile);
    }
  }, [imageFile, isOpen]);

  const handleFileSelect = (event, directFile = null) => {
    const file = directFile || event?.target?.files?.[0];
    if (!file) return;

    // Validação de tipo de arquivo
    if (!file.type.startsWith('image/')) {
      toast({
        variant: 'destructive',
        title: 'Arquivo inválido',
        description: 'Por favor, selecione uma imagem.',
      });
      return;
    }

    // Validação de tamanho (5MB)
    const maxSize = 5 * 1024 * 1024;
    if (file.size > maxSize) {
      toast({
        variant: 'destructive',
        title: 'Arquivo muito grande',
        description: 'A imagem deve ter no máximo 5MB.',
      });
      return;
    }

    setSelectedFile(file);

    // Cria preview
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreviewUrl(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleUpload = async () => {
    if (!selectedFile) return;

    setIsUploading(true);
    setUploadProgress(0);

    try {
      const url = await imageUploadService.uploadImageWithProgress(
        selectedFile,
        (progress) => {
          setUploadProgress(progress);
        }
      );

      toast({
        title: 'Imagem enviada',
        description: 'A imagem foi carregada com sucesso.',
      });

      // Retorna a URL para o editor
      onImageUploaded(url);
      handleClose();
    } catch (error) {
      console.error('Erro ao fazer upload:', error);
      toast({
        variant: 'destructive',
        title: 'Erro no upload',
        description: error.message || 'Não foi possível enviar a imagem.',
      });
    } finally {
      setIsUploading(false);
      setUploadProgress(0);
    }
  };

  const handleClose = () => {
    if (isUploading) return; // Não permite fechar durante upload
    setSelectedFile(null);
    setPreviewUrl(null);
    setUploadProgress(0);
    setIsUploading(false);
    onClose();
  };

  // Auto-upload quando arquivo é selecionado via MDXEditor
  useEffect(() => {
    if (selectedFile && imageFile && isOpen && !isUploading) {
      // Pequeno delay para mostrar o preview antes de iniciar upload
      const timer = setTimeout(() => {
        handleUpload();
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [selectedFile, imageFile, isOpen]);

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Upload de Imagem</DialogTitle>
          <DialogDescription>
            {imageFile 
              ? 'A imagem está sendo preparada para upload...'
              : 'Selecione uma imagem para adicionar ao conteúdo (máx. 5MB)'
            }
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          {/* Input de arquivo - apenas mostra se não veio do editor */}
          {!imageFile && (
            <div>
              <Input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileSelect}
                disabled={isUploading}
                className="cursor-pointer"
              />
            </div>
          )}

          {/* Preview da imagem */}
          {previewUrl && (
            <div className="border rounded-lg p-4 bg-gray-50">
              <img
                src={previewUrl}
                alt="Preview"
                className="max-h-48 mx-auto rounded"
              />
              <p className="text-sm text-center text-muted-foreground mt-2">
                {selectedFile?.name}
              </p>
            </div>
          )}

          {/* Barra de progresso */}
          {isUploading && (
            <div className="space-y-2">
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-primary h-2.5 rounded-full transition-all duration-300"
                  style={{ width: `${uploadProgress}%` }}
                />
              </div>
              <p className="text-sm text-center text-muted-foreground">
                Enviando... {uploadProgress}%
              </p>
            </div>
          )}
        </div>

        <DialogFooter className="gap-2">
          <Button
            type="button"
            variant="outline"
            onClick={handleClose}
            disabled={isUploading}
          >
            Cancelar
          </Button>
          {!imageFile && (
            <Button
              type="button"
              onClick={handleUpload}
              disabled={!selectedFile || isUploading}
            >
              {isUploading ? 'Enviando...' : 'Upload'}
            </Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ImageUploadDialog;
