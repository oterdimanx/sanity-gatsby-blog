import * as styles from "./blog-post.module.css";
import { differenceInDays, formatDistance, format } from "date-fns";
import AuthorList from "./author-list";
import Container from "./container";
import PortableText from "./portableText";
import React from "react";
import { buildImageObj } from "../lib/helpers";
import { imageUrlFor } from "../lib/image-url";

function BlogPost(props) {
  const {
    _rawBody,
    authors,
    categories,
    isles,
    chambres,
    garageItems,
    terraItems,
    surface,
    price,
    title,
    mainImage,
    publishedAt,
  } = props;
  return (
    <article className={styles.root}>
      {mainImage && mainImage.asset && (
        <div className={styles.mainImage}>
          <img
            src={imageUrlFor(buildImageObj(mainImage))
              .width(1200)
              .height(Math.floor((9 / 16) * 1200))
              .fit("crop")
              .auto("format")
              .url()}
            alt={mainImage.alt}
          />
        </div>
      )}
      <Container>
        <div className={styles.grid}>
          <div className={styles.mainContent}>
            <h1 className={styles.title}>{title}</h1>
            {_rawBody && <PortableText blocks={_rawBody} />}
          </div>
          <aside className={styles.metaContent}>
            {publishedAt && (
              <div className={styles.publishedAt}>
                {differenceInDays(new Date(publishedAt), new Date()) > 3
                  ? formatDistance(new Date(publishedAt), new Date())
                  : format(new Date(publishedAt), "MMMM Mo, yyyy")}
              </div>
            )}
            {authors && <AuthorList items={authors} title="Authors" />}
            {categories && categories.length > 0 && (
              <div className={styles.categories}>
                <h3 className={styles.categoriesHeadline}>Categories</h3>
                <ul>
                  {categories.map((category) => (
                    <li key={category._id}>{category.title}</li>
                  ))}
                </ul>
              </div>
            )}
            {isles && isles.length > 0 && (
              <div className={styles.isles}>
                <h3 className={styles.islesHeadline}>Localisation</h3>
                <ul>
                  {isles.map((island) => (
                    <li key={island._id}>{island.title}</li>
                  ))}
                </ul>
              </div>
            )}
            {chambres && chambres.length > 0 && (
              <div className={styles.chambres}>
                <h3 className={styles.chambresHeadline}>Nombre de chambres</h3>
                <ul>
                  {chambres.map((chamber) => (
                    <li key={chamber._id}>{chamber.quantity}</li>
                  ))}
                </ul>
              </div>
            )}
            {garageItems && garageItems.length > 0 && (
              <div className={styles.garageItems}>
                <h3 className={styles.garageItemsHeadline}>Nombre de garages</h3>
                <ul>
                  {garageItems.map((garageItem) => (
                    <li key={garageItem.name}>{garageItem.quantity}</li>
                  ))}
                </ul>
              </div>
            )}
            {terraItems && terraItems.length > 0 && (
              <div className={styles.terraItems}>
                <h3 className={styles.terraItemsHeadline}>Nombre de terrasses</h3>
                <ul>
                  {terraItems.map((terraItem) => (
                    <li key={terraItem.name}>{terraItem.quantity}</li>
                  ))}
                </ul>
              </div>
            )}
            {surface && surface.length > 0 && (
              <div className={styles.surface}>
                <h3 className={styles.surfaceHeadline}>Superficie</h3>
                <ul>
                  <li className={styles.surface}>{surface}</li>
                </ul>
              </div>
            )}
            {price && price > 0 && (
              <div className={styles.price}>
                <h3 className={styles.priceHeadline}>Prix</h3>
                <ul>
                  <li className={styles.price}>{price}</li>
                </ul>
              </div>
            )}

          </aside>
        </div>
      </Container>
    </article>
  );
}

export default BlogPost;
