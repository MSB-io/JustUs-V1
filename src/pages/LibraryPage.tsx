import React, { useState } from "react";
import { Plus } from "lucide-react";
import { cn } from "../lib/utils";
import {
  userLibraryPlaylists,
  savedAlbums,
  followedArtists,
} from "../constants/data";
import MediaCard from "../components/MediaCard";
import PlaylistCard from "../components/PlaylistCard";

type LibraryTab = "Playlists" | "Albums" | "Artists";

const LibraryPage = () => {
  const [activeTab, setActiveTab] = useState<LibraryTab>("Playlists");

  const tabs: LibraryTab[] = ["Playlists", "Albums", "Artists"];

  const renderContent = () => {
    switch (activeTab) {
      case "Playlists":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-primary to-secondary h-full min-h-[120px] rounded-lg p-4 flex flex-col justify-center items-center gap-2 text-primary-foreground cursor-pointer hover:scale-105 transition-transform duration-300">
              <Plus size={40} />
              <h3 className="font-bold text-lg">Create playlist</h3>
            </div>
            {userLibraryPlaylists.map((playlist) => (
              <PlaylistCard key={playlist.id} playlist={playlist} />
            ))}
          </div>
        );
      case "Albums":
        return (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
            {savedAlbums.map((album) => (
              <MediaCard key={album.id} media={album} />
            ))}
          </div>
        );
      case "Artists":
        return (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
            {followedArtists.map((artist) => (
              <MediaCard key={artist.id} media={artist} />
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <main className="p-6 bg-black border border-border rounded-xl">
      <h1 className="text-4xl font-extrabold tracking-tight mb-8">Your Library</h1>

      <div className="flex items-center gap-4 mb-8 border-b border-border">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={cn(
              "px-4 py-2 font-semibold text-muted-foreground border-b-2 border-transparent transition-colors",
              activeTab === tab && "text-foreground border-primary"
            )}
          >
            {tab}
          </button>
        ))}
      </div>
      <div>{renderContent()}</div>
    </main>
  );
};

export default LibraryPage;
