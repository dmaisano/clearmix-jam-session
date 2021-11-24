import { Controller, Get, Param } from '@nestjs/common';
import { Playlist, Playlists } from './model/playlist.model';
import { PlaylistsService } from './playlists.service';

@Controller('playlists')
export class PlaylistsController {
  constructor(private readonly playlistsService: PlaylistsService) {}

  @Get()
  async findAll(): Promise<Playlists> {
    return this.playlistsService.findAll();
  }

  @Get(':name')
  async findOne(@Param('name') name: string): Promise<Playlist> {
    return this.playlistsService.findOne(name);
  }
}
