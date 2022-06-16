import { graphql } from "gatsby";
import BlogPost from "../components/blog-post";
import React from "react";
import GraphQLErrorList from "../components/graphql-error-list";
import Layout from "../containers/layout";
import Container from "../components/container";
import SEO from "../components/seo";
import { toPlainText } from "../lib/helpers";
import Img from "gatsby-image";
import { withPrefix, Link } from "gatsby";
import Helmet from "react-helmet";

export const query = graphql`
  query BlogPostTemplateQuery($id: String!) {
    post: sanityPost(id: { eq: $id }) {
      id
      publishedAt
      categories {
        title
        ident
      }
      isles {
        _id
        title
      }
      chambres {
        _id
        numChambres
        quantity
      }
      garageItems {
        ident
        name
        quantity
      }
      terraItems {
        ident
        name
        quantity
      }
      mainImage {
        ...SanityImage
        alt
      }
      altImage1 {
        ...SanityImage
        alt
      }
      altImage2 {
        ...SanityImage
        alt
      }
      altImage3 {
        ...SanityImage
        alt
      }
      altImage4 {
        ...SanityImage
        alt
      }
      altImage5 {
        ...SanityImage
        alt
      }
      altImage6 {
        ...SanityImage
        alt
      }
      altImage7 {
        ...SanityImage
        alt
      }
      altImage8 {
        ...SanityImage
        alt
      }
      altImage9 {
        ...SanityImage
        alt
      }
      altImage10 {
        ...SanityImage
        alt
      }
      altImage11 {
        ...SanityImage
        alt
      }
      altImage12 {
        ...SanityImage
        alt
      }
      altImage13 {
        ...SanityImage
        alt
      }
      altImage14 {
        ...SanityImage
        alt
      }
      altImage15 {
        ...SanityImage
        alt
      }
      surface
      price
      title
      slug {
        current
      }
      _rawExcerpt(resolveReferences: { maxDepth: 5 })
      _rawBody(resolveReferences: { maxDepth: 5 })
      authors {
        _key
        author {
          image {
            crop {
              _key
              _type
              top
              bottom
              left
              right
            }
            hotspot {
              _key
              _type
              x
              y
              height
              width
            }
            asset {
              _id
            }
          }
          name
        }
      }
    }
  }
`;

const BlogPostTemplate = (props) => {
  const { data, errors } = props;
  const post = data && data.post;
  return (
    <Layout>
      {errors && <SEO title="GraphQL Error" />}
      {post && (
        <SEO
          title={post.title || "Untitled"}
          description={toPlainText(post._rawExcerpt)}
          image={post.mainImage}
        />
      )}
      <Helmet>
          <script src={withPrefix('slideshow.js')} type="text/javascript" />
      </Helmet>
      {errors && (
        <Container>
          <GraphQLErrorList errors={errors} />
        </Container>
      )}

      {post && <BlogPost {...post} />}
    </Layout>
  );
};

export default BlogPostTemplate;
