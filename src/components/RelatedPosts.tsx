import { Box, Grid, GridItem, Heading } from "@chakra-ui/react";
import React from "react";

import PostCard from "./PostCard";

interface RelatedPostsProps {
  relatedPosts: GatsbyTypes.PostPageQuery["relatedPosts"];
}

const RelatedPosts = ({ relatedPosts }: RelatedPostsProps) => {
  return (
    <Box marginTop="100px">
      <Heading as="h2" fontSize={36}>
        관련 포스트
      </Heading>
      <Grid mt="20px" templateColumns="repeat(2, 1fr)" gap={6}>
        {relatedPosts.nodes.map((post) => (
          <GridItem as="article" key={post?.frontmatter?.slug}>
            <PostCard
              title={post.frontmatter?.title!}
              description={post.frontmatter?.description!}
              slug={post.frontmatter?.slug!}
              thumbnail={post.frontmatter?.thumbnail?.childImageSharp?.gatsbyImageData!}
              createdAt={post.frontmatter?.createdAt!}
              updatedAt={post.frontmatter?.updatedAt!}
              tags={post.frontmatter?.tags!}
            />
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};

export default RelatedPosts;
