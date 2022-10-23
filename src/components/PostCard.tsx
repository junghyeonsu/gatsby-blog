import {
  Badge,
  Box,
  Heading,
  Text,
  Tooltip,
  useColorMode,
} from "@chakra-ui/react";
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
  const diffMs = useMemo(
    () => new Date().getTime() - new Date(createdAt).getTime(),
    [createdAt],
  );
  const isNewPost = useMemo(
    () => Math.floor(diffMs / (1000 * 60 * 60 * 24)) <= 10,
    [diffMs],
  );

  return (
    <Link to={slug}>
      <Box
        as="article"
        boxShadow="sm"
        transition="box-shadow 0.25s ease"
        _hover={{ boxShadow: "md", cursor: "pointer" }}
        borderRadius={2}
      >
        <Box
          css={
            {
              // "&:hover": {
              //   img: {
              //     transform: "scale(1.02)",
              //   },
              // },
            }
          }
          display="block"
          as="span"
          width="100%"
          borderRadius={2}
        >
          <GatsbyImage image={thumbnail} alt={`${slug} cover image`} />
        </Box>
        <Box minH={120} padding={2}>
          <Box display="flex" columnGap="10px">
            <Badge fontSize={14}>{createdAt}</Badge>
            {tags?.map((tag) => (
              <Badge fontSize={14}>{tag}</Badge>
            ))}
            {isNewPost && (
              <Badge fontSize={14} colorScheme="green">
                new
              </Badge>
            )}
          </Box>
          <Tooltip label={title} hasArrow>
            <Heading marginTop={2} fontSize={24} noOfLines={1}>
              {title}
            </Heading>
          </Tooltip>
          <Text
            fontSize={16}
            color={isDarkMode ? "whiteAlpha.600" : "gray.600"}
            noOfLines={2}
          >
            {description}
          </Text>
        </Box>
      </Box>
    </Link>
  );
};

export default PostCard;
