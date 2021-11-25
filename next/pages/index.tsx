import { Text } from "@chakra-ui/react";
import React from "react";
import Wrapper from "../components/Wrapper";

export async function getServerSideProps() {
  // ? I could have opted to specify a redirect in the next.config
  // ? For prod, would it be better to specify a redirect?
  return {
    redirect: {
      destination: "/playlists",
      permanent: false,
    },
  };
}

export default function Home() {
  return (
    <Wrapper>
      <Text>Index Page</Text>
    </Wrapper>
  );
}
