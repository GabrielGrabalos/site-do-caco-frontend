import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Plus } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

export function AdminListTemplate({
  title,
  description,
  onSearch,
  onCreate,
  createLabel = "Adicionar",
  searchPlaceholder = "Buscar...",
  loading,
  isEmpty,
  emptyMessage = "Nenhum item encontrado.",
  children,
  actionButtons
}) {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">{title}</h1>
          {description && (
            <p className="text-muted-foreground">{description}</p>
          )}
        </div>
        <div className="flex gap-2 w-full sm:w-auto">
          {actionButtons}
          {onCreate && (
             <Button onClick={onCreate} disabled={loading}>
              <Plus className="w-4 h-4 mr-2" />
              {createLabel}
            </Button>
          )}
        </div>
      </div>

      <Card>
        <CardHeader className="pb-3">
             {onSearch && (
                <div className="relative">
                  <Input
                    placeholder={searchPlaceholder}
                    onChange={(e) => onSearch(e.target.value)}
                    className="max-w-sm"
                  />
                </div>
             )}
        </CardHeader>
        <CardContent>
             {loading ? (
                <div className="text-center py-10 text-muted-foreground">
                    Carregando...
                </div>
             ) : isEmpty ? (
                <div className="text-center py-10 text-muted-foreground border-2 border-dashed rounded-lg">
                    {emptyMessage}
                </div>
             ) : (
                children
             )}
        </CardContent>
      </Card>
    </div>
  );
}
