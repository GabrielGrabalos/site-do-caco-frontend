import { useState, useCallback, useEffect } from 'react';
import { getCroppedImg } from '@/shared/utils/imageCrop';

/**
 * Hook to manage image uploading, cropping and removal.
 * @param {string|null} initialImageUrl - Initial URL of the image (for editing mode)
 */
export function useImageCropper(initialImageUrl = null) {
  const [imageSrc, setImageSrc] = useState(null); // The source image for cropping (Base64)
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  
  const [previewUrl, setPreviewUrl] = useState(initialImageUrl); // The final cropped image URL for display
  const [file, setFile] = useState(null); // The final File object to send to backend
  const [isRemoved, setIsRemoved] = useState(false); // Flag indicating if the initial image was removed
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Initialize/Reset when initialImageUrl changes
  useEffect(() => {
    if (initialImageUrl) {
        setPreviewUrl(initialImageUrl);
        setIsRemoved(false);
    }
  }, [initialImageUrl]);

  // Cleanup object URLs to avoid memory leaks
  useEffect(() => {
    return () => {
      if (previewUrl && previewUrl.startsWith('blob:')) {
        URL.revokeObjectURL(previewUrl);
      }
      if (imageSrc && imageSrc.startsWith('blob:')) {
        URL.revokeObjectURL(imageSrc);
      }
    };
  }, [previewUrl, imageSrc]);

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  const handleFileSelect = useCallback((e) => {
    const selectedFile = e.target.files?.[0];
    if (!selectedFile) return;

    // TODO: Add file validation here if needed (size, type)

    const reader = new FileReader();
    reader.onload = () => {
      setImageSrc(reader.result);
      setZoom(1);
      setIsModalOpen(true);
      // Reset input
      e.target.value = ''; 
    };
    reader.readAsDataURL(selectedFile);
  }, []);

  const handleCropConfirm = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      
      const croppedBlob = await getCroppedImg(imageSrc, croppedAreaPixels);
      const newFile = new File([croppedBlob], `image-${Date.now()}.jpg`, { type: 'image/jpeg' });
      const newUrl = URL.createObjectURL(croppedBlob);

      setPreviewUrl(newUrl);
      setFile(newFile);
      setIsRemoved(false); // We have a new image, so it's not "removed"
      
      setIsModalOpen(false);
    } catch (err) {
      console.error(err);
      setError('Erro ao recortar imagem');
    } finally {
      setLoading(false);
    }
  }, [imageSrc, croppedAreaPixels]);

  const handleRemove = useCallback(() => {
    if (previewUrl && previewUrl.startsWith('blob:')) {
        URL.revokeObjectURL(previewUrl);
    }
    setPreviewUrl(null);
    setFile(null);
    setIsRemoved(true); // Mark as removed so backend knows to delete the old image
  }, [previewUrl]);

  const handleCancelCrop = useCallback(() => {
     setIsModalOpen(false);
     setImageSrc(null);
  }, []);

  const reset = useCallback(() => {
      setPreviewUrl(initialImageUrl);
      setFile(null);
      setIsRemoved(false);
      setImageSrc(null);
      setIsModalOpen(false);
  }, [initialImageUrl]);

  return {
    // State
    imageSrc,
    crop,
    zoom,
    previewUrl,
    file,
    isRemoved,
    isModalOpen,
    loading,
    error,

    // Setters
    setCrop,
    setZoom,
    setIsModalOpen,

    // Actions
    onCropComplete,
    handleFileSelect,
    handleCropConfirm,
    handleRemove,
    handleCancelCrop,
    reset
  };
}
