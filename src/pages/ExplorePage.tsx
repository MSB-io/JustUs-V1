import React from "react";
import MediaCard from "../components/MediaCard";
import GenreCard from "../components/GenreCard";
import { newReleases, charts, moodsAndGenres } from "../constants/data";
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

const ExplorePage = () => {
  return (
    <div className="p-3">
      <h1 className="text-4xl font-bold mb-8">Explore</h1>

      <MediaSection title="New releases" data={newReleases} />
      <MediaSection title="Charts" data={charts} />

      <section>
        <h2 className="text-2xl font-bold mb-6">Moods & genres</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {moodsAndGenres.map((genre) => (
            <GenreCard key={genre.name} name={genre.name} color={genre.color} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ExplorePage;
