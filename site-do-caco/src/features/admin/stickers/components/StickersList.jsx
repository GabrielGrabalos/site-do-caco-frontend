import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import {
  Gift,
  Eye,
  Calendar,
  Zap,
  Pencil,
} from 'lucide-react';

export function StickersList({
  stickers,
  loading,
  onGenerateCodes,
  onEdit,
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
          Nenhuma figurinha cadastrada
        </h3>
        <p className="text-muted-foreground">
          Comece criando sua primeira figurinha para o álbum
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
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
                  className="w-full h-full object-cover"
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
            <CardContent className="p-3 sm:p-4 space-y-2 sm:space-y-3">
              {/* Title & Description */}
              <div>
                <h3 className="font-semibold text-xs sm:text-sm line-clamp-2 group-hover:text-primary transition-colors">
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

              {/* Origin Event Info */}
              {sticker.originEvent ? (
                <div className="space-y-2 p-2 rounded-md bg-muted/50 border border-border/50">
                  <div className="flex items-start gap-2">
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-medium line-clamp-1">
                        {sticker.originEvent.title}
                      </p>
                      {sticker.originEvent.location && (
                        <p className="text-xs text-muted-foreground line-clamp-1 mt-0.5">
                          📍 {sticker.originEvent.location}
                        </p>
                      )}
                      {sticker.originEvent.startDate && (
                        <p className="text-xs text-muted-foreground mt-0.5">
                          📅 {new Date(sticker.originEvent.startDate).toLocaleDateString('pt-BR')}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="flex gap-1">
                    {sticker.originEvent.importance && (
                      <Badge variant="secondary" className="text-xs px-1.5 py-0">
                        {sticker.originEvent.importance === 'HIGHLIGHT' && '⭐ Destaque'}
                        {sticker.originEvent.importance === 'IMPORTANT' && '🔔 Importante'}
                        {sticker.originEvent.importance === 'NORMAL' && '📌 Normal'}
                      </Badge>
                    )}
                    {sticker.originEvent.type && (
                      <Badge variant="outline" className="text-xs px-1.5 py-0">
                        {sticker.originEvent.type === 'ACADEMIC' && '🎓 Acadêmico'}
                        {sticker.originEvent.type === 'SOCIAL' && '🎉 Social'}
                        {sticker.originEvent.type === 'SPORTS' && '⚽ Esportivo'}
                        {sticker.originEvent.type === 'CULTURAL' && '🎭 Cultural'}
                        {sticker.originEvent.type === 'OTHER' && '📋 Outro'}
                      </Badge>
                    )}
                  </div>
                </div>
              ) : (
                <div className="text-xs text-muted-foreground italic p-2 rounded-md bg-muted/30">
                  Sem evento associado
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex gap-1.5 sm:gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  className="flex-1 gap-1 sm:gap-2 text-xs px-2 sm:px-3"
                  onClick={() => onEdit(sticker)}
                >
                  <Pencil className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                  Editar
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="flex-1 gap-1 sm:gap-2 text-xs px-2 sm:px-3"
                  onClick={() => onGenerateCodes(sticker)}
                >
                  <Gift className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                  Códigos
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
}
