import { Box, Grid, GridItem } from "@chakra-ui/react";
import type { HeadFC } from "gatsby";
import { graphql } from "gatsby";
import * as React from "react";

import PostCard from "../components/PostCard";

export const query = graphql`
  query IndexPage {
    allPosts: allMdx(sort: { fields: frontmatter___createdAt, order: DESC }) {
      nodes {
        frontmatter {
          thumbnail {
            childImageSharp {
              gatsbyImageData
            }
          }
          title
          updatedAt
          createdAt
          description
          slug
          tags
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
  data: GatsbyTypes.IndexPageQuery;
}

const IndexPage = ({ data }: IndexPageProps) => {
  console.log("data", data);

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      maxWidth={800}
      margin="auto"
    >
      <Grid as="section" templateColumns="repeat(2, 1fr)" gap={6}>
        {data.allPosts.nodes.map((node) => (
          <GridItem as="article">
            <PostCard
              key={node.frontmatter?.slug}
              title={node.frontmatter?.title!}
              description={node.frontmatter?.description!}
              slug={node.frontmatter?.slug!}
              thumbnail={
                node.frontmatter?.thumbnail?.childImageSharp?.gatsbyImageData!
              }
              createdAt={node.frontmatter?.createdAt!}
              updatedAt={node.frontmatter?.updatedAt!}
              tags={node.frontmatter?.tags!}
            />
          </GridItem>
        ))}
      </Grid>
    </Box>
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
