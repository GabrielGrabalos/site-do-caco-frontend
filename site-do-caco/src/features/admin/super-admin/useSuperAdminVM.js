import { useState, useEffect, useCallback } from 'react';
import { superAdminService } from '@/shared/services/superAdminService';

const PAGE_SIZE = 12;

export function useSuperAdminVM() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Pagination
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [totalElements, setTotalElements] = useState(0);

  // Search / filter
  const [searchQuery, setSearchQuery] = useState('');
  const [roleFilter, setRoleFilter] = useState('ALL');

  // Action loading states (keyed by userId)
  const [pendingActions, setPendingActions] = useState({});

  const fetchUsers = useCallback(async (page = 0) => {
    try {
      setLoading(true);
      setError(null);
      const data = await superAdminService.getUsers(page, PAGE_SIZE);
      setUsers(data.content ?? []);
      setTotalPages(data.totalPages ?? 0);
      setTotalElements(data.totalElements ?? 0);
      setCurrentPage(data.number ?? 0);
    } catch (err) {
      setError(err.message || 'Erro ao carregar usuários');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchUsers(0);
  }, [fetchUsers]);

  const goToPage = (page) => {
    fetchUsers(page);
  };

  // ─── Actions ────────────────────────────────────────────────────────────────

  const setPending = (userId, value) =>
    setPendingActions((prev) => ({ ...prev, [userId]: value }));

  const changeUserRole = async (userId, role) => {
    setPending(userId, true);
    try {
      const updated = await superAdminService.changeUserRole(userId, role);
      setUsers((prev) => prev.map((u) => (u.id === userId ? updated : u)));
      return { success: true };
    } catch (err) {
      return { success: false, error: err.message || 'Erro ao alterar role' };
    } finally {
      setPending(userId, false);
    }
  };

  const suspendUser = async (userId) => {
    setPending(userId, true);
    try {
      const updated = await superAdminService.suspendUser(userId);
      setUsers((prev) => prev.map((u) => (u.id === userId ? updated : u)));
      return { success: true };
    } catch (err) {
      return { success: false, error: err.message || 'Erro ao suspender usuário' };
    } finally {
      setPending(userId, false);
    }
  };

  const unsuspendUser = async (userId) => {
    setPending(userId, true);
    try {
      const updated = await superAdminService.unsuspendUser(userId);
      setUsers((prev) => prev.map((u) => (u.id === userId ? updated : u)));
      return { success: true };
    } catch (err) {
      return { success: false, error: err.message || 'Erro ao reativar usuário' };
    } finally {
      setPending(userId, false);
    }
  };

  // ─── Client-side filtering ───────────────────────────────────────────────────

  const filteredUsers = users.filter((u) => {
    const matchesSearch =
      searchQuery.trim() === '' ||
      u.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      u.email?.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesRole = roleFilter === 'ALL' || u.role === roleFilter;

    return matchesSearch && matchesRole;
  });

  return {
    // Data
    users: filteredUsers,
    allUsers: users,
    loading,
    error,

    // Pagination
    currentPage,
    totalPages,
    totalElements,
    goToPage,
    refetch: () => fetchUsers(currentPage),

    // Filters
    searchQuery,
    setSearchQuery,
    roleFilter,
    setRoleFilter,

    // Actions
    pendingActions,
    changeUserRole,
    suspendUser,
    unsuspendUser,
  };
}
