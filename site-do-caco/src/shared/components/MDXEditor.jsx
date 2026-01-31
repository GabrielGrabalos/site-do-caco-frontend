import React, { useState, useRef } from 'react';
import {
  MDXEditor as BaseMDXEditor,
  headingsPlugin,
  listsPlugin,
  quotePlugin,
  thematicBreakPlugin,
  markdownShortcutPlugin,
  linkPlugin,
  linkDialogPlugin,
  imagePlugin,
  tablePlugin,
  codeBlockPlugin,
  codeMirrorPlugin,
  toolbarPlugin,
  UndoRedo,
  BoldItalicUnderlineToggles,
  BlockTypeSelect,
  CreateLink,
  InsertImage,
  InsertTable,
  InsertThematicBreak,
  ListsToggle,
  Separator,
  CodeToggle,
} from '@mdxeditor/editor';
import '@mdxeditor/editor/style.css';
import './MDXEditor.css';
import { useToast } from '@/components/ui/use-toast';
import { ImageUploadDialog } from './ImageUploadDialog';
import { useTheme } from '../contexts/ThemeContext';

export const MDXEditor = ({
  value = '',
  onChange,
  placeholder = 'Digite aqui...',
  className = '',
  readOnly = false,
  editorKey,
}) => {
  const { toast } = useToast();
  // Obtém o tema atual para passar a classe correta ao editor
  const { theme } = useTheme(); 
  
  const [isUploadDialogOpen, setIsUploadDialogOpen] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const uploadResolveRef = useRef(null);

  const handleImageUpload = async (image) => {
    if (isUploading) {
      throw new Error('Já existe um upload em andamento');
    }

    setIsUploading(true);
    setIsUploadDialogOpen(true);

    return new Promise((resolve, reject) => {
      uploadResolveRef.current = { resolve, reject, image };
    });
  };

  const handleImageUploaded = (url) => {
    if (uploadResolveRef.current) {
      uploadResolveRef.current.resolve(url);
      uploadResolveRef.current = null;
    }
    setIsUploading(false);
    setIsUploadDialogOpen(false);
  };

  const handleUploadCancel = () => {
    if (uploadResolveRef.current) {
      uploadResolveRef.current.reject(new Error('Upload cancelado'));
      uploadResolveRef.current = null;
    }
    setIsUploading(false);
    setIsUploadDialogOpen(false);
  };

  return (
    <div className={`mdx-editor-wrapper ${className}`}>
      <BaseMDXEditor
        key={editorKey}
        markdown={value}
        onChange={onChange}
        placeholder={placeholder}
        readOnly={readOnly}
        // Aplica a classe 'dark-theme' se o tema for escuro. 
        // Isso ativa as variáveis internas de cor do MDXEditor.
        className={theme === 'dark' ? 'dark-theme' : ''}
        plugins={[
          headingsPlugin(),
          listsPlugin(),
          quotePlugin(),
          thematicBreakPlugin(),
          linkPlugin(),
          linkDialogPlugin(),
          tablePlugin(),
          codeBlockPlugin({ defaultCodeBlockLanguage: 'javascript' }),
          codeMirrorPlugin({
            codeBlockLanguages: {
              javascript: 'JavaScript',
              typescript: 'TypeScript',
              python: 'Python',
              java: 'Java',
              css: 'CSS',
              html: 'HTML',
              json: 'JSON',
              bash: 'Bash',
              sql: 'SQL'
            },
          }),
          imagePlugin({
            imageUploadHandler: handleImageUpload,
          }),
          markdownShortcutPlugin(),
          toolbarPlugin({
            toolbarContents: () => (
              <>
                <UndoRedo />
                <Separator />
                <BoldItalicUnderlineToggles />
                <CodeToggle />
                <Separator />
                <BlockTypeSelect />
                <Separator />
                <ListsToggle />
                <Separator />
                <CreateLink />
                <InsertImage />
                <Separator />
                <InsertTable />
                <InsertThematicBreak />
              </>
            ),
          }),
        ]}
      />

      <ImageUploadDialog
        isOpen={isUploadDialogOpen}
        onClose={handleUploadCancel}
        onImageUploaded={handleImageUploaded}
        imageFile={uploadResolveRef.current?.image}
      />
    </div>
  );
};

export default MDXEditor;