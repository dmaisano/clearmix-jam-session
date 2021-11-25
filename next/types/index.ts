export type PlaylistsType = Record<string, VideoType[] | null>;

export type PlaylistType = {
  name: string;

  videos: VideoType[]; // seems possible for a user to create an empty playlist by default
};

export type VideoType = {
  name: string;

  description?: string;

  url: string;

  thumbnailUrl: string;

  playlist: string; // I would treat this like a Join column

  id: string; // video id

  createdAt: string;
};
