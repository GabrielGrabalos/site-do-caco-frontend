import { Link, useParams } from 'react-router-dom';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export function ManualSidebar({ tree }) {
  const { articleId } = useParams();

  const renderSection = (section, level = 0) => {
    const hasChildren = section.children && section.children.length > 0;
    const hasArticles = section.articles && section.articles.length > 0;

    if (!hasChildren && !hasArticles) return null;

    return (
      <AccordionItem key={section.id} value={section.id}>
        <AccordionTrigger className="text-left hover:no-underline">
          <span className={level === 0 ? 'font-semibold' : ''}>
            {section.title}
          </span>
        </AccordionTrigger>
        <AccordionContent>
          <div className="pl-2 space-y-1">
            {/* Articles in this section */}
            {hasArticles && (
              <div className="space-y-1">
                {section.articles.map((article) => (
                  <Link
                    key={article.id}
                    to={`/manual/${article.id}`}
                    className={`block px-3 py-2 rounded text-sm transition-colors ${
                      articleId === article.id
                        ? 'bg-primary text-primary-foreground font-medium'
                        : 'hover:bg-muted'
                    }`}
                  >
                    {article.title}
                  </Link>
                ))}
              </div>
            )}

            {/* Child sections */}
            {hasChildren && (
              <Accordion type="multiple" className="space-y-1">
                {section.children.map((child) => renderSection(child, level + 1))}
              </Accordion>
            )}
          </div>
        </AccordionContent>
      </AccordionItem>
    );
  };

  return (
    <div className="sticky top-4 max-h-[calc(100vh-2rem)] overflow-y-auto pr-2">
      <h2 className="text-xl font-bold mb-4 px-3">Manual do Calouro</h2>
      <Accordion type="multiple" className="space-y-1">
        {tree.map((section) => renderSection(section))}
      </Accordion>
    </div>
  );
}
