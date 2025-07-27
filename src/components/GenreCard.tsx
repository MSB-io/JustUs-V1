import React from "react";
import { cn } from "../lib/utils";

interface GenreCardProps {
  name: string;
  color: string;
}

const GenreCard: React.FC<GenreCardProps> = ({ name, color }) => {
  return (
    <div
      className={cn(
        "h-48 rounded-lg p-4 flex items-end justify-start relative overflow-hidden cursor-pointer group bg-gradient-to-br",
        color
      )}
    >
      <h3 className="text-2xl font-bold text-white drop-shadow-lg transition-transform duration-300 group-hover:scale-105">
        {name}
      </h3>
    </div>
  );
};

export default GenreCard;
