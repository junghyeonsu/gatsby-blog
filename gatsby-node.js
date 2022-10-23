const path = require("path");

const contentTemplate = path.resolve(`./src/templates/ContentTemplate.tsx`);

exports.createPages = async ({ graphql, actions: { createPage } }) => {
  const result = await graphql(`
    query {
      allMdx {
        nodes {
          id
          frontmatter {
            slug
            tags
          }
          internal {
            contentFilePath
          }
        }
      }
    }
  `);

  result.data.allMdx.nodes.forEach((node) => {
    createPage({
      path: node.frontmatter.slug,
      component: `${contentTemplate}?__contentFilePath=${node.internal.contentFilePath}`,
      context: {
        tags: node.frontmatter.tags,
        id: node.id,
      },
    });
  });
};