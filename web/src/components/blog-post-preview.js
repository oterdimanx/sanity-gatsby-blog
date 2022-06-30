import * as styles from "./blog-post-preview.module.css";
import { buildImageObj, cn, getAnnonceUrl } from "../lib/helpers";
import { Link } from "gatsby";
import PortableText from "./portableText";
import React from "react";
import { format } from "date-fns";
import { imageUrlFor } from "../lib/image-url";
import { responsiveTitle3 } from "./typography.module.css";
//import { CC } from "currency-converter-lt";

function BlogPostPreview(props) {

  //let currencyConverter = new CC();
  return (
    <Link
      className={props.isInList ? styles.inList : styles.inGrid}
      to={getAnnonceUrl(props.publishedAt, props.slug.current, props.categories)}
    >
        <div className={styles.leadMediaThumb}>
          {props.mainImage && props.mainImage.asset && (
            <img
              src={imageUrlFor(buildImageObj(props.mainImage))
                .width(600)
                .height(Math.floor((9 / 16) * 600))
                .auto("format")
                .url()}
              alt={props.mainImage.alt}
            />
          )}
        </div>
        <div className={styles.text}>
          <h3 className={cn(responsiveTitle3, styles.title)}>{props.code}</h3>
          {props._rawExcerpt && (
            <div className={styles.excerpt}>
              <PortableText blocks={props._rawExcerpt} />
            </div>
          )}


        <div className={styles.listContainer}>

          <ul className={styles.firstlist}>

            {props.price && props.price > 0 && (
              <li className={styles.child}>
                <div>{props.price} &euro;</div>
              </li>
            )}

          </ul>
          <ul className={styles.list}>

            {props.isles && props.isles.length > 0 && (
              <li>
                  {props.isles.map((island) => (
                    <div>{island.title}</div>
                  ))}
              </li>
            )}

            {props.chambres && props.chambres.length > 0 && (
              <li>
                {props.chambres.map((chamber) => (
                  <div>{chamber.quantity} chambre(s)</div>
                ))}
              </li>
            )}

            {props.surface && props.surface.length > 0 && (
              <li>
                <div>{props.surface}</div>
              </li>
            )}

          </ul>

        </div>
        <hr />
        <div className={styles.date}>
          {format(new Date(props.publishedAt), "MMMM Mo, yyyy")}
        </div>
      </div>
    </Link>
  );
}

export default BlogPostPreview;
