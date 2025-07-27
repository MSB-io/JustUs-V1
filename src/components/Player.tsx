import React from "react";
import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Mic2,
  ListMusic,
  Laptop2,
  Volume1,
  Volume2,
  Maximize2,
  ThumbsUp,
  ThumbsDown,
  MoreHorizontal,
} from "lucide-react";
import { currentSong } from "../constants/data";

const Player = () => {
  const [isPlaying, setIsPlaying] = React.useState(true);
  const [volume] = React.useState(75);

  return (
    <footer className="bg-black border border-border px-4 py-4 flex items-center rounded-xl">
      <div className="flex items-center justify-between w-full gap-6">
        {/* Left Section: Playback Controls & Progress */}
        <div className="p-2 flex-1 flex items-center gap-4 min-w-0">
          <button className="text-muted-foreground hover:text-foreground">
            <SkipBack size={20} />
          </button>
          <button
            className="text-foreground hover:scale-105 transition-transform"
            onClick={() => setIsPlaying(!isPlaying)}
          >
            {isPlaying ? (
              <Pause size={25} className="fill-current" />
            ) : (
              <Play size={25} className="fill-current" />
            )}
          </button>
          <button className="text-muted-foreground hover:text-foreground">
            <SkipForward size={20} />
          </button>
          <span className="text-xs text-muted-foreground ml-2">1:28</span>

          <span className="text-xs text-muted-foreground">
            {currentSong.duration}
          </span>
        </div>

        {/* Center Section: Song Info */}
        <div className="flex-none flex items-center gap-4 min-w-0">
          <img
            src={currentSong.artwork}
            alt={currentSong.title}
            className="w-10 h-10 rounded"
          />
          <div className="hidden md:block">
            <p className="font-semibold text-foreground text-sm truncate max-w-[200px]">
              {currentSong.title}
            </p>
            <p className="text-xs text-muted-foreground truncate max-w-[200px]">
              {currentSong.artist}
            </p>
          </div>
          <button className="text-muted-foreground hover:text-foreground hidden lg:block p-1">
            <ThumbsUp size={20} />
          </button>
          <button className="text-muted-foreground hover:text-foreground hidden lg:block p-1">
            <ThumbsDown size={20} />
          </button>
          <button className="text-muted-foreground hover:text-foreground hidden lg:block p-1">
            <MoreHorizontal size={20} />
          </button>
        </div>

        {/* Right Section: Other Controls */}
        <div className="p-2 flex-1 flex items-center justify-end gap-4 min-w-0">
          <button className="text-muted-foreground hover:text-foreground">
            <Mic2 size={20} />
          </button>
          <button className="text-muted-foreground hover:text-foreground">
            <ListMusic size={20} />
          </button>
          <button className="text-muted-foreground hover:text-foreground">
            <Laptop2 size={20} />
          </button>
          <div className="flex items-center gap-2 w-28">
            <button className="text-muted-foreground hover:text-foreground">
              {volume > 0 ? <Volume2 size={20} /> : <Volume1 size={20} />}
            </button>
            <div className="w-full bg-muted/70 rounded-full h-1 group cursor-pointer">
              <div
                className="bg-foreground h-1 rounded-full group-hover:bg-primary"
                style={{ width: `${volume}%` }}
              ></div>
            </div>
          </div>
          <button className="text-muted-foreground hover:text-foreground">
            <Maximize2 size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Player;
