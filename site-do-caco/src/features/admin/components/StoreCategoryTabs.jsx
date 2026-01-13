import React, { useState } from 'react';
import { Plus, X, Pencil, GripVertical } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  horizontalListSortingStrategy,
  sortableKeyboardCoordinates,
  useSortable,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

function SortableCategoryTab({ category, isSelected, onSelect, onEdit, onDelete }) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: category.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`
        relative inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full 
        transition-all
        ${isSelected
          ? 'bg-blue-600 text-white'
          : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
        }
      `}
    >
      <button
        {...attributes}
        {...listeners}
        className="cursor-grab active:cursor-grabbing"
      >
        <GripVertical size={14} />
      </button>
      
      <button
        onClick={() => onSelect(category)}
        className="text-sm font-semibold flex-1"
      >
        {category.name}
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onEdit(category);
        }}
        className={`
          transition-colors
          ${isSelected
            ? 'text-white hover:text-blue-200'
            : 'text-gray-400 hover:text-blue-500'
          }
        `}
        title="Editar categoria"
      >
        <Pencil size={14} />
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onDelete(category);
        }}
        className={`
          transition-colors
          ${isSelected
            ? 'text-white hover:text-red-200'
            : 'text-gray-400 hover:text-red-500'
          }
        `}
        title="Excluir categoria"
      >
        <X size={14} />
      </button>
    </div>
  );
}

export function StoreCategoryTabs({
  categories,
  selectedCategory,
  onSelectCategory,
  onAddCategory,
  onEditCategory,
  onDeleteCategory,
  onReorderCategories,
}) {
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [categoryToDelete, setCategoryToDelete] = useState(null);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDeleteClick = (category) => {
    setCategoryToDelete(category);
    setDeleteDialogOpen(true);
  };

  const handleConfirmDelete = () => {
    if (categoryToDelete) {
      onDeleteCategory(categoryToDelete.id);
      setDeleteDialogOpen(false);
      setCategoryToDelete(null);
    }
  };

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    const oldIndex = categories.findIndex((c) => c.id === active.id);
    const newIndex = categories.findIndex((c) => c.id === over.id);
    if (oldIndex === -1 || newIndex === -1) return;

    const newOrder = arrayMove(categories, oldIndex, newIndex);
    const categoryIds = newOrder.map((c) => c.id);
    onReorderCategories(categoryIds);
  };

  return (
    <>
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <SortableContext
          items={categories.map((c) => c.id)}
          strategy={horizontalListSortingStrategy}
        >
          <div className="flex flex-wrap gap-2 mb-6">
            {categories.map((category) => (
              <SortableCategoryTab
                key={category.id}
                category={category}
                isSelected={selectedCategory?.id === category.id}
                onSelect={onSelectCategory}
                onEdit={onEditCategory}
                onDelete={handleDeleteClick}
              />
            ))}

            <Button
              variant="outline"
              size="sm"
              onClick={onAddCategory}
              className="rounded-full px-4 py-2 border-2 border-dashed border-gray-300 hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-950"
            >
              <Plus size={16} className="mr-1" />
              Adicionar Categoria
            </Button>
          </div>
        </SortableContext>
      </DndContext>

      <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Excluir categoria?</AlertDialogTitle>
            <AlertDialogDescription>
              Tem certeza que deseja excluir a categoria{' '}
              <strong>{categoryToDelete?.name}</strong>?
              <br />
              <br />
              <span className="text-red-600 font-semibold">
                Todos os produtos desta categoria também serão excluídos!
              </span>
              <br />
              Esta ação não pode ser desfeita.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancelar</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleConfirmDelete}
              className="bg-red-600 hover:bg-red-700"
            >
              Excluir
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
