import { Box, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { PlaylistType } from "../types";
import { truncateStr } from "../utils";
import Player from "./Player";

interface PlaylistProps {
  videoIndex: number;
  playlist: PlaylistType;
}

const Playlist: React.FC<PlaylistProps> = ({ videoIndex, playlist }) => {
  const currentVideo = playlist.videos[videoIndex];

  return (
    <Box
      h="full"
      display={[`block`, `block`, `flex`]}
      justifyContent="center"
      alignItems="center"
    >
      <Box
        display={[`block`, `block`, `grid`]}
        gridTemplateColumns={[`1fr`, `1fr`, `1fr`, `1fr`, `1fr 1fr`]}
        gridColumnGap={[0, 0, 0, 0, 10]}
      >
        <Box mb={[0, 8, 8, 8, 0]}>
          <Player {...currentVideo} />
        </Box>

        <Box
          height={[`full`, `full`, `420px`]}
          overflowY="auto"
          sx={{
            ":hover, :active, :focus": {
              overflowY: `auto`,
            },
          }}
        >
          {playlist.videos.map((video, index) => (
            <Box
              key={video.id}
              py="2"
              pr={[0, 0, 0, 0, 4]}
              sx={{
                ":first-child": {
                  pt: "0",
                },
                ":not(:last-child)": {
                  mb: "6",
                },
              }}
            >
              <Box role="group">
                <Heading
                  as="h3"
                  fontSize="xl"
                  fontWeight="semibold"
                  color={index === videoIndex ? `#EB5757` : `inherit`}
                  mb="2"
                  _groupHover={{
                    color: `#f39a9a`,
                  }}
                >
                  <Link
                    href={{
                      pathname: `/playlists/${playlist.name}`,
                      query: { index: `${index + 1}` },
                    }}
                  >
                    {video.name}
                  </Link>
                </Heading>
                <Text
                  as="p"
                  color={index === videoIndex ? `#8E95AA` : `inherit`}
                  _groupHover={{
                    color: `#c7cad5`,
                  }}
                >
                  {truncateStr(video.description)}
                </Text>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Playlist;
