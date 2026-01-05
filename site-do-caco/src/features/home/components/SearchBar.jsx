import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export function SearchBar() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/busca?q=${encodeURIComponent(query)}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-3xl mx-auto">
      <div className="flex gap-2">
        <Input
          type="text"
          placeholder="Buscar no manual, notícias, eventos..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="h-14 text-lg"
        />
        <Button type="submit" size="lg" className="h-14 px-8">
          <Search className="h-5 w-5" />
        </Button>
      </div>
    </form>
  );
}
