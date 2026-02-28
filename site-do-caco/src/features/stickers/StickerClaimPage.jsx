import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { usePageTitle } from '@/shared/hooks/usePageTitle';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Gift, Keyboard, QrCode, Check, ArrowRight, Calendar, MapPin } from 'lucide-react';
import { useStickerClaimVM } from './useStickerClaimVM';
import { QRCodeScanner } from './components/QRCodeScanner';
import { Link } from 'react-router-dom';

export function StickerClaimPage() {
  usePageTitle('Resgatar Figurinha');
  const vm = useStickerClaimVM();

  // Se já resgatou o sticker, mostra tela de sucesso
  if (vm.claimedSticker) {
    const sticker = vm.claimedSticker.sticker;
    
    return (
      <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-primary/5 via-background to-primary/10">
        <Card className="max-w-md w-full">
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
              <Check className="w-8 h-8 text-green-600 dark:text-green-400" />
            </div>
            <CardTitle className="text-2xl">Sticker Resgatado!</CardTitle>
            <CardDescription>
              Resgatado em {new Date(vm.claimedSticker.obtainedAt).toLocaleString('pt-BR')}
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-6">
            {/* Imagem do Sticker */}
            <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-muted">
              {sticker.imageUrl ? (
                <img
                  src={sticker.imageUrl}
                  alt={sticker.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <Gift className="w-16 h-16 text-muted-foreground/30" />
                </div>
              )}
            </div>

            {/* Info do Sticker */}
            <div className="space-y-2">
              <h3 className="text-xl font-bold">{sticker.name}</h3>
              {sticker.description && (
                <p className="text-sm text-muted-foreground">{sticker.description}</p>
              )}
            </div>

            {/* Evento de Origem */}
            {sticker.originEvent && (
              <Card className="bg-muted/50">
                <CardContent className="pt-4 space-y-2">
                  <p className="text-xs font-medium text-muted-foreground">Evento de Origem</p>
                  <p className="font-semibold">{sticker.originEvent.title}</p>
                  {sticker.originEvent.location && (
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <MapPin className="w-3 h-3" />
                      {sticker.originEvent.location}
                    </div>
                  )}
                  {sticker.originEvent.startDate && (
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Calendar className="w-3 h-3" />
                      {new Date(sticker.originEvent.startDate).toLocaleDateString('pt-BR')}
                    </div>
                  )}
                </CardContent>
              </Card>
            )}

            {/* Ações */}
            <div className="space-y-2">
              <Button asChild className="w-full">
                <Link to="/perfil">
                  Ver Minha Coleção
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button variant="outline" onClick={vm.reset} className="w-full">
                Resgatar Outro Sticker
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Tela de resgate
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-primary/5 via-background to-primary/10">
      <div className="max-w-md w-full space-y-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
            <Gift className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-3xl font-bold">Resgatar Sticker</h1>
          <p className="text-muted-foreground">
            Digite o código ou escaneie o QR Code para adicionar um sticker à sua coleção
          </p>
        </div>

        {/* Scanner QR Code */}
        {vm.showScanner && (
          <QRCodeScanner
            onScan={vm.handleQRCodeScan}
            onClose={() => vm.setShowScanner(false)}
          />
        )}

        {/* Opções de Resgate */}
        {!vm.showScanner && (
          <div className="space-y-4">
            {/* Opção 1: Digitar Código */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Keyboard className="w-5 h-5 text-primary" />
                  <CardTitle className="text-lg">Digitar Código</CardTitle>
                </div>
                <CardDescription>
                  Insira o código de resgate manualmente
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-2">
                  <Input
                    placeholder="ABC12345"
                    value={vm.code}
                    onChange={(e) => vm.setCode(e.target.value.toUpperCase())}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        vm.handleClaim();
                      }
                    }}
                    maxLength={12}
                    className="text-center text-lg font-mono tracking-wider"
                    disabled={vm.isLoading}
                  />
                  <Button
                    onClick={() => vm.handleClaim()}
                    disabled={vm.isLoading || vm.code.length < 8}
                    className="whitespace-nowrap"
                  >
                    {vm.isLoading ? (
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-current" />
                    ) : (
                      'Resgatar'
                    )}
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground text-center">
                  {vm.code.length}/12 caracteres (mínimo: 8)
                </p>
              </CardContent>
            </Card>

            {/* Divider */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t"></div>
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">ou</span>
              </div>
            </div>

            {/* Opção 2: Escanear QR Code */}
            <Card className="border-2 border-dashed hover:border-primary/50 transition-colors cursor-pointer">
              <CardHeader onClick={() => vm.setShowScanner(true)} className="cursor-pointer">
                <div className="flex items-center gap-2">
                  <QrCode className="w-5 h-5 text-primary" />
                  <CardTitle className="text-lg">Escanear QR Code</CardTitle>
                </div>
                <CardDescription>
                  Use a câmera para escanear o código
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  variant="outline"
                  onClick={() => vm.setShowScanner(true)}
                  className="w-full"
                >
                  <QrCode className="w-4 h-4 mr-2" />
                  Abrir Scanner
                </Button>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Link para Coleção */}
        <div className="text-center">
          <Link
            to="/perfil"
            className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1"
          >
            Ver minha coleção
            <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
      </div>
    </div>
  );
}
