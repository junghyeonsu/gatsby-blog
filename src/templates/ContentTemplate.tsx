import type { HeadFC } from "gatsby";
import React from "react";

interface ContentTemplateProps {
  children: React.ReactNode;
  pageContext: {
    id: string;
    slug: string;
    allMdx: GatsbyTypes.ContentsQuery["allMdx"];
  };
}

const ContentTemplate: React.FC<ContentTemplateProps> = ({ children }) => {
  return (
    <main>
      <section
        style={{
          maxWidth: "800px",
          margin: "50px auto",
          wordBreak: "keep-all",
          overflowWrap: "break-word",
          lineHeight: "1.7",
          letterSpacing: "-0.04px",
        }}
      >
        {children}
      </section>
    </main>
  );
};

export const Head: HeadFC = () => <title>Component page</title>;

export default ContentTemplate;
