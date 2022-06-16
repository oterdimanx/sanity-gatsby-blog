import * as styles from "./blog-post.module.css";
import { differenceInDays, formatDistance, format } from "date-fns";
import AuthorList from "./author-list";
import Container from "./container";
import PortableText from "./portableText";
import React from "react";
import { buildImageObj } from "../lib/helpers";
import { imageUrlFor } from "../lib/image-url";
//import Img from "gatsby-image";

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
    altImage1,
    altImage2,
    altImage3,
    altImage4,
    altImage5,
    altImage6,
    altImage7,
    altImage8,
    altImage9,
    altImage10,
    altImage11,
    altImage12,
    altImage13,
    altImage14,
    altImage15,
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
      {mainImage && altImage1 && altImage2 && altImage3 && altImage4 && altImage5 && altImage6 && altImage7 && altImage8 && altImage9 && (
      <Container>
        <div id="slideshow">
          {mainImage && mainImage.asset && (
            <div className={styles.mainImage}>
              <img
                src={imageUrlFor(buildImageObj(mainImage))
                  .width(400)
                  .height(Math.floor((9 / 16) * 400))
                  .fit("crop")
                  .auto("format")
                  .url()}
                alt={mainImage.alt}
              />
            </div>
          )}

          {altImage1 && altImage1.asset && (
            <div className={styles.altImage1}>
              <img
                src={imageUrlFor(buildImageObj(altImage1))
                  .width(400)
                  .height(Math.floor((9 / 16) * 400))
                  .fit("crop")
                  .auto("format")
                  .url()}
                alt={altImage1.alt}
              />
            </div>
          )}

          {altImage2 && altImage2.asset && (
            <div className={styles.altImage2}>
              <img
                src={imageUrlFor(buildImageObj(altImage2))
                  .width(400)
                  .height(Math.floor((9 / 16) * 400))
                  .fit("crop")
                  .auto("format")
                  .url()}
                alt={altImage2.alt}
              />
             </div>
          )}

          {altImage3 && altImage3.asset && (
            <div className={styles.altImage3}>
              <img
                src={imageUrlFor(buildImageObj(altImage3))
                  .width(400)
                  .height(Math.floor((9 / 16) * 400))
                  .fit("crop")
                  .auto("format")
                  .url()}
                alt={altImage3.alt}
              />
             </div>
          )}

          {altImage4 && altImage4.asset && (
            <div className={styles.altImage4}>
              <img
                src={imageUrlFor(buildImageObj(altImage4))
                  .width(400)
                  .height(Math.floor((9 / 16) * 400))
                  .fit("crop")
                  .auto("format")
                  .url()}
                alt={altImage4.alt}
              />
             </div>
          )}

          {altImage5 && altImage5.asset && (
               <div className={styles.altImage5}>
                <img
                  src={imageUrlFor(buildImageObj(altImage5))
                    .width(400)
                    .height(Math.floor((9 / 16) * 400))
                    .fit("crop")
                    .auto("format")
                    .url()}
                  alt={altImage5.alt}
                />
               </div>
          )}

          {altImage6 && altImage6.asset && (
             <div className={styles.altImage6}>
              <img
                src={imageUrlFor(buildImageObj(altImage6))
                  .width(400)
                  .height(Math.floor((9 / 16) * 400))
                  .fit("crop")
                  .auto("format")
                  .url()}
                alt={altImage6.alt}
              />
             </div>
          )}

          {altImage7 && altImage7.asset && (
            <div className={styles.altImage7}>
              <img
                src={imageUrlFor(buildImageObj(altImage7))
                  .width(400)
                  .height(Math.floor((9 / 16) * 400))
                  .fit("crop")
                  .auto("format")
                  .url()}
                alt={altImage7.alt}
              />
             </div>
          )}

          {altImage8 && altImage8.asset && (
            <div className={styles.altImage8}>
              <img
                src={imageUrlFor(buildImageObj(altImage8))
                  .width(400)
                  .height(Math.floor((9 / 16) * 400))
                  .fit("crop")
                  .auto("format")
                  .url()}
                alt={altImage8.alt}
              />
             </div>
          )}

          {altImage9 && altImage9.asset && (
            <div className={styles.altImage9}>
              <img
                src={imageUrlFor(buildImageObj(altImage9))
                  .width(400)
                  .height(Math.floor((9 / 16) * 400))
                  .fit("crop")
                  .auto("format")
                  .url()}
                alt={altImage9.alt}
              />
             </div>
          )}

          {altImage10 && altImage10.asset && (
            <div className={styles.altImage10}>
              <img
                src={imageUrlFor(buildImageObj(altImage10))
                  .width(400)
                  .height(Math.floor((9 / 16) * 400))
                  .fit("crop")
                  .auto("format")
                  .url()}
                alt={altImage10.alt}
              />
             </div>
          )}

          {altImage11 && altImage11.asset && (
            <div className={styles.altImage11}>
              <img
                src={imageUrlFor(buildImageObj(altImage11))
                  .width(400)
                  .height(Math.floor((9 / 16) * 400))
                  .fit("crop")
                  .auto("format")
                  .url()}
                alt={altImage11.alt}
              />
             </div>
          )}

          {altImage12 && altImage12.asset && (
            <div className={styles.altImage12}>
              <img
                src={imageUrlFor(buildImageObj(altImage12))
                  .width(400)
                  .height(Math.floor((9 / 16) * 400))
                  .fit("crop")
                  .auto("format")
                  .url()}
                alt={altImage12.alt}
              />
             </div>
          )}

          {altImage13 && altImage13.asset && (
            <div className={styles.altImage13}>
              <img
                src={imageUrlFor(buildImageObj(altImage13))
                  .width(400)
                  .height(Math.floor((9 / 16) * 400))
                  .fit("crop")
                  .auto("format")
                  .url()}
                alt={altImage13.alt}
              />
             </div>
          )}

          {altImage14 && altImage14.asset && (
            <div className={styles.altImage14}>
              <img
                src={imageUrlFor(buildImageObj(altImage14))
                  .width(400)
                  .height(Math.floor((9 / 16) * 400))
                  .fit("crop")
                  .auto("format")
                  .url()}
                alt={altImage14.alt}
              />
             </div>
          )}

        </div>
      </Container>
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
