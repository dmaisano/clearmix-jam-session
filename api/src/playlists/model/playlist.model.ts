import { Video } from './video.model';

export type Playlists = Record<string, Video[] | null>;

export class Playlist {
  name: string;

  videos?: Video[]; // seems possible for a user to create an empty playlist by default
}
