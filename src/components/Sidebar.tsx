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
                    "flex items-center p-3 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent transition-colors duration-200",
                    isActive && "bg-accent text-foreground",
                    isCollapsed ? "w-12 h-12" : "w-full gap-4"
                  )}
                  title={isCollapsed ? link.name : undefined}
                >
                  <Icon className="h-6 w-6 flex-shrink-0" />
                  {!isCollapsed && (
                    <span className="font-semibold whitespace-nowrap">
                      {link.name}
                    </span>
                  )}
                </button>
              );
            })}
        </nav>

        <div className="my-4 border-t border-border"></div>

        {/* Playlists Section */}
        <div className="flex flex-col gap-3">
          <button
            className={cn(
              "flex items-center p-3 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent transition-colors duration-200",
              isCollapsed ? "w-12 h-12" : "w-full gap-4"
            )}
            title={isCollapsed ? "New Playlist" : undefined}
          >
            <Lucide.PlusSquare className="h-6 w-6 flex-shrink-0" />
            {!isCollapsed && (
              <span className="font-semibold whitespace-nowrap">
                New playlist
              </span>
            )}
          </button>
          {userPlaylists.map((playlist) => (
            <a
              key={playlist}
              href="#"
              className={cn(
                "flex items-center p-3 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent/50 transition-colors duration-200",
                isCollapsed ? "w-12 h-12" : "w-full gap-4"
              )}
              title={isCollapsed ? playlist : undefined}
            >
              <Lucide.Music2 className="h-6 w-6 flex-shrink-0" />
              {!isCollapsed && (
                <span className="text-sm font-medium truncate whitespace-nowrap">
                  {playlist}
                </span>
              )}
            </a>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
