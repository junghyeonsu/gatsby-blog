import type { HeadFC } from "gatsby";
import { graphql } from "gatsby";
import React from "react";

import Layout from "../components/Layout";
import PostContentTitle from "../components/PostContentTitle";

export const query = graphql`
  query ContentTemplate($id: String!, $tags: [String!]!) {
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
          slug
          thumbnail {
            childImageSharp {
              resize {
                src
                width
                height
              }
            }
          }
        }
      }
    }
  }
`;

interface ContentTemplateProps {
  children: React.ReactNode;
  data: GatsbyTypes.ContentTemplateQuery;
}

const ContentTemplate: React.FC<ContentTemplateProps> = ({
  children,
  data,
}) => {
  console.log("data", data);

  return (
    <main>
      <Layout>
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
        </section>
      </Layout>
    </main>
  );
};

export const Head: HeadFC = () => <title>Component page</title>;

export default ContentTemplate;
