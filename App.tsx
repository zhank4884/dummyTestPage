import React from 'react';
import { AuthProvider, useAuth } from './context/AuthContext';
import LandingPage from './pages/LandingPage';
import ProfilePage from './pages/ProfilePage';
import Footer from './components/Footer';

const MainContent: React.FC = () => {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-upi-red border-t-transparent rounded-full animate-spin"></div>
          <p className="text-slate-600 font-semibold">Memuat SSO UPI...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="min-h-screen">
        {isAuthenticated ? <ProfilePage /> : <LandingPage />}
      </div>
      {!isAuthenticated && <Footer />}
    </>
  );
};

const App: React.FC = () => {
  return (
    <AuthProvider>
      <MainContent />
    </AuthProvider>
  );
};

export default App;