import { Box, Divider, Grid, GridItem } from "@chakra-ui/react";
import type { HeadFC } from "gatsby";
import { graphql } from "gatsby";
import React from "react";

import PostCard from "../components/PostCard";
import Tags from "../components/Tags";

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
    ogimage: imageSharp(fluid: { originalName: { eq: "og-image.png" } }) {
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
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      maxWidth={800}
      margin="auto"
    >
      <Tags currentTag="all" />
      <Divider orientation="horizontal" marginTop="20px" />
      <Grid as="section" templateColumns="repeat(2, 1fr)" marginTop="20px" gap={6}>
        {data.allPosts.nodes.map((node) => (
          <GridItem key={node.frontmatter?.slug} as="article">
            <PostCard
              title={node.frontmatter?.title!}
              description={node.frontmatter?.description!}
              slug={node.frontmatter?.slug!}
              thumbnail={node.frontmatter?.thumbnail?.childImageSharp?.gatsbyImageData!}
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
