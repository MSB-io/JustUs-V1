import React from "react";
import MediaCard from "../components/MediaCard";
import { quickPicks, recentlyPlayed, newReleases } from "../constants/data";
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

const HomePage = () => {
  return (
    <div className="p-3">
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Quick picks</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {quickPicks.map((item) => (
            <div
              key={item.id}
              className="bg-card hover:bg-muted/50 transition-colors duration-300 rounded-md flex items-center gap-4 cursor-pointer group"
            >
              <img
                src={item.artwork}
                alt={item.title}
                className="w-20 h-20 object-cover rounded-l-md"
              />
              <span className="font-semibold text-foreground">
                {item.title}
              </span>
            </div>
          ))}
        </div>
      </section>

      <MediaSection title="Recently played" data={recentlyPlayed} />
      <MediaSection title="New releases for you" data={newReleases} />
    </div>
  );
};

export default HomePage;
