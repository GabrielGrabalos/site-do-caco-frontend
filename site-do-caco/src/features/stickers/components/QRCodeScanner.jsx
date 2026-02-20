import { useEffect, useRef, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { X, Camera, AlertCircle } from 'lucide-react';
import jsQR from 'jsqr';

export function QRCodeScanner({ onScan, onClose }) {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [error, setError] = useState(null);
  const [scanning, setScanning] = useState(false);
  const streamRef = useRef(null);
  const scanningRef = useRef(false);
  const rafRef = useRef(null);
  const isActiveRef = useRef(true);

  useEffect(() => {
    isActiveRef.current = true;
    startCamera();
    return () => {
      isActiveRef.current = false;
      stopCamera();
    };
  }, []);

  const startCamera = async () => {
    try {
      if (!navigator.mediaDevices?.getUserMedia) {
        setError('Seu navegador não suporta acesso à câmera.');
        return;
      }

      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: 'environment' } // Câmera traseira em mobile
      });
      
      streamRef.current = stream;
      
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        try {
          await videoRef.current.play();
        } catch (playError) {
          if (playError?.name === 'AbortError') {
            return;
          }
          throw playError;
        }

        if (!isActiveRef.current) {
          return;
        }

        scanningRef.current = true;
        setScanning(true);
        rafRef.current = requestAnimationFrame(scanQRCode);
      }
    } catch (err) {
      console.error('Erro ao acessar câmera:', err);
      if (err?.name === 'NotAllowedError') {
        setError('Permissão da câmera negada. Ative a câmera e tente novamente.');
      } else if (err?.name === 'NotFoundError') {
        setError('Nenhuma câmera foi encontrada neste dispositivo.');
      } else if (err?.name === 'NotReadableError') {
        setError('A câmera está em uso por outro aplicativo.');
      } else if (err?.name === 'AbortError') {
        return;
      } else {
        setError('Não foi possível acessar a câmera. Verifique as permissões.');
      }
    }
  };

  const stopCamera = () => {
    scanningRef.current = false;
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
      streamRef.current = null;
    }
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.srcObject = null;
    }
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
    setScanning(false);
  };

  const scanQRCode = () => {
    if (!scanningRef.current || !videoRef.current || !canvasRef.current) {
      return;
    }

    const video = videoRef.current;
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    if (video.readyState === video.HAVE_ENOUGH_DATA) {
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      context.drawImage(video, 0, 0, canvas.width, canvas.height);

      const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
      const code = jsQR(imageData.data, imageData.width, imageData.height);

      if (code) {
        stopCamera();
        onScan(code.data);
        return;
      }
    }

    rafRef.current = requestAnimationFrame(scanQRCode);
  };

  return (
    <Card className="border-2">
      <CardHeader className="flex flex-row items-center justify-between pb-3">
        <div className="flex items-center gap-2">
          <Camera className="w-5 h-5 text-primary" />
          <CardTitle className="text-lg">Escanear QR Code</CardTitle>
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => {
            stopCamera();
            onClose();
          }}
        >
          <X className="w-4 h-4" />
        </Button>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {error ? (
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        ) : (
          <>
            <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-black">
              <video
                ref={videoRef}
                className="w-full h-full object-cover"
                playsInline
              />
              <canvas ref={canvasRef} className="hidden" />
              
              {/* Overlay de scan */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 border-2 border-primary rounded-lg">
                  <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-primary rounded-tl-lg"></div>
                  <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-primary rounded-tr-lg"></div>
                  <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-primary rounded-bl-lg"></div>
                  <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-primary rounded-br-lg"></div>
                </div>
              </div>
            </div>
            
            <p className="text-sm text-center text-muted-foreground">
              Posicione o QR Code dentro do quadrado
            </p>
          </>
        )}
        
        <Button
          variant="outline"
          onClick={() => {
            stopCamera();
            onClose();
          }}
          className="w-full"
        >
          Cancelar
        </Button>
      </CardContent>
    </Card>
  );
}
