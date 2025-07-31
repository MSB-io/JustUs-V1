import React from "react";
import MediaCard from "../components/MediaCard";
import { quickPicks, newReleases, recentlyPlayed } from "../constants/data";
import { Media } from "../types";

const MediaSection: React.FC<{ title: string; data: Media[] }> = ({
  title,
  data,
}) => (
  <section className="mb-12">
    <h2 className="text-2xl font-bold mb-6">{title}</h2>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
      {data.map((item) => (
        <MediaCard key={item.id} media={item} />
      ))}
    </div>
  </section>
);

const LibraryPage = () => {
  return (
    <div className="p-6 bg-black border border-border rounded-xl h-full flex flex-col overflow-y-auto">
      <h1 className="text-4xl font-bold mb-8">Your Library</h1>
      <MediaSection title="Your Playlists" data={quickPicks} />
      <MediaSection title="Saved Albums" data={newReleases} />
      <MediaSection title="Followed Artists" data={recentlyPlayed} />
    </div>
  );
};

export default LibraryPage;
