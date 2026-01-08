import { useState } from 'react';
import { ChevronDown, ChevronRight, Book, FileText, Circle, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

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
  const [searchTerm, setSearchTerm] = useState('');

  // Filtrar artigos pela busca
  const filteredArticles = searchTerm
    ? articles.filter(article =>
        article.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : articles;

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
    <nav className="space-y-2">
      {/* Search bar */}
      <div className="mb-4">
        <div className="relative">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Buscar artigos..."
            className="pl-8 h-9"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        {searchTerm && (
          <p className="text-xs text-muted-foreground mt-2">
            {filteredArticles.length} {filteredArticles.length === 1 ? 'resultado' : 'resultados'}
          </p>
        )}
      </div>

      {/* Lista com scroll quando tiver busca ativa */}
      <div className={searchTerm ? 'max-h-[400px] overflow-y-auto' : ''}>
        {searchTerm && filteredArticles.length > 0 ? (
          // Mostrar apenas artigos filtrados quando houver busca
          <div className="space-y-1">
            <h3 className="text-sm font-semibold text-muted-foreground mb-2 px-2">
              RESULTADOS
            </h3>
            {filteredArticles.map((article) => (
              <Button
                key={article.id}
                variant="ghost"
                size="sm"
                className={`w-full justify-start text-left h-auto py-2 ${
                  selectedArticle?.id === article.id
                    ? 'bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground'
                    : ''
                }`}
                onClick={() => onSelectArticle(article)}
              >
                <Circle
                  className={`h-2 w-2 mr-2 flex-shrink-0 ${
                    selectedArticle?.id === article.id ? 'fill-current' : ''
                  }`}
                />
                <span className="flex-1 text-sm whitespace-normal break-words">{article.title}</span>
              </Button>
            ))}
          </div>
        ) : searchTerm ? (
          <div className="text-center py-4 text-sm text-muted-foreground">
            Nenhum artigo encontrado
          </div>
        ) : (
          // Navegação hierárquica normal
          <div className="space-y-1">
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
              className={`w-full justify-start text-left font-medium h-auto py-2 ${
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
              <span className="flex-1 whitespace-normal break-words">{category.title}</span>
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
                        className={`w-full justify-start text-left h-auto py-2 ${
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
                        <span className="flex-1 text-sm whitespace-normal break-words">
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
                              className={`w-full justify-start text-left h-auto py-1.5 ${
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
                              <span className="flex-1 text-xs whitespace-normal break-words">
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
          </div>
        )}
      </div>
    </nav>
  );
}
