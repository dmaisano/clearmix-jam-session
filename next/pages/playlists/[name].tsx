import { Box, Text } from "@chakra-ui/react";
import axios from "axios";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Playlist from "../../components/Playlist";
import Wrapper from "../../components/Wrapper";
import { PlaylistType } from "../../types";
import { API_BASE_URL, PAGE_NOT_FOUND } from "../../utils";

// * If I encounter an error or there is no playlist available, I'm defaulting to the Next 404 page

// ? reference: https://nextjs.org/docs/basic-features/data-fetching#typescript-use-getserversideprops
export const getServerSideProps: GetServerSideProps<{
  playlist: PlaylistType;
}> = async (ctx) => {
  const name = ctx.query.name;

  if (typeof name !== `string`) {
    return PAGE_NOT_FOUND;
  }

  try {
    const { data: playlist } = await axios.get(
      `${API_BASE_URL}/playlists/${name}`,
    );

    if (playlist) {
      return {
        props: {
          playlist,
        },
      };
    }
  } catch (error) {}

  return PAGE_NOT_FOUND;
};

export default function PlaylistPage({
  playlist,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  if (!playlist || !playlist.videos || playlist.videos.length < 1) {
    return (
      <Wrapper>
        <Box
          h="full"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Text fontSize="xl" fontWeight="semibold">
            Playlist not found {playlist && `"${playlist.name}"`}
          </Text>
        </Box>
      </Wrapper>
    );
  }

  const [videoIndex, setIndex] = useState<number>(0);
  const router = useRouter();

  useEffect(() => {
    if (playlist && playlist.videos) {
      const index = router.query.index as string;
      if (index) {
        const intIndex = +index;
        let indexOffset = intIndex - 1;

        // if we've made it this far, there is at least one more videos in the playlist
        if (!playlist.videos[indexOffset]) {
          // indexed video does not exist, default to the first video in the playlist
          indexOffset = 0;
        }

        // ensure offset is positive
        setIndex(Math.abs(indexOffset));
      }
    }
  }, [router]);

  return (
    <Wrapper>
      <Playlist videoIndex={videoIndex} playlist={playlist} />
    </Wrapper>
  );
}
