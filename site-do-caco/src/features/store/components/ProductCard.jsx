import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { formatCurrency } from '@/shared/utils/formatters';

export function ProductCard({ product }) {
  const imageUrl = product.coverImage;

  return (
    <Link to={`/loja/produto/${product.slug}`}>
      <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group h-full flex flex-col rounded-xl border-2 hover:border-primary/50">
        {/* Imagem do Produto */}
        <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
          {imageUrl ? (
            <img
              src={imageUrl}
              alt={product.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-gray-400 text-sm">Sem imagem</span>
            </div>
          )}
          
          {/* Badge de Esgotado */}
          {product.outOfStock && (
            <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
              <Badge variant="destructive" className="text-lg px-4 py-2">
                Esgotado
              </Badge>
            </div>
          )}
        </div>

        {/* Conteúdo */}
        <CardHeader className="flex-1 pb-3 pt-4">
          <h3 className="font-semibold text-lg line-clamp-2 leading-tight group-hover:text-primary transition-colors">
            {product.name}
          </h3>
        </CardHeader>

        <CardFooter className="pt-0 pb-4 flex items-center justify-between">
          <div className="flex-1">
            <p className="text-2xl font-bold text-primary mb-1">
              {formatCurrency(product.price)}
            </p>
            <div className="flex items-center gap-2 flex-wrap">
              {product.categoryName && (
                <Badge variant="secondary" className="text-xs">
                  {product.categoryName}
                </Badge>
              )}
              {product.manageStock && !product.outOfStock && product.stockQuantity && (
                <Badge variant="outline" className="text-xs">
                  {product.stockQuantity} em estoque
                </Badge>
              )}
            </div>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}
