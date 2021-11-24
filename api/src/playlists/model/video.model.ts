export class Video {
  name: string;

  description?: string;

  url: string;

  thumbnailUrl: string;

  playlist: string; // I would treat this like a Join column

  id: string; // video id

  createdAt: string;
}
