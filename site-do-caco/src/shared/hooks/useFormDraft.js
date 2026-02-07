import { useState, useEffect, useCallback } from 'react';

/**
 * Hook to manage form drafts in localStorage.
 * @param {string} storageKey - The key to save the draft in localStorage.
 * @param {object} initialValues - The initial values of the form (when not using draft).
 * @param {boolean} isEditing - Whether the form is in editing mode (drafts are typically for creation).
 * @returns {object} - The draft state and controls.
 */
export function useFormDraft(storageKey, initialValues = {}, isEditing = false) {
  const [draftValues, setDraftValues] = useState(initialValues);
  const [hasDraft, setHasDraft] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load draft on mount
  useEffect(() => {
    if (isEditing) {
        setIsLoaded(true);
        return; 
    }

    const savedDraft = localStorage.getItem(storageKey);
    if (savedDraft) {
      try {
        const parsed = JSON.parse(savedDraft);
        setDraftValues(prev => ({ ...prev, ...parsed }));
        setHasDraft(true);
      } catch (e) {
        console.error("Error parsing draft", e);
      }
    }
    setIsLoaded(true);
  }, [storageKey, isEditing]);

  // Save functionality with debounce could be implemented by the consumer, 
  // or we can expose a save function.
  // For now, let's expose a manual save function to be called by the form's effects.
  const saveDraft = useCallback((values) => {
    if (isEditing) return;
    localStorage.setItem(storageKey, JSON.stringify(values));
    setDraftValues(values);
    setHasDraft(true);
  }, [storageKey, isEditing]);

  const discardDraft = useCallback(() => {
    localStorage.removeItem(storageKey);
    setHasDraft(false);
    setDraftValues(initialValues);
  }, [storageKey, initialValues]);

  return {
    draftValues,
    hasDraft,
    isLoaded,
    saveDraft,
    discardDraft
  };
}
