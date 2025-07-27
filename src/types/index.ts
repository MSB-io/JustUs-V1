export interface Song {
  id: number;
  title: string;
  artist: string;
  album: string;
  duration: string;
  artwork: string;
}

export interface Media {
  id: number;
  type: "playlist" | "album" | "artist" | "podcast";
  title: string;
  subtitle: string;
  artwork: string;
}
