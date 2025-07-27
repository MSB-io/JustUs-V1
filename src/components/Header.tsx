import React from "react";
import {
  ChevronLeft,
  ChevronRight,
  Search,
  Bell,
  User,
  PanelLeftClose,
  PanelRightClose,
} from "lucide-react";
import { Logo } from "./Logo";

interface HeaderProps {
  isCollapsed: boolean;
  setIsSidebarCollapsed: (update: React.SetStateAction<boolean>) => void;
}

const Header: React.FC<HeaderProps> = ({
  isCollapsed,
  setIsSidebarCollapsed,
}) => {
  return (
    <header className="flex items-center justify-between p-4 bg-background/80 backdrop-blur-sm border border-border rounded-xl">
      <div className="flex items-center gap-4">
        <button
          onClick={() => setIsSidebarCollapsed((prev) => !prev)}
          className="p-2 rounded-full text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
          title={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {isCollapsed ? (
            <PanelRightClose className="h-6 w-6" />
          ) : (
            <PanelLeftClose className="h-6 w-6" />
          )}
        </button>
        <Logo />
        <div className="flex items-center gap-2">
          <button className="p-2 rounded-full bg-black/20 hover:bg-muted disabled:opacity-50">
            <ChevronLeft className="h-6 w-6 text-muted-foreground" />
          </button>
          <button className="p-2 rounded-full bg-black/20 hover:bg-muted disabled:opacity-50">
            <ChevronRight className="h-6 w-6 text-muted-foreground" />
          </button>
        </div>
        <div className="relative w-96">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search for songs, artists, albums..."
            className="w-full bg-muted rounded-full py-2 pl-10 pr-4 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <button className="p-2 rounded-full hover:bg-muted">
          <Bell className="h-6 w-6 text-muted-foreground" />
        </button>
        <button className="flex items-center gap-2 pr-2 rounded-full hover:bg-muted">
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
            <User className="h-5 w-5 text-black" />
          </div>
        </button>
      </div>
    </header>
  );
};

export default Header;
