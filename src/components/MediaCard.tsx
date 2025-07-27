import React from 'react';
import { Play } from 'lucide-react';
import { Media } from '../types';

interface MediaCardProps {
  media: Media;
}

const MediaCard: React.FC<MediaCardProps> = ({ media }) => {
  const isArtist = media.type === 'artist';
  return (
    <div className="bg-card p-4 rounded-lg hover:bg-muted/50 transition-colors duration-300 group cursor-pointer">
      <div className="relative mb-4">
        <img
          src={media.artwork}
          alt={media.title}
          className={`w-full h-40 object-cover rounded-md ${isArtist ? 'rounded-full' : ''}`}
        />
        <button className="absolute bottom-2 right-2 bg-primary p-3 rounded-full text-primary-foreground opacity-0 group-hover:opacity-100 group-hover:bottom-3 transition-all duration-300 shadow-lg">
          <Play className="h-6 w-6 fill-current" />
        </button>
      </div>
      <h3 className="font-bold text-foreground truncate">{media.title}</h3>
      <p className="text-sm text-muted-foreground truncate">{media.subtitle}</p>
    </div>
  );
};

export default MediaCard;
