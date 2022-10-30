import { Box, Heading, Text } from "@chakra-ui/react";
import { MDXProvider } from "@mdx-js/react";
import { motion } from "framer-motion";
import React from "react";

import { commonMotion } from "../constants";

{
  /* <svg width="24" height="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m15.538 18.999-.29 1.259a2.25 2.25 0 0 1-2.02 1.735l-.173.007h-2.111a2.25 2.25 0 0 1-2.147-1.577l-.046-.167-.29-1.257h7.077ZM12 2.001a7.25 7.25 0 0 1 7.25 7.25c0 2.136-.936 4.093-2.765 5.84a.25.25 0 0 0-.071.125l-.528 2.283H8.114l-.526-2.283a.25.25 0 0 0-.071-.124C5.687 13.344 4.75 11.387 4.75 9.25A7.25 7.25 0 0 1 12 2.001Z" fill="#fff"/></svg> */
}

interface LayoutProps {
  children: React.ReactNode;
}

/* 커스텀 HTML Elements */
const customComponents = {
  h1: (props: Object) => <Heading as="h1" fontSize={36} mt="36px" {...props} />,

  h2: (props: Object) => <Heading as="h2" fontSize={32} mt="30px" {...props} />,

  h3: (props: Object) => <Heading as="h3" fontSize={28} mt="24px" {...props} />,

  h4: (props: Object) => <Heading as="h4" fontSize={24} mt="20px" {...props} />,

  p: (props: Object) => <Text fontSize={16} mt="16px" {...props} />,

  ol: (props: Object) => <Box as="ol" fontSize={16} mt="16px" listStylePos="inside" {...props} />,
  ul: (props: Object) => <Box as="ul" fontSize={16} mt="16px" listStylePos="inside" {...props} />,

  a: (props: Object) => (
    <Box
      as="a"
      _hover={{
        textDecoration: "underline",
      }}
      color="blue.500"
      {...props}
    />
  ),

  blockquote: (props: Object) => (
    <Box
      as="blockquote"
      color="blue.800"
      bg="blue.50"
      borderLeft="4px solid"
      _dark={{
        color: "blue.50",
        bg: "blue.800",
      }}
      sx={{
        p: {
          margin: 0,
        },
      }}
      padding="10px"
      borderRadius="6px"
      marginTop="20px"
      {...props}
    />
  ),
};

export default function PostLayout({ children }: LayoutProps) {
  return (
    <MDXProvider components={customComponents}>
      <main
        style={{
          maxWidth: "800px",
          margin: "50px auto",
          padding: "20px",
          wordBreak: "keep-all",
          overflowWrap: "break-word",
          lineHeight: "1.7",
          letterSpacing: "-0.04px",
        }}
      >
        <motion.article {...commonMotion}>{children}</motion.article>
      </main>
    </MDXProvider>
  );
}
