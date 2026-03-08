import { EditorLayout } from './EditorLayout';
import { EditorNewsPage } from './news/EditorNewsPage';

export function EditorPage() {
  return (
    <EditorLayout>
      <EditorNewsPage />
    </EditorLayout>
  );
}
