import type { NextApiRequest, NextApiResponse } from "next";
import { MOCK_VIDEOS } from "../../../data/mock";
import { PlaylistsType } from "../../../types";

export default (_: NextApiRequest, res: NextApiResponse<PlaylistsType>) => {
  const playlists: PlaylistsType = {};

  for (const video of MOCK_VIDEOS) {
    const playlistName = video.playlist;

    if (playlists[playlistName]) {
      playlists[playlistName]?.push(video);
    } else {
      playlists[playlistName] = [video];
    }
  }

  res.status(200).json(playlists);
};
