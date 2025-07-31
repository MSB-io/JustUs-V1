import React, { useState } from "react";
import { Play } from "lucide-react";
import { currentSong, recentlyPlayed, newReleases } from "../constants/data";
import MediaCard from "../components/MediaCard";
import { Media } from "../types";

interface FullScreenPlayerPageProps {
  onClose: () => void;
}

const TabButton: React.FC<{
  label: string;
  activeTab: string;
  onClick: () => void;
  disabled?: boolean;
}> = ({ label, activeTab, onClick, disabled }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={`px-4 py-2 text-sm font-semibold transition-colors duration-300 ${
      activeTab === label
        ? "text-text border-b-2 border-primary"
        : "text-textSecondary hover:text-text"
    } ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
  >
    {label.charAt(0).toUpperCase() + label.slice(1)}
  </button>
);

const UpNextSong: React.FC<{ song: Media; isPlaying?: boolean }> = ({
  song,
  isPlaying,
}) => (
  <div
    className={`flex items-center gap-4 p-2 rounded-lg transition-colors ${
      isPlaying ? "bg-white/10" : "hover:bg-white/5"
    }`}
  >
    <div className="relative">
      <img
        src={song.artwork}
        alt={song.title}
        className="w-12 h-12 rounded-md"
      />
      {isPlaying && (
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <Play size={24} className="text-white fill-current" />
        </div>
      )}
    </div>
    <div className="flex-1">
      <p className={`font-semibold ${isPlaying ? "text-primary" : "text-text"}`}>
        {song.title}
      </p>
      <p className="text-sm text-textSecondary">{song.subtitle}</p>
    </div>
    <p className="text-sm text-textSecondary">3:28</p>
  </div>
);

const FullScreenPlayerPage: React.FC<FullScreenPlayerPageProps> = () => {
  const [progress] = useState(40);
  const [activeTab, setActiveTab] = useState("up next");

  const renderTabContent = () => {
    switch (activeTab) {
      case "up next":
        return (
          <div className="space-y-2">
            {recentlyPlayed.map((song, index) => (
              <UpNextSong key={song.id} song={song} isPlaying={index === 0} />
            ))}
          </div>
        );
      case "lyrics":
        return (
          <div className="flex items-center justify-center h-full">
            <p className="text-textSecondary">
              Lyrics are not available for this song.
            </p>
          </div>
        );
      case "related":
        return (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {newReleases.map((item) => (
              <MediaCard key={item.id} media={item} />
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-black border border-border rounded-xl h-full flex flex-col text-text overflow-hidden">
      <header className="flex-shrink-0 flex items-center justify-end p-4">
      </header>

      <main className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-8 px-6 pb-6 overflow-y-auto">
        {/* Left Column: Player Info */}
        <div className="flex flex-col items-center justify-center gap-6">
          <img
            src={currentSong.artwork}
            alt={currentSong.title}
            className="w-full max-w-md aspect-square rounded-2xl shadow-2xl shadow-primary/20"
          />
          <div className="w-full max-w-md text-left">
            <h1 className="text-4xl font-bold">{currentSong.title}</h1>
            <p className="text-xl text-textSecondary mt-2">
              {currentSong.artist}
            </p>
            <div className="w-full mt-6">
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
          </div>
        </div>

        {/* Right Column: Tabs */}
        <div className="bg-surface border border-border rounded-xl flex flex-col overflow-hidden">
          <div className="flex-shrink-0 flex border-b border-border px-4">
            <TabButton
              label="up next"
              activeTab={activeTab}
              onClick={() => setActiveTab("up next")}
            />
            <TabButton
              label="lyrics"
              activeTab={activeTab}
              onClick={() => setActiveTab("lyrics")}
              disabled
            />
            <TabButton
              label="related"
              activeTab={activeTab}
              onClick={() => setActiveTab("related")}
            />
          </div>
          <div className="flex-1 p-4 overflow-y-auto">
            {renderTabContent()}
          </div>
        </div>
      </main>
    </div>
  );
};

export default FullScreenPlayerPage;
