import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainLayout } from '@/shared/components/MainLayout';
import { ProtectedRoute } from '@/shared/components/ProtectedRoute';
import { SessionExpiryWarning } from '@/shared/components/SessionExpiryWarning';
import { Toaster } from '@/components/ui/use-toast.jsx';

// Pages
import { HomePage } from '@/features/home/HomePage';
import { NewsListPage } from '@/features/news/NewsListPage';
import { NewsDetailPage } from '@/features/news/NewsDetailPage';
import { ManualPage } from '@/features/manual/ManualPage';
import { CalendarPage } from '@/features/calendar/CalendarPage';
import { EventPage } from '@/features/events/EventPage';
import { ExamBankPage } from '@/features/exams/ExamBankPage';
import { StickerAlbumPage } from '@/features/stickers/StickerAlbumPage';
import { ProfilePage } from '@/features/profile/ProfilePage';
import { LoginPage } from '@/features/auth/LoginPage';
import { CallbackPage } from '@/features/auth/CallbackPage';
import { AdminLayout } from '@/features/admin/AdminLayout';
import { AdminDashboard } from '@/features/admin/AdminDashboard';
import { AdminManualPage } from '@/features/admin/AdminManualPage';
import { AdminExamBankPage } from '@/features/admin/AdminExamBankPage';

function App() {
  return (
    <BrowserRouter>
      <SessionExpiryWarning />
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/noticias" element={<NewsListPage />} />
          <Route path="/noticias/:slug" element={<NewsDetailPage />} />
          <Route path="/manual" element={<ManualPage />} />
          <Route path="/manual/:slug" element={<ManualPage />} />
          <Route path="/calendario" element={<CalendarPage />} />
          <Route path="/eventos/:id" element={<EventPage />} />
          <Route path="/provas" element={<ExamBankPage />} />
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
          <Route path="noticias" element={<div>Gerenciar Notícias</div>} />
          <Route path="eventos" element={<div>Gerenciar Eventos</div>} />
          <Route path="manual" element={<AdminManualPage />} />
          <Route path="provas" element={<AdminExamBankPage />} />
          <Route path="figurinhas" element={<div>Gerenciar Figurinhas</div>} />
        </Route>
      </Routes>
      
      <Toaster />
    </BrowserRouter>
  );
}

export default App;
