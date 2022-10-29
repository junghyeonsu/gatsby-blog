import { Box, Divider, Grid, GridItem } from "@chakra-ui/react";
import { graphql } from "gatsby";
import React from "react";

import PostCard from "../components/PostCard";
import Tags from "../components/Tags";

export const query = graphql`
  query TagsPage($tag: String!) {
    allMdx(
      sort: { fields: frontmatter___createdAt, order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
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

interface TagsProps {
  pageContext: {
    tag: string;
  };
  data: GatsbyTypes.TagsPageQuery;
}

export default function TagsTemplate({ pageContext, data }: TagsProps) {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      maxWidth={800}
      margin="auto"
    >
      <Tags currentTag={pageContext.tag} />
      <Divider orientation="horizontal" marginTop="20px" />
      <Grid as="section" templateColumns="repeat(2, 1fr)" marginTop="20px" gap={6}>
        {data.allMdx.nodes.map((node) => (
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
}
