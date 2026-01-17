import { ProductCard } from './ProductCard';
import { Package } from 'lucide-react';

export function ProductGrid({ products, categoryName }) {
  if (products.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <Package size={64} className="text-gray-300 dark:text-gray-600 mb-4" />
        <h3 className="text-xl font-semibold text-gray-600 dark:text-gray-400 mb-2">
          Nenhum produto disponível
        </h3>
        <p className="text-gray-500 dark:text-gray-500">
          {categoryName ? `Não há produtos disponíveis em ${categoryName} no momento` : 'Selecione uma categoria para ver os produtos'}
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
