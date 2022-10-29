import { extendTheme } from "@chakra-ui/react";

const theme = {
  styles: {
    global: {
      html: {
        scrollPaddingTop: "75px",
      },

      ".heading-anchor-icon": {
        marginLeft: "10px",
        opacity: 0,
        color: "green.600",
        transition: "all 0.2s ease-in-out",
      },

      "h1:hover .heading-anchor-icon, h2:hover .heading-anchor-icon, h3:hover .heading-anchor-icon":
        {
          opacity: 1,
        },
    },
  },
  colors: {
    gray: {
      800: "#202125",
    },
  },
};

export default extendTheme(theme);
