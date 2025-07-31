import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Player from "./components/Player";
import HomePage from "./pages/HomePage";
import ExplorePage from "./pages/ExplorePage";
import LibraryPage from "./pages/LibraryPage";
import FullScreenPlayerPage from "./pages/FullScreenPlayerPage";

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isFullScreenPlayerVisible, setIsFullScreenPlayerVisible] =
    useState(false);

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage />;
      case "explore":
        return <ExplorePage />;
      case "library":
        return <LibraryPage />;
      default:
        return <HomePage />;
    }
  };

  const handleSetCurrentPage = (page: string) => {
    setIsFullScreenPlayerVisible(false);
    setCurrentPage(page);
  };

  const toggleFullScreenPlayer = () => {
    setIsFullScreenPlayerVisible((prev) => !prev);
  };

  return (
    <div className="h-screen flex flex-col font-sans bg-background text-foreground p-4">
      <Header
        isCollapsed={isSidebarCollapsed}
        setIsSidebarCollapsed={setIsSidebarCollapsed}
      />
      <div className="flex flex-1 overflow-hidden items-center">
        <Sidebar
          currentPage={currentPage}
          setCurrentPage={handleSetCurrentPage}
          isCollapsed={isSidebarCollapsed}
        />
        <main className="flex-1 overflow-y-auto bg-surface self-stretch">
          <div className="p-4 h-full">
            {isFullScreenPlayerVisible ? (
              <FullScreenPlayerPage onClose={function (): void {
                throw new Error("Function not implemented.");
              } } />
            ) : (
              renderPage()
            )}
          </div>
        </main>
      </div>
      <Player
        onMaximize={toggleFullScreenPlayer}
        isMaximized={isFullScreenPlayerVisible}
      />
    </div>
  );
}

export default App;
