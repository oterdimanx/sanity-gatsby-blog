import { format, isFuture } from "date-fns";

export function cn(...args) {
  return args.filter(Boolean).join(" ");
}

export function mapEdgesToNodes(data) {
  if (!data.edges) return [];
  return data.edges.map((edge) => edge.node);
}

export function filterOutDocsWithoutSlugs({ slug }) {
  return (slug || {}).current;
}

export function filterOutDocsPublishedInTheFuture({ publishedAt }) {
  return !isFuture(new Date(publishedAt));
}

export function filterOutputExtractor({ categories }) {
  var str     = JSON.parse(JSON.stringify(categories));
  var catSlug = str[0]['ident'];
  return catSlug;
}

export function getBlogUrl(publishedAt, slug ) {
  return `/${format(new Date(publishedAt), "yyyy/MM")}/${
    slug.current || slug
  }/`;
}

export function getAnnonceUrl(publishedAt, slug, category) {
  var str     = JSON.parse(JSON.stringify(category));
  var catSlug = str[0]['ident'];
  return `/${catSlug || 'annonce'}/${format(new Date(publishedAt), "yyyy/MM")}/${
    slug.current || slug
  }/`;
}

export function buildImageObj(source = { asset: {} }) {
  const imageObj = {
    asset: { _ref: source.asset._ref || source.asset._id },
  };

  if (source.crop) imageObj.crop = source.crop;
  if (source.hotspot) imageObj.hotspot = source.hotspot;

  return imageObj;
}

export function toPlainText(blocks) {
  if (!blocks) {
    return "";
  }
  return blocks
    .map((block) => {
      if (block._type !== "block" || !block.children) {
        return "";
      }
      return block.children.map((child) => child.text).join("");
    })
    .join("\n\n");
}
