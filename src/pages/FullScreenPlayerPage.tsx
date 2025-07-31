import React from "react";
import {
  ChevronDown,
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Mic2,
  ListMusic,
  Laptop2,
  Volume1,
  Volume2,
  MoreHorizontal,
  Shuffle,
  Repeat,
} from "lucide-react";
import { currentSong, recentlyPlayed, newReleases } from "../constants/data";
import MediaCard from "../components/MediaCard";
import { Media } from "../types";

interface FullScreenPlayerPageProps {
  onClose: () => void;
}

const MediaSection: React.FC<{ title: string; data: Media[] }> = ({
  title,
  data,
}) => (
  <section className="mb-12">
    <h2 className="text-2xl font-bold mb-6 text-text">{title}</h2>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
      {data.map((item) => (
        <MediaCard key={item.id} media={item} />
      ))}
    </div>
  </section>
);

const FullScreenPlayerPage: React.FC<FullScreenPlayerPageProps> = ({
  onClose,
}) => {
  const [isPlaying, setIsPlaying] = React.useState(true);
  const [volume] = React.useState(75);
  const [progress] = React.useState(40); // Example progress

  return (
    <div className="bg-black border border-border rounded-xl h-full flex flex-col p-6 overflow-y-auto text-text">
      {/* Header */}
      <header className="flex-shrink-0 flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <img
            src={currentSong.artwork}
            alt="Album Art"
            className="w-12 h-12 rounded-md"
          />
          <div>
            <p className="font-bold text-lg">{currentSong.album}</p>
            <p className="text-sm text-textSecondary">{currentSong.artist}</p>
          </div>
        </div>
        <button
          onClick={onClose}
          className="p-2 rounded-full bg-surface hover:bg-muted/50 transition-colors"
        >
          <ChevronDown size={24} />
        </button>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col lg:flex-row items-center justify-center gap-12 mb-8">
        <div className="flex-shrink-0">
          <img
            src={currentSong.artwork}
            alt={currentSong.title}
            className="w-64 h-64 lg:w-96 lg:h-96 rounded-2xl shadow-2xl shadow-primary/20"
          />
        </div>

        <div className="flex flex-col items-center lg:items-start text-center lg:text-left w-full max-w-md">
          <h1 className="text-4xl lg:text-6xl font-bold mb-2">
            {currentSong.title}
          </h1>
          <p className="text-xl lg:text-2xl text-textSecondary mb-8">
            {currentSong.artist}
          </p>

          {/* Progress Bar */}
          <div className="w-full mb-4">
            <div className="w-full bg-white/10 rounded-full h-1.5 group cursor-pointer">
              <div
                className="bg-primary h-1.5 rounded-full"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <div className="flex justify-between text-xs text-textSecondary mt-1.5">
              <span>1:28</span>
              <span>{currentSong.duration}</span>
            </div>
          </div>

          {/* Playback Controls */}
          <div className="flex items-center justify-center gap-6 w-full mb-8">
            <button className="text-textSecondary hover:text-text transition-colors">
              <Shuffle size={20} />
            </button>
            <button className="text-textSecondary hover:text-text transition-colors">
              <SkipBack size={28} className="fill-current" />
            </button>
            <button
              className="bg-primary text-primary-foreground p-4 rounded-full hover:scale-105 transition-transform shadow-lg shadow-primary/40"
              onClick={() => setIsPlaying(!isPlaying)}
            >
              {isPlaying ? (
                <Pause size={32} className="fill-current" />
              ) : (
                <Play size={32} className="fill-current" />
              )}
            </button>
            <button className="text-textSecondary hover:text-text transition-colors">
              <SkipForward size={28} className="fill-current" />
            </button>
            <button className="text-textSecondary hover:text-text transition-colors">
              <Repeat size={20} />
            </button>
          </div>

          {/* Other Controls */}
          <div className="flex items-center justify-between w-full text-textSecondary">
            <button className="hover:text-text transition-colors">
              <Mic2 size={20} />
            </button>
            <button className="hover:text-text transition-colors">
              <ListMusic size={20} />
            </button>
            <div className="flex items-center gap-2 w-28">
              <button className="hover:text-text transition-colors">
                {volume > 0 ? <Volume2 size={20} /> : <Volume1 size={20} />}
              </button>
              <div className="w-full bg-white/10 rounded-full h-1 group cursor-pointer">
                <div
                  className="bg-primary h-1 rounded-full"
                  style={{ width: `${volume}%` }}
                ></div>
              </div>
            </div>
            <button className="hover:text-text transition-colors">
              <Laptop2 size={20} />
            </button>
            <button className="hover:text-text transition-colors">
              <MoreHorizontal size={20} />
            </button>
          </div>
        </div>
      </main>

      {/* Related Content */}
      <footer className="flex-shrink-0">
        <MediaSection title="Up next" data={recentlyPlayed} />
        <MediaSection title="More like this" data={newReleases} />
      </footer>
    </div>
  );
};

export default FullScreenPlayerPage;
