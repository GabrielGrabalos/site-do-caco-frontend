export function WarningPreview({ markdownText, severityLevel }) {
  if (!markdownText) return null;

  const getSeverityStyles = () => {
    switch (severityLevel) {
      case 'CRITICAL':
        return 'bg-gray-200 border-gray-900 text-gray-950';
      case 'HIGH':
        return 'bg-red-100 border-red-400 text-red-950';
      case 'MEDIUM':
        return 'bg-yellow-100 border-yellow-400 text-yellow-950';
      default:
        return 'bg-blue-100 border-blue-400 text-blue-950';
    }
  };

  const renderMarkdown = (text) => {
    return text
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-primary font-semibold hover:underline">$1</a>');
  };

  return (
    <div>
      <label className="block text-sm font-medium mb-2">
        Preview
      </label>
      <div className={`rounded-lg border-2 p-4 ${getSeverityStyles()}`}>
        <div className="prose prose-sm max-w-none [&_a]:text-primary [&_a]:font-semibold [&_a]:hover:underline">
          <div dangerouslySetInnerHTML={{ __html: renderMarkdown(markdownText) }} />
        </div>
      </div>
    </div>
  );
}
