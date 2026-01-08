/**
 * Componente MDXEditor reutilizável com suporte a upload de imagens
 */

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
import { imageUploadService } from '../services/imageUploadService';
import { useToast } from '@/components/ui/use-toast';
import { ImageUploadDialog } from './ImageUploadDialog';

/**
 * Componente MDXEditor configurado com todos os plugins necessários
 * @param {Object} props
 * @param {string} props.value - Conteúdo markdown atual
 * @param {function} props.onChange - Callback quando o conteúdo mudar
 * @param {string} props.placeholder - Texto placeholder
 * @param {string} props.className - Classes CSS adicionais
 * @param {boolean} props.readOnly - Define se o editor é apenas leitura
 * @param {string} props.editorKey - Key única para forçar re-montagem do editor
 */
export const MDXEditor = ({
  value = '',
  onChange,
  placeholder = 'Digite aqui...',
  className = '',
  readOnly = false,
  editorKey,
}) => {
  const { toast } = useToast();
  const [isUploadDialogOpen, setIsUploadDialogOpen] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const uploadResolveRef = useRef(null);

  const handleImageUpload = async (image) => {
    // Previne múltiplos uploads simultâneos
    if (isUploading) {
      throw new Error('Já existe um upload em andamento');
    }

    setIsUploading(true);
    setIsUploadDialogOpen(true);

    // Cria uma Promise que será resolvida quando o dialog completar
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
        plugins={[
          // Plugins de formatação
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
            },
          }),
          
          // Plugin de imagens com função de upload
          imagePlugin({
            imageUploadHandler: handleImageUpload,
          }),

          // Atalhos de teclado
          markdownShortcutPlugin(),

          // Toolbar
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

      {/* Dialog de upload com progresso */}
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
