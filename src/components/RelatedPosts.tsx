import { Grid, GridItem, Heading } from "@chakra-ui/react";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";

interface RelatedPostsProps {
  relatedPosts: GatsbyTypes.ContentTemplateQuery["relatedPosts"];
}

const RelatedPosts = ({ relatedPosts }: RelatedPostsProps) => {
  return (
    <div>
      <Heading as="h2" fontSize={36}>
        Related Posts
      </Heading>
      <Grid templateColumns="repeat(2, 1fr)" gap={6}>
        {relatedPosts.nodes.map((post) => (
          <GridItem w="100%" bg="blue.500" key={post?.frontmatter?.slug}>
            <h1>{post?.frontmatter?.title}</h1>
            <h1>{post?.frontmatter?.slug}</h1>
            <GatsbyImage
              image={
                post?.frontmatter?.thumbnail?.childImageSharp?.gatsbyImageData!
              }
              alt={post?.frontmatter?.title!}
            />
          </GridItem>
        ))}
      </Grid>
    </div>
  );
};

export default RelatedPosts;