import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import { useEffect, lazy, Suspense } from 'react';
import { MainLayout } from '@/shared/components/MainLayout';
import { ProtectedRoute } from '@/shared/components/ProtectedRoute';
import { SessionExpiryWarning } from '@/shared/components/SessionExpiryWarning';
import { ScrollToTop } from '@/shared/components/ScrollToTop';
import { UnderConstructionPage } from '@/shared/components/UnderConstructionPage';
import { Toaster } from '@/components/ui/use-toast.jsx';
import { ThemeProvider } from '@/shared/contexts/ThemeContext';
import { AuthProvider } from '@/shared/contexts/AuthContext';
import { redirectManager } from '@/shared/services/redirectManager';

// Pages públicas (carregadas eagerly)
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

// Pages administrativas e de editor (code-split: só baixadas por quem acessa /admin ou /editor)
const AdminLayout = lazy(() => import('@/features/admin/AdminLayout').then((m) => ({ default: m.AdminLayout })));
const AdminDashboard = lazy(() => import('@/features/admin/dashboard/AdminDashboard').then((m) => ({ default: m.AdminDashboard })));
const AdminNewsPage = lazy(() => import('@/features/admin/news/AdminNewsPage').then((m) => ({ default: m.AdminNewsPage })));
const AdminManualPage = lazy(() => import('@/features/admin/manual/AdminManualPage').then((m) => ({ default: m.AdminManualPage })));
const AdminExamBankPage = lazy(() => import('@/features/admin/exams/AdminExamBankPage').then((m) => ({ default: m.AdminExamBankPage })));
const AdminWhatsAppGroupsPage = lazy(() => import('@/features/admin/whatsapp-groups/AdminWhatsAppGroupsPage').then((m) => ({ default: m.AdminWhatsAppGroupsPage })));
const AdminStorePage = lazy(() => import('@/features/admin/store/AdminStorePage').then((m) => ({ default: m.AdminStorePage })));
const AdminEventsPage = lazy(() => import('@/features/admin/event/AdminEventsPage').then((m) => ({ default: m.AdminEventsPage })));
const AdminStickersPage = lazy(() => import('@/features/admin/stickers/AdminStickersPage').then((m) => ({ default: m.AdminStickersPage })));
const SuperAdminPage = lazy(() => import('@/features/admin/super-admin/SuperAdminPage').then((m) => ({ default: m.SuperAdminPage })));
const EditorLayout = lazy(() => import('@/features/editor/EditorLayout').then((m) => ({ default: m.EditorLayout })));
const EditorNewsPage = lazy(() => import('@/features/editor/news/EditorNewsPage').then((m) => ({ default: m.EditorNewsPage })));

function RouteLoadingFallback() {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary" />
    </div>
  );
}

/**
 * Componente interno que escuta o evento global 'caco:form-required' emitido pelo
 * httpClient sempre que o backend retorna 403 com error="form_required".
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
              <Suspense fallback={<RouteLoadingFallback />}>
                <AdminLayout />
              </Suspense>
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
              <Suspense fallback={<RouteLoadingFallback />}>
                <EditorLayout />
              </Suspense>
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
