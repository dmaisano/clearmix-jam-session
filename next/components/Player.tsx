import { Box, Image, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { extractVideoID } from "../utils";
import ButtonSvg from "./Button.svg";

interface PlayerProps {
  url: string;
  thumbnailUrl: string;
}

const Player: React.FC<PlayerProps> = ({ url, thumbnailUrl }) => {
  const router = useRouter();
  const [showVideo, setVisible] = useState(false);
  const videoId = extractVideoID(url);

  useEffect(() => {
    setVisible(false);
  }, [router]);

  return typeof videoId === `string` ? (
    <Box
      id="video-player"
      zIndex="1"
      overflow="hidden"
      width={[`320px`, `400px`, `660px`]}
      height={[`210px`, `267px`, `420px`]}
      borderRadius="22px"
      my={[8, 8, 0]}
      mx="auto"
    >
      {!showVideo ? (
        <Box
          id="video-preview"
          position="relative"
          _hover={{
            cursor: `pointer`,
          }}
          onClick={() => {
            setVisible(true);
          }}
        >
          <Image src={thumbnailUrl} alt="Video placeholder" />
          <Box
            zIndex="2"
            position="absolute"
            top="50%"
            left="50%"
            transform={[`translate(-50%, -35%)`]}
          >
            <ButtonSvg />
          </Box>
        </Box>
      ) : (
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=${
            showVideo ? `1` : `0`
          }`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      )}
    </Box>
  ) : (
    <Box>
      <Text>Invalid video</Text>
    </Box>
  );
};

export default Player;
