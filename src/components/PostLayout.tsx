import { Heading } from "@chakra-ui/react";
import { MDXProvider } from "@mdx-js/react";
import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

/* 커스텀 HTML Elements */
const customComponents = {
  h1: (props: Object) => <Heading as="h1" fontSize={36} {...props} />,

  h2: (props: Object) => <Heading as="h2" fontSize={32} {...props} />,

  h3: (props: Object) => <Heading as="h3" fontSize={28} {...props} />,

  h4: (props: Object) => <Heading as="h4" fontSize={24} {...props} />,

  blockquote: (props: Object) => (
    <blockquote
      style={{
        borderLeft: "5px solid #b43e3e",
      }}
      {...props}
    />
  ),
};

export default function PostLayout({ children }: LayoutProps) {
  return <MDXProvider components={customComponents}>{children}</MDXProvider>;
}
