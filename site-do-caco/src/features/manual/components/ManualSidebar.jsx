import { ChevronDown, ChevronRight, Book, FileText, Circle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function ManualSidebar({
  categories,
  selectedCategory,
  chapters,
  selectedChapter,
  articles,
  selectedArticle,
  loading,
  onSelectCategory,
  onSelectChapter,
  onSelectArticle,
}) {
  if (loading) {
    return (
      <div className="space-y-3">
        {[1, 2, 3].map((i) => (
          <div key={i} className="animate-pulse">
            <div className="h-8 bg-muted rounded mb-2" />
            <div className="h-6 bg-muted rounded ml-4" />
          </div>
        ))}
      </div>
    );
  }

  return (
    <nav className="space-y-1">
      <h2 className="text-sm font-semibold text-muted-foreground mb-3 px-2">
        CATEGORIAS
      </h2>
      {categories.map((category) => {
        const isExpanded = selectedCategory === category.id;
        const categoryChapters = isExpanded ? chapters : [];

        return (
          <div key={category.id} className="space-y-1">
            {/* Category */}
            <Button
              variant="ghost"
              className={`w-full justify-start text-left font-medium ${
                isExpanded ? 'bg-accent' : ''
              }`}
              onClick={() => onSelectCategory(category)}
            >
              {isExpanded ? (
                <ChevronDown className="h-4 w-4 mr-2 flex-shrink-0" />
              ) : (
                <ChevronRight className="h-4 w-4 mr-2 flex-shrink-0" />
              )}
              <Book className="h-4 w-4 mr-2 flex-shrink-0" />
              <span className="flex-1 truncate">{category.title}</span>
              <span className="text-xs text-muted-foreground ml-2">
                {category.chapterCount}
              </span>
            </Button>

            {/* Chapters */}
            {isExpanded && categoryChapters.length > 0 && (
              <div className="ml-4 space-y-1">
                {categoryChapters.map((chapter) => {
                  const isChapterExpanded = selectedChapter === chapter.id;
                  const chapterArticles = isChapterExpanded ? articles : [];

                  return (
                    <div key={chapter.id} className="space-y-1">
                      {/* Chapter */}
                      <Button
                        variant="ghost"
                        size="sm"
                        className={`w-full justify-start text-left ${
                          isChapterExpanded ? 'bg-accent' : ''
                        }`}
                        onClick={() => onSelectChapter(chapter)}
                      >
                        {isChapterExpanded ? (
                          <ChevronDown className="h-3.5 w-3.5 mr-2 flex-shrink-0" />
                        ) : (
                          <ChevronRight className="h-3.5 w-3.5 mr-2 flex-shrink-0" />
                        )}
                        <FileText className="h-3.5 w-3.5 mr-2 flex-shrink-0" />
                        <span className="flex-1 truncate text-sm">
                          {chapter.title}
                        </span>
                        <span className="text-xs text-muted-foreground ml-2">
                          {chapter.articleCount}
                        </span>
                      </Button>

                      {/* Articles */}
                      {isChapterExpanded && chapterArticles.length > 0 && (
                        <div className="ml-6 space-y-0.5">
                          {chapterArticles.map((article) => (
                            <Button
                              key={article.id}
                              variant="ghost"
                              size="sm"
                              className={`w-full justify-start text-left ${
                                selectedArticle?.id === article.id
                                  ? 'bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground'
                                  : ''
                              }`}
                              onClick={() => onSelectArticle(article)}
                            >
                              <Circle
                                className={`h-2 w-2 mr-2 flex-shrink-0 ${
                                  selectedArticle?.id === article.id
                                    ? 'fill-current'
                                    : ''
                                }`}
                              />
                              <span className="flex-1 truncate text-xs">
                                {article.title}
                              </span>
                            </Button>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}

      {categories.length === 0 && (
        <div className="text-center py-8 text-sm text-muted-foreground">
          Nenhuma categoria disponível
        </div>
      )}
    </nav>
  );
}
