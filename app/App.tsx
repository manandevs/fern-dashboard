
import React, { useState } from 'react';
import { Sidebar } from '../components/Sidebar';
import { Header } from '../components/Header';
import { AnalyticsPage } from '../components/AnalyticsPage';
import { DataPage } from '../components/DataPage';
import { FormsPage } from '../components/FormsPage';
import { CardGallery } from '../components/CardGallery';
import { DropdownPage } from '../components/DropdownPage';
import { AlertsPage } from '../components/AlertsPage';
import { DesignSystem } from '../components/DesignSystem';
import { LoginPage } from '../components/LoginPage';
import { NotFoundPage } from '../components/NotFoundPage';
import { ProfilePage } from '../components/ProfilePage';
import { SettingsPage } from '../components/SettingsPage';
import { BillingPage } from '../components/BillingPage';
import { StorefrontPage } from '../components/StorefrontPage';

type ViewType = 'analytics' | 'tables' | 'forms' | 'cards' | 'menus' | 'notifications' | 'styles' | 'login' | 'profile' | 'settings' | 'billing' | '404' | 'storefront';

const App: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [currentView, setCurrentView] = useState<ViewType>('analytics');

  // Handle views that shouldn't show Sidebar/Header (like Login or 404)
  if (currentView === 'login') return <LoginPage onLogin={() => setCurrentView('analytics')} />;
  if (currentView === '404') return <NotFoundPage onReturn={() => setCurrentView('analytics')} />;

  return (
    <div className="flex min-h-screen overflow-hidden">
      {/* Sidebar - Hide if in storefront preview to maximize viewport */}
      {currentView !== 'storefront' && (
        <div className={`
          fixed inset-y-0 left-0 z-50 transform transition-transform duration-300 ease-in-out md:relative md:translate-x-0
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        `}>
          <Sidebar 
            onClose={() => setIsSidebarOpen(false)} 
            currentView={currentView}
            onViewChange={(view) => setCurrentView(view as ViewType)}
          />
        </div>
      )}

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        {currentView !== 'storefront' ? (
          <>
            <Header 
              onMenuClick={() => setIsSidebarOpen(true)} 
              onNavigate={(view) => setCurrentView(view as ViewType)}
            />
            <main className="flex-1 overflow-y-auto p-4 md:p-8">
              {currentView === 'analytics' && <AnalyticsPage />}
              {currentView === 'tables' && <DataPage />}
              {currentView === 'forms' && <FormsPage />}
              {currentView === 'cards' && <CardGallery />}
              {currentView === 'menus' && <DropdownPage />}
              {currentView === 'notifications' && <AlertsPage />}
              {currentView === 'styles' && <DesignSystem />}
              {currentView === 'profile' && <ProfilePage />}
              {currentView === 'settings' && <SettingsPage />}
              {currentView === 'billing' && <BillingPage />}
            </main>
          </>
        ) : (
          <main className="flex-1 overflow-y-auto relative">
            {/* Quick Exit Button for Dashboard Preview */}
            <button 
              onClick={() => setCurrentView('analytics')}
              className="fixed bottom-8 right-8 z-[100] bg-[#212934] text-white px-6 py-3 rounded-2xl font-bold shadow-2xl border border-[#59ab6e]/30 hover:bg-[#59ab6e] transition-all flex items-center space-x-2 active:scale-95"
            >
              <ArrowRight size={18} className="rotate-180" />
              <span>Back to Dashboard</span>
            </button>
            <StorefrontPage onLogin={() => setCurrentView('login')} />
          </main>
        )}
      </div>

      {/* Overlay for mobile sidebar */}
      {isSidebarOpen && currentView !== 'storefront' && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </div>
  );
};

// Internal icon for the exit button
const ArrowRight = ({ size, className }: { size: number, className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
);

export default App;
