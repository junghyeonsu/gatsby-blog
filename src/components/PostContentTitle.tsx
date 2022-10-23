import { Badge, Box, Heading } from "@chakra-ui/react";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";

interface PostContentTitleProps {
  post: GatsbyTypes.PostTemplateQuery["post"];
}

const PostContentTitle = ({ post }: PostContentTitleProps) => {
  return (
    <Box
      as="article"
      width="100%"
      position="relative"
      display="flex"
      flexDirection="column"
      alignItems="baseline"
      marginBottom={100}
    >
      <Heading as="h1" fontSize={36} marginBottom="3" fontWeight={900}>
        {post?.frontmatter?.title}
      </Heading>
      <Box display="flex" columnGap="10px" rowGap="10px" flexWrap="wrap">
        <Badge fontSize="14px">{post?.frontmatter?.createdAt}</Badge>
        {post?.frontmatter?.tags?.map((tag) => (
          <Badge key={tag} fontSize="14px">
            {tag}
          </Badge>
        ))}
        {/* <Badge fontSize="14px">{`${readingTime} minutes`}</Badge> */}
        <Badge fontSize="14px">{`10 minutes`}</Badge>
      </Box>
      <Box
        display="flex"
        width="100%"
        justifyContent="center"
        alignItems="center"
      >
        <GatsbyImage
          image={
            post?.frontmatter?.thumbnail?.childImageSharp?.gatsbyImageData!
          }
          alt={post?.frontmatter?.title!}
        />
      </Box>
    </Box>
  );
};

export default PostContentTitle;
