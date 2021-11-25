import { Box } from "@chakra-ui/react";
import React, { ComponentProps } from "react";

/**
 * Full size page container / wrapper
 */
const Wrapper: React.FC<ComponentProps<typeof Box>> = ({
  children,
  ...props
}) => {
  return (
    <Box id="wrapper" h="full" w={[`90%`, `90%`, `80%`]} mx="auto" {...props}>
      {children}
    </Box>
  );
};

export default Wrapper;
