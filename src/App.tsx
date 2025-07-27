import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Player from './components/Player';
import HomePage from './pages/HomePage';
import ExplorePage from './pages/ExplorePage';
import LibraryPage from './pages/LibraryPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'explore':
        return <ExplorePage />;
      case 'library':
        return <LibraryPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="h-screen flex flex-col font-sans bg-background text-foreground p-4 gap-4">
      <Header
        isCollapsed={isSidebarCollapsed}
        setIsSidebarCollapsed={setIsSidebarCollapsed}
      />
      <div className="flex flex-1 overflow-hidden items-center">
        <Sidebar
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          isCollapsed={isSidebarCollapsed}
        />
        <main className="flex-1 overflow-y-auto bg-surface self-stretch">
          <div className="p-6">
            {renderPage()}
          </div>
        </main>
      </div>
      <Player />
    </div>
  );
}

export default App;
