import { Badge, Box, Flex, Heading } from "@chakra-ui/react";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";

interface PostContentTitleProps {
  post: GatsbyTypes.PostPageQuery["post"];
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
      <Flex columnGap="10px" rowGap="10px" alignItems="end" flexWrap="wrap">
        <Badge fontSize="14px">{post?.frontmatter?.createdAt}</Badge>
        {post?.frontmatter?.tags?.map((tag) => (
          <Link key={tag} to={`/tags/${tag}`}>
            <Badge fontSize="14px">{tag}</Badge>
          </Link>
        ))}
        {/* <Badge fontSize="14px">{`${readingTime} minutes`}</Badge> */}
        <Badge fontSize="14px">{`10 minutes`}</Badge>
      </Flex>

      <Box display="flex" width="100%" justifyContent="center" alignItems="center">
        <GatsbyImage
          image={post?.frontmatter?.thumbnail?.childImageSharp?.gatsbyImageData!}
          alt={post?.frontmatter?.title!}
        />
      </Box>
    </Box>
  );
};

export default PostContentTitle;
