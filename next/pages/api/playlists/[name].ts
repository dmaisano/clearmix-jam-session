import type { NextApiRequest, NextApiResponse } from "next";
import { MOCK_VIDEOS } from "../../../data/mock";
import { PlaylistType } from "../../../types";

export default (req: NextApiRequest, res: NextApiResponse<PlaylistType>) => {
  const name = req.query.name as string;
  const playlist: PlaylistType = {
    name,
    videos: [],
  };

  for (const video of MOCK_VIDEOS) {
    if (video.playlist === name) {
      playlist.videos.push(video);
    }
  }

  res.status(200).json(playlist);
};
