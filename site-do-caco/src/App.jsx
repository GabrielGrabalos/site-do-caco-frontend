import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { MainLayout } from '@/shared/components/MainLayout';
import { ProtectedRoute } from '@/shared/components/ProtectedRoute';
import { SessionExpiryWarning } from '@/shared/components/SessionExpiryWarning';
import { ScrollToTop } from '@/shared/components/ScrollToTop';
import { UnderConstructionPage } from '@/shared/components/UnderConstructionPage';
import { Toaster } from '@/components/ui/use-toast.jsx';
import { ThemeProvider } from '@/shared/contexts/ThemeContext';
import { AuthProvider } from '@/shared/contexts/AuthContext';
import { redirectManager } from '@/shared/services/redirectManager';

// Pages
import { HomePage } from '@/features/home/HomePage';
import { NewsListPage } from '@/features/news/NewsListPage';
import { NewsDetailPage } from '@/features/news/NewsDetailPage';
import { ManualPage } from '@/features/manual/ManualPage';
import { CalendarPage } from '@/features/calendar/CalendarPage';
import { EventPage } from '@/features/events/EventPage';
import { ExamBankPage } from '@/features/exams/ExamBankPage';
import { StickerAlbumPage } from '@/features/stickers/StickerAlbumPage';
import { StickerClaimPage } from '@/features/stickers/StickerClaimPage';
import { ProfilePage } from '@/features/profile/ProfilePage';
import { LoginPage } from '@/features/auth/LoginPage';
import { CallbackPage } from '@/features/auth/CallbackPage';
import { ProfileFormPage } from '@/features/profile-form/ProfileFormPage';
import { AdminLayout } from '@/features/admin/AdminLayout';
import { AdminDashboard } from '@/features/admin/dashboard/AdminDashboard';
import { AdminNewsPage } from '@/features/admin/news/AdminNewsPage';
import { AdminManualPage } from '@/features/admin/manual/AdminManualPage';
import { AdminExamBankPage } from '@/features/admin/exams/AdminExamBankPage';
import { AdminWhatsAppGroupsPage } from '@/features/admin/whatsapp-groups/AdminWhatsAppGroupsPage';
import { AdminStorePage } from '@/features/admin/store/AdminStorePage';
import { AdminEventsPage } from '@/features/admin/event/AdminEventsPage';
import { AdminStickersPage } from '@/features/admin/stickers/AdminStickersPage';
import { SuperAdminPage } from '@/features/admin/super-admin/SuperAdminPage';
import { StorePage } from '@/features/store/StorePage';
import { ProductDetailPage } from '@/features/store/ProductDetailPage';
import { EditorLayout } from '@/features/editor/EditorLayout';
import { EditorNewsPage } from '@/features/editor/news/EditorNewsPage';

/**
 * Componente interno que escuta o evento global 'caco:form-required' emitido pelo
 * apiClient sempre que o backend retorna 403 com error="form_required".
 * Precisa ficar dentro de BrowserRouter para ter acesso ao useNavigate.
 */
function FormRequiredRedirect() {
  const navigate = useNavigate();

  useEffect(() => {
    const handler = () => {
      const currentPath = window.location.pathname + window.location.search;
      
      // Não salva se já estamos na página do formulário
      if (!currentPath.startsWith('/formulario-perfil')) {
        // Salva o caminho atual para redirecionamento após o formulário
        redirectManager.saveFormRedirect(currentPath);
        navigate('/formulario-perfil', { replace: true });
      }
    };

    window.addEventListener('caco:form-required', handler);
    return () => window.removeEventListener('caco:form-required', handler);
  }, [navigate]);

  return null;
}

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <BrowserRouter>
          <ScrollToTop />
          <FormRequiredRedirect />
          <SessionExpiryWarning />
          <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/noticias" element={<NewsListPage />} />
          <Route path="/noticias/:slug" element={<NewsDetailPage />} />
          <Route path="/manual" element={<UnderConstructionPage />} />
          <Route path="/manual/:slug" element={<ManualPage />} />
          <Route path="/calendario" element={<CalendarPage />} />
          <Route path="/eventos/:slug" element={<EventPage />} />
          <Route path="/provas" element={<ExamBankPage />} />
          <Route path="/loja" element={<UnderConstructionPage />} />
          <Route path="/loja/produto/:slug" element={<UnderConstructionPage />} />
          <Route path="/gaveta" element={<UnderConstructionPage />} />
          <Route path="/espaco-de-fala" element={<UnderConstructionPage />} />
          <Route path="/carrinho" element={<UnderConstructionPage />} />
          <Route path="/figurinhas/resgatar" element={<StickerClaimPage />} />
          <Route path="/figurinhas/resgatar/:code" element={<StickerClaimPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/auth/callback" element={<CallbackPage />} />
          
          {/* Protected Routes */}
          <Route
            path="/perfil"
            element={
              <ProtectedRoute>
                <ProfilePage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/album"
            element={
              <ProtectedRoute>
                <StickerAlbumPage />
              </ProtectedRoute>
            }
          />
        </Route>

        {/* Formulário de perfil — fora do MainLayout para tela dedicada */}
        <Route path="/formulario-perfil" element={<ProfileFormPage />} />

        {/* Admin Routes */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute requireAdmin>
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<AdminDashboard />} />
          <Route path="noticias" element={<AdminNewsPage />} />
          <Route path="eventos" element={<AdminEventsPage />} />
          <Route path="manual" element={<AdminManualPage />} />
          <Route path="provas" element={<AdminExamBankPage />} />
          <Route path="grupos-whatsapp" element={<AdminWhatsAppGroupsPage />} />
          <Route path="figurinhas" element={<AdminStickersPage />} />
          <Route path="loja" element={<AdminStorePage />} />
          <Route path="super-admin" element={<SuperAdminPage />} />
        </Route>

        {/* Editor Routes */}
        <Route
          path="/editor"
          element={
            <ProtectedRoute requireEditor>
              <EditorLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<EditorNewsPage />} />
        </Route>
      </Routes>
      
      <Toaster />
        </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
