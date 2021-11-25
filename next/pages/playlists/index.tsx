import { Box, Heading, ListItem, UnorderedList, Text } from "@chakra-ui/react";
import axios from "axios";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Link from "next/link";
import React from "react";
import Wrapper from "../../components/Wrapper";
import { PlaylistsType } from "../../types";
import { API_BASE_URL, PAGE_NOT_FOUND } from "../../utils";

export const getServerSideProps: GetServerSideProps<{
  playlists: PlaylistsType;
}> = async () => {
  try {
    const { data: playlists } = await axios.get(`${API_BASE_URL}/playlists`);

    if (playlists) {
      return {
        props: {
          playlists,
        },
      };
    }
  } catch (error) {}

  return PAGE_NOT_FOUND;
};

export default function PlaylistsPage({
  playlists,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <Wrapper
      h="full"
      mx="auto"
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      {playlists ? (
        <Box>
          <Heading as="h2" fontSize="3xl" mb="4">
            Playlists:
          </Heading>

          <UnorderedList ml="1.5rem">
            {Object.keys(playlists).map((playlistName) => (
              <ListItem
                key={playlistName}
                fontSize="xl"
                fontWeight="medium"
                textTransform="capitalize"
                _hover={{
                  color: `tomato`,
                }}
              >
                <Link href={`/playlists/${playlistName}`}>{playlistName}</Link>
              </ListItem>
            ))}
          </UnorderedList>
        </Box>
      ) : (
        <Text>No playlists found</Text>
      )}
    </Wrapper>
  );
}
