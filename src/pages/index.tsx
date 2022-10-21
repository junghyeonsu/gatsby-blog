import type { HeadFC } from "gatsby";
import { graphql } from "gatsby";
import * as React from "react";

export const query = graphql`
  query Contents {
    allMdx {
      nodes {
        frontmatter {
          slug
        }
      }
    }
    ogimage: imageSharp(fluid: { originalName: { eq: "ogimage.png" } }) {
      original {
        height
        src
        width
      }
    }
  }
`;

interface IndexPageProps {
  data: GatsbyTypes.ContentsQuery;
}

const IndexPage = ({}: IndexPageProps) => {
  return (
    <div>
      <h1>Hyeonsu blog</h1>
    </div>
  );
};

export default IndexPage;

export const Head: HeadFC = () => {
  return (
    <>
      <title>Home Page</title>
    </>
  );
};
