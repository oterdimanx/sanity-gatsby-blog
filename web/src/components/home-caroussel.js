import * as styles from "./home-caroussel.module.css";
import { Link } from "gatsby";
import React from "react";

function HomeCaroussel(props) {
  return (
    <div className={styles.root}>
      <div className={styles.grid}>
        <div className={styles.slide}><img src={'/home-caroussel-1.jpg'} alt="home-caroussel-1.jpg" className={styles.image} /></div>
        <div className={styles.slide}><img src={'/home-caroussel-2.jpg'} alt="home-caroussel-2.jpg" className={styles.image} /></div>
        <div className={styles.slide}><img src={'/home-caroussel-3.jpg'} alt="home-caroussel-3.jpg" className={styles.image} /></div>
      </div>
    </div>
  );
}

HomeCaroussel.defaultProps = {
  nodes: [],
};

export default HomeCaroussel;
