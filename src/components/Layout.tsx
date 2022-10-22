import { Heading } from "@chakra-ui/react";
import { MDXProvider } from "@mdx-js/react";
import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const customComponents = {
  /* 커스텀 HTML Elements */
  h1: (props: Object) => <Heading as="h1" {...props} />,

  h2: (props: Object) => <Heading as="h2" {...props} />,

  h3: (props: Object) => <Heading as="h3" {...props} />,

  h4: (props: Object) => <Heading as="h4" {...props} />,
};

export default function Layout({ children }: LayoutProps) {
  return <MDXProvider components={customComponents}>{children}</MDXProvider>;
}
