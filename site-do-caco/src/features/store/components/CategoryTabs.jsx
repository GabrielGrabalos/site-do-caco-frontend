import { cn } from '@/lib/utils';

export function CategoryTabs({ categories, selectedCategory, onSelectCategory }) {
  return (
    <div className="overflow-x-auto pb-2 -mx-4 px-4 md:mx-0 md:px-0">
      <div className="flex gap-3 md:flex-wrap">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onSelectCategory(category)}
            className={cn(
              "px-4 py-2 rounded-full text-sm font-medium transition-colors border-2 whitespace-nowrap flex-shrink-0",
              selectedCategory?.id === category.id
                ? "bg-primary text-primary-foreground border-primary shadow-md"
                : "bg-background border-gray-300 dark:border-gray-600 hover:border-primary"
            )}
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
}
