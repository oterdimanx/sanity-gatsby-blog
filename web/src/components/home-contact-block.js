import * as styles from "./home-contact-block.module.css";
import { Link, graphql, useStaticQuery } from "gatsby";
import React from "react";
import PropTypes from "prop-types";

function HomeContactBlock() {
  const { datas } = useStaticQuery(contactQuery) || {};

  return (
    <div className={styles.root}>
      <div className={styles.contact}>
        <h2>{datas.title}</h2>
        <p>{datas.description}</p>
        <a href="./contact" className={styles.contactButton}>Contactez-nous</a>
      </div>
    </div>
  );
}

HomeContactBlock.propTypes = {
  contactDescription: PropTypes.string,
  contactTitle: PropTypes.string,
};

export default HomeContactBlock;

const contactQuery = graphql`
  query DefaultContactQuery {
    datas: sanitySiteSettings(_id: { eq: "siteSettings" }) {
      title
      description
    }
  }
`;
