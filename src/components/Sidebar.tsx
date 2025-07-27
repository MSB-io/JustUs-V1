import React from "react";
import * as Lucide from "lucide-react";
import { sidebarLinks, userPlaylists } from "../constants/data";
import { cn } from "../lib/utils";

interface SidebarProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
  isCollapsed: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({
  currentPage,
  setCurrentPage,
  isCollapsed,
}) => {
  return (
    <aside
      className={cn(
        "bg-black flex flex-col h-fit transition-all duration-300 ease-in-out border border-border rounded-xl",
        isCollapsed ? "w-20" : "w-60"
      )}
    >
      <div className="flex flex-col flex-grow justify-center py-4 px-4">
        {/* Main Navigation */}
        <nav className="flex flex-col gap-3">
          {sidebarLinks
            .filter((link) => link.name !== "Upgrade")
            .map((link) => {
              const Icon = Lucide[link.icon as keyof typeof Lucide];
              const isActive = currentPage === link.name.toLowerCase();
              return (
                <button
                  key={link.name}
                  onClick={() => setCurrentPage(link.name.toLowerCase())}
                  className={cn(
                    "flex items-center p-3 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent transition-colors duration-200 w-full",
                    isActive && "bg-accent text-foreground",
                    !isCollapsed && "gap-4"
                  )}
                  title={isCollapsed ? link.name : undefined}
                >
                  <Icon className="h-6 w-6 flex-shrink-0" />
                  <span
                    className={cn(
                      "font-semibold whitespace-nowrap overflow-hidden transition-all duration-300 ease-in-out",
                      isCollapsed
                        ? "max-w-0 opacity-0"
                        : "max-w-full opacity-100"
                    )}
                  >
                    {link.name}
                  </span>
                </button>
              );
            })}
        </nav>

        <div className="my-4 border-t border-border"></div>

        {/* Playlists Section */}
        <div className="flex flex-col gap-3">
          <button
            className={cn(
              "flex items-center p-3 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent transition-colors duration-200 w-full",
              !isCollapsed && "gap-4"
            )}
            title={isCollapsed ? "New Playlist" : undefined}
          >
            <Lucide.PlusSquare className="h-6 w-6 flex-shrink-0" />
            <span
              className={cn(
                "font-semibold whitespace-nowrap overflow-hidden transition-all duration-300 ease-in-out",
                isCollapsed ? "max-w-0 opacity-0" : "max-w-full opacity-100"
              )}
            >
              New playlist
            </span>
          </button>
          {userPlaylists.map((playlist) => (
            <a
              key={playlist}
              href="#"
              className={cn(
                "flex items-center p-3 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent/50 transition-colors duration-200 w-full",
                !isCollapsed && "gap-4"
              )}
              title={isCollapsed ? playlist : undefined}
            >
              <Lucide.Music2 className="h-6 w-6 flex-shrink-0" />
              <span
                className={cn(
                  "text-sm font-medium truncate whitespace-nowrap overflow-hidden transition-all duration-300 ease-in-out",
                  isCollapsed ? "max-w-0 opacity-0" : "max-w-full opacity-100"
                )}
              >
                {playlist}
              </span>
            </a>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
