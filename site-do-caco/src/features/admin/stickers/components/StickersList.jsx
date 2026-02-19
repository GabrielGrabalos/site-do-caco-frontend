import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import {
  Gift,
  Eye,
  Calendar,
  Zap,
} from 'lucide-react';

export function StickersList({
  stickers,
  loading,
  onGenerateCodes,
}) {

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />
      </div>
    );
  }

  if (stickers.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <Gift size={64} className="text-muted-foreground/30 mb-4" />
        <h3 className="text-xl font-semibold text-muted-foreground mb-2">
          Nenhum sticker cadastrado
        </h3>
        <p className="text-muted-foreground">
          Comece criando seu primeiro sticker para o álbum
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {stickers.map(sticker => (
          <Card
            key={sticker.id}
            className="group hover:shadow-lg transition-all duration-200 overflow-hidden"
          >
            {/* Image Section */}
            <div className="relative w-full aspect-square bg-muted overflow-hidden">
              {sticker.imageUrl ? (
                <img
                  src={sticker.imageUrl}
                  alt={sticker.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    e.target.src = '/placeholder-sticker.png';
                  }}
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-primary/5">
                  <Eye className="h-12 w-12 text-muted-foreground/30" />
                </div>
              )}

              {/* Badge de recente */}
              {sticker.isRecent && (
                <Badge className="absolute top-2 right-2 gap-1 bg-green-600 hover:bg-green-700">
                  <Zap className="h-3 w-3" />
                  Novo
                </Badge>
              )}
            </div>

            {/* Content Section */}
            <CardContent className="p-4 space-y-3">
              {/* Title & Description */}
              <div>
                <h3 className="font-semibold text-sm line-clamp-2 group-hover:text-primary transition-colors">
                  {sticker.name}
                </h3>
                {sticker.description && (
                  <p className="text-xs text-muted-foreground line-clamp-2 mt-1">
                    {sticker.description}
                  </p>
                )}
              </div>

              {/* Meta */}
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Calendar className="h-3.5 w-3.5" />
                {sticker.formattedCreatedAt}
              </div>

              {/* Origin Event Badge */}
              {sticker.originEventId && (
                <Badge variant="outline" className="text-xs">
                  Evento #{sticker.originEventId}
                </Badge>
              )}

              {/* Action Button */}
              <Button
                size="sm"
                variant="outline"
                className="w-full gap-2 text-xs"
                onClick={() => onGenerateCodes(sticker)}
              >
                <Gift className="h-3.5 w-3.5" />
                Gerar Códigos
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
}
