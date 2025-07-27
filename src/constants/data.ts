import { Media, Song, LibraryPlaylist } from '../types';

export const sidebarLinks = [
  { name: 'Home', icon: 'Home' },
  { name: 'Explore', icon: 'Compass' },
  { name: 'Library', icon: 'Library' },
  { name: 'Upgrade', icon: 'Youtube' },
];

export const userPlaylists = [
  'Liked Songs',
  'Synthwave Mix',
  'Focus Flow',
  'Indie Discovery',
  '90s Rock Anthems',
  'Coding Lo-fi',
];

export const quickPicks: Media[] = [
  { id: 1, type: 'album', title: 'Currents', subtitle: 'Tame Impala', artwork: 'https://images.pexels.com/photos/167092/pexels-photo-167092.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
  { id: 2, type: 'album', title: 'Discovery', subtitle: 'Daft Punk', artwork: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
  { id: 3, type: 'playlist', title: 'Lo-Fi Beats', subtitle: 'Chillhop Music', artwork: 'https://images.pexels.com/photos/3756766/pexels-photo-3756766.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
  { id: 4, type: 'album', title: 'AM', subtitle: 'Arctic Monkeys', artwork: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
];

export const recentlyPlayed: Media[] = [
  { id: 5, type: 'playlist', title: 'Indie Pop', subtitle: 'Playlist', artwork: 'https://images.pexels.com/photos/2118046/pexels-photo-2118046.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
  { id: 6, type: 'album', title: 'The Slow Rush', subtitle: 'Tame Impala', artwork: 'https://images.pexels.com/photos/1389429/pexels-photo-1389429.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
  { id: 7, type: 'artist', title: 'Glass Animals', subtitle: 'Artist', artwork: 'https://images.pexels.com/photos/2240763/pexels-photo-2240763.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
  { id: 8, type: 'playlist', title: 'Synthwave Classics', subtitle: 'Playlist', artwork: 'https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
  { id: 9, type: 'album', title: 'Rumours', subtitle: 'Fleetwood Mac', artwork: 'https://images.pexels.com/photos/3772509/pexels-photo-3772509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
  { id: 10, type: 'artist', title: 'The Weeknd', subtitle: 'Artist', artwork: 'https://images.pexels.com/photos/3775131/pexels-photo-3775131.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
];

export const newReleases: Media[] = [
  { id: 11, type: 'album', title: 'Midnights', subtitle: 'Taylor Swift', artwork: 'https://images.pexels.com/photos/1482476/pexels-photo-1482476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
  { id: 12, type: 'album', title: 'SOS', subtitle: 'SZA', artwork: 'https://images.pexels.com/photos/2531236/pexels-photo-2531236.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
  { id: 13, type: 'album', title: 'Un Verano Sin Ti', subtitle: 'Bad Bunny', artwork: 'https://images.pexels.com/photos/3359734/pexels-photo-3359734.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
  { id: 14, type: 'album', title: 'RENAISSANCE', subtitle: 'Beyoncé', artwork: 'https://images.pexels.com/photos/1699161/pexels-photo-1699161.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
  { id: 15, type: 'album', title: 'Harry\'s House', subtitle: 'Harry Styles', artwork: 'https://images.pexels.com/photos/4577410/pexels-photo-4577410.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
  { id: 16, type: 'album', title: 'Dawn FM', subtitle: 'The Weeknd', artwork: 'https://images.pexels.com/photos/3944091/pexels-photo-3944091.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
];

export const charts: Media[] = [
  { id: 17, type: 'album', title: 'Top 100 Global', subtitle: 'Chart', artwork: 'https://images.pexels.com/photos/3783471/pexels-photo-3783471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
  { id: 18, type: 'album', title: 'Viral Hits', subtitle: 'Chart', artwork: 'https://images.pexels.com/photos/7524836/pexels-photo-7524836.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
  { id: 19, type: 'album', title: 'Top US', subtitle: 'Chart', artwork: 'https://images.pexels.com/photos/164829/pexels-photo-164829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
  { id: 20, type: 'album', title: 'New & Hot', subtitle: 'Chart', artwork: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
];

export const moodsAndGenres = [
    { name: 'Chill', color: 'from-blue-500 to-cyan-400' },
    { name: 'Focus', color: 'from-purple-500 to-indigo-400' },
    { name: 'Energy', color: 'from-red-500 to-orange-400' },
    { name: 'Workout', color: 'from-yellow-500 to-lime-400' },
    { name: 'Commute', color: 'from-teal-500 to-green-400' },
    { name: 'Party', color: 'from-pink-500 to-rose-400' },
    { name: 'Sad', color: 'from-gray-500 to-slate-400' },
    { name: 'Sleep', color: 'from-indigo-700 to-slate-800' },
    { name: 'Romance', color: 'from-rose-400 to-red-500' },
    { name: 'Indie', color: 'from-orange-400 to-amber-500' },
    { name: 'Rock', color: 'from-stone-600 to-neutral-700' },
    { name: 'Pop', color: 'from-fuchsia-500 to-purple-600' },
];

export const userLibraryPlaylists: LibraryPlaylist[] = [
  { id: 1, title: 'Liked Songs', description: '238 songs', artwork: 'https://images.pexels.com/photos/1111318/pexels-photo-1111318.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
  { id: 2, title: 'Synthwave Mix', description: 'By You • 42 songs', artwork: 'https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
  { id: 3, title: 'Focus Flow', description: 'By You • 81 songs', artwork: 'https://images.pexels.com/photos/3756766/pexels-photo-3756766.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
  { id: 4, title: 'Indie Discovery', description: 'By Spotify • 120 songs', artwork: 'https://images.pexels.com/photos/2118046/pexels-photo-2118046.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
];

export const savedAlbums: Media[] = [
  { id: 1, type: 'album', title: 'Currents', subtitle: 'Tame Impala', artwork: 'https://images.pexels.com/photos/167092/pexels-photo-167092.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
  { id: 2, type: 'album', title: 'Discovery', subtitle: 'Daft Punk', artwork: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
  { id: 4, type: 'album', title: 'AM', subtitle: 'Arctic Monkeys', artwork: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
  { id: 6, type: 'album', title: 'The Slow Rush', subtitle: 'Tame Impala', artwork: 'https://images.pexels.com/photos/1389429/pexels-photo-1389429.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
  { id: 9, type: 'album', title: 'Rumours', subtitle: 'Fleetwood Mac', artwork: 'https://images.pexels.com/photos/3772509/pexels-photo-3772509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
  { id: 12, type: 'album', title: 'SOS', subtitle: 'SZA', artwork: 'https://images.pexels.com/photos/2531236/pexels-photo-2531236.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
];

export const followedArtists: Media[] = [
  { id: 7, type: 'artist', title: 'Glass Animals', subtitle: 'Artist', artwork: 'https://images.pexels.com/photos/2240763/pexels-photo-2240763.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
  { id: 10, type: 'artist', title: 'The Weeknd', subtitle: 'Artist', artwork: 'https://images.pexels.com/photos/3775131/pexels-photo-3775131.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
  { id: 21, type: 'artist', title: 'Tame Impala', subtitle: 'Artist', artwork: 'https://images.pexels.com/photos/1370545/pexels-photo-1370545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
  { id: 22, type: 'artist', title: 'Daft Punk', subtitle: 'Artist', artwork: 'https://images.pexels.com/photos/2479313/pexels-photo-2479313.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
];

export const currentSong: Song = {
  id: 1,
  title: 'Blinding Lights',
  artist: 'The Weeknd',
  album: 'After Hours',
  duration: '3:20',
  artwork: 'https://images.pexels.com/photos/3775131/pexels-photo-3775131.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
};
