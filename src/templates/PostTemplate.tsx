import type { HeadFC } from "gatsby";
import { graphql } from "gatsby";
import React from "react";

import Giscus from "../components/Giscus";
import PostContentTitle from "../components/PostContentTitle";
import PostLayout from "../components/PostLayout";
import RelatedPosts from "../components/RelatedPosts";

export const query = graphql`
  query PostTemplate($id: String!, $tags: [String!]!) {
    post: mdx(id: { eq: $id }) {
      frontmatter {
        createdAt
        description
        tags
        slug
        title
        updatedAt
        thumbnail {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
    relatedPosts: allMdx(
      filter: { frontmatter: { tags: { in: $tags } } }
      sort: { fields: frontmatter___createdAt, order: DESC }
      limit: 4
    ) {
      nodes {
        frontmatter {
          tags
          title
          slug
          thumbnail {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
`;

interface PostTemplateProps {
  children: React.ReactNode;
  data: GatsbyTypes.PostTemplateQuery;
}

const PostTemplate: React.FC<PostTemplateProps> = ({ children, data }) => {
  console.log("data", data);

  return (
    <main>
      <PostLayout>
        <section
          style={{
            maxWidth: "800px",
            margin: "50px auto",
            wordBreak: "keep-all",
            overflowWrap: "break-word",
            lineHeight: "1.7",
            letterSpacing: "-0.04px",
          }}
        >
          <PostContentTitle post={data.post} />
          {children}
          <RelatedPosts relatedPosts={data.relatedPosts} />
          <Giscus />
        </section>
      </PostLayout>
    </main>
  );
};

export const Head: HeadFC = () => <title>Component page</title>;

export default PostTemplate;
