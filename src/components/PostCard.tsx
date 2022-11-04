import { Badge, Box, Flex, Heading, Text, useColorMode } from "@chakra-ui/react";
import { Link } from "gatsby";
import type { IGatsbyImageData } from "gatsby-plugin-image";
import { GatsbyImage } from "gatsby-plugin-image";
import React, { useMemo } from "react";

interface PostCardProps {
  title: string;
  description: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  tags: readonly (string | null)[];
  thumbnail: IGatsbyImageData;
}

const PostCard = ({
  createdAt,
  description,
  slug,
  tags,
  thumbnail,
  title,
  updatedAt,
}: PostCardProps) => {
  const { colorMode } = useColorMode();
  // const mediaQuery = useMediaQuery();

  console.log("updatedAt", updatedAt);

  const isDarkMode = useMemo(() => colorMode === "dark", [colorMode]);
  const diffMs = useMemo(() => new Date().getTime() - new Date(createdAt).getTime(), [createdAt]);
  const isNewPost = useMemo(() => Math.floor(diffMs / (1000 * 60 * 60 * 24)) <= 10, [diffMs]);

  return (
    <Link to={`/posts/${slug}`}>
      <Box
        as="article"
        boxShadow="rgb(0 0 0 / 4%) 0px 4px 16px 0px"
        transition="box-shadow 0.25s ease"
        _hover={{ boxShadow: "md", cursor: "pointer" }}
        borderRadius={2}
      >
        <Box display="block" as="span" width="100%" borderRadius={2}>
          <GatsbyImage style={{ height: "240px" }} image={thumbnail} alt={`${slug} cover image`} />
        </Box>
        <Flex direction="column" justifyContent="space-between" minH={130} padding={2}>
          <Flex direction="column">
            <Heading marginTop={2} fontSize={24} noOfLines={1}>
              {title}
            </Heading>

            <Text fontSize={16} color={isDarkMode ? "whiteAlpha.600" : "gray.600"} noOfLines={2}>
              {description}
            </Text>
          </Flex>

          <Box display="flex" columnGap="10px">
            <Badge fontSize={14}>{createdAt}</Badge>
            {tags?.map((tag) => (
              <Badge key={tag} fontSize={14}>
                {tag}
              </Badge>
            ))}
            {isNewPost && (
              <Badge fontSize={14} colorScheme="green">
                new
              </Badge>
            )}
          </Box>
        </Flex>
      </Box>
    </Link>
  );
};

export default PostCard;
