import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import type { AppProps } from "next/app";

// ? reference: https://chakra-ui.com/docs/theming/customize-theme#customizing-global-styles
const theme = extendTheme({
  styles: {
    global: (props: any) => ({
      // ? I opted to use an "ios-like" scroll-bar
      // ? reference: https://developer.apple.com/forums/thread/670065
      "::-webkit-scrollbar-track": {
        borderRadius: `0.125rem`,
        backgroundColor: `lightgray`,
      },

      "::-webkit-scrollbar": {
        width: `0.25rem`,
        borderRadius: `0.125rem`,
      },
      "::-webkit-scrollbar-thumb": {
        borderRadius: ` 0.125rem`,
        backgroundColor: `gray`,
      },
      "html, body, #__next": {
        height: `100%`,
        width: `100%`,
      },
      body: {
        fontFamily: "body",
        color: mode("gray.800", "whiteAlpha.900")(props),
        bg: mode("#fefefe", "gray.800")(props),
        lineHeight: "base",
      },
    }),
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
