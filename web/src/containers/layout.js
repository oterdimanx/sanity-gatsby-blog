import React, { useState } from "react";
import { graphql, useStaticQuery } from "gatsby";
import Layout from "../components/layout";

const query = graphql`
  query SiteMenuQuery {
    site {
      siteMetadata {
        title
        menuLinks {
          name
          link
        }
      }
    }
  }
`;

function LayoutContainer(props) {
  const [showNav, setShowNav] = useState(false);

  function handleShowNav() {
    setShowNav(true);
  }

  function handleHideNav() {
    setShowNav(false);
  }

  const data = useStaticQuery(query);
  if (!data.site) {
    throw new Error(
      'Missing "Site settings". Open the Studio at http://localhost:3333 and some content in "Site settings"'
    );
  }

  return (
    <Layout
      {...props}
      showNav={showNav}
      siteTitle={data.site.siteMetadata.title}
      onHideNav={handleHideNav}
      onShowNav={handleShowNav}
      menuLinks={data.site.siteMetadata.menuLinks}
    />
  );
}

export default LayoutContainer;
