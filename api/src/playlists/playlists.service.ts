import { Injectable } from '@nestjs/common';
import { MOCK_VIDEOS } from './data/mock';
import { Playlist, Playlists } from './model/playlist.model';

@Injectable()
export class PlaylistsService {
  async findAll(): Promise<Playlists> {
    const playlists: Playlists = {};

    for (const video of MOCK_VIDEOS) {
      const playlistName = video.playlist;

      if (!playlists[playlistName]) {
        playlists[playlistName] = [video];
      } else {
        playlists[playlistName].push(video);
      }
    }

    return playlists;
  }

  async findOne(name: string): Promise<Playlist> {
    const playlist: Playlist = {
      name,
      videos: [],
    };

    for (const video of MOCK_VIDEOS) {
      if (video.playlist === name) {
        playlist.videos.push(video);
      }
    }

    return playlist;
  }
}
