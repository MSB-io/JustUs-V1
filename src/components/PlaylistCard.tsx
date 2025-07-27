import React from "react";
import { Play } from "lucide-react";
import { LibraryPlaylist } from "../types";

interface PlaylistCardProps {
  playlist: LibraryPlaylist;
}

const PlaylistCard: React.FC<PlaylistCardProps> = ({ playlist }) => {
  return (
    <div className="bg-card p-4 rounded-lg hover:bg-muted/50 transition-colors duration-300 group cursor-pointer flex items-center gap-4">
      <div className="relative flex-shrink-0">
        <img
          src={playlist.artwork}
          alt={playlist.title}
          className="w-24 h-24 object-cover rounded-md"
        />
        <button className="absolute inset-0 bg-black/40 flex items-center justify-center rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Play className="h-8 w-8 fill-white text-white" />
        </button>
      </div>
      <div>
        <h3 className="font-bold text-foreground truncate">{playlist.title}</h3>
        <p className="text-sm text-muted-foreground truncate">
          {playlist.description}
        </p>
      </div>
    </div>
  );
};

export default PlaylistCard;
