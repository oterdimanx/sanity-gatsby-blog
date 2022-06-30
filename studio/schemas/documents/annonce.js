import { format } from "date-fns";

export default {
  name: "post",
  type: "document",
  title: "Annonce",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
      description: "Titre de l'annonce, repris sur les pages annonces, évitez les titres trop longs pour optimiser la mise en page et le référencement.",
    },
    {
      name: "code",
      type: "string",
      title: "Code Annonce",
      description: "Code Annonce, mis en avant sur les aperçus d'annonce en page d'accueil.",
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug",
      description:
        "utilisé pour l'url (adresse) de l'annonce, ne pas utiliser d'accents ni de caractères spéciaux.",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "publishedAt",
      type: "datetime",
      title: "Publication planifiée",
      description: "Cette option peut être utilisée pour planifier la mise en ligne d'une annonce à une date particulière.",
    },
    {
      name: "mainImage",
      type: "mainImage",
      title: "Image Principale",
    },
    {
      name: "excerpt",
      type: "excerptPortableText",
      title: "Excerpt",
      description:
        "Cet encart se retrouve sur les aperçus d'annonce, ou sur les moteurs de recherche, lorsqu'une page annonce est par exemple partagée dans les réseaux sociaux.",
    },
    {
      name: "authors",
      title: "Authors",
      type: "array",
      of: [
        {
          type: "authorReference",
        },
      ],
    },
    {
      name: "categories",
      type: "array",
      title: "Type",
      of: [
        {
          type: "reference",
          to: {
            type: "category",
          },
        },
      ],
    },
    {
      name: "isles",
      type: "array",
      title: "Île",
      of: [
        {
          type: "reference",
          to: {
            type: "island",
          },
        },
      ],
    },
    {
      name: "chambres",
      type: "array",
      title: "Nombre de Chambres",
      of: [
        {
          type: "reference",
          to: {
            type: "rooms",
          },
        },
      ],
      description:
        "Le nombre de chambres doit être une valeur numérique",
    },
    {
      name: "garageItems",
      type: "array",
      title: "Nombre de Garages",
      of: [
        {
          type: "reference",
          to: {
            type: "garageItem",
          },
        },
      ],
    },
    {
      name: "terraItems",
      type: "array",
      title: "Nombre de Terrasses",
      of: [
        {
          type: "reference",
          to: {
            type: "terraItem",
          },
        },
      ],
    },
    {
      name: "surface",
      type: "string",
      title: "Surface",
      description: "La surface du bâti.",
    },
    {
      name: "globalSurface",
      type: "string",
      title: "Surface totale du terrain",
      description: "La surface totale du terrain.",
    },
    {
      name: "price",
      type: "number",
      title: "Prix",
      description: "Le prix est exprimé en euros.",
    },
    {
      name: "altImage1",
      type: "mainImage",
      title: "Images de la galerie (1)",
    },
    {
      name: "altImage2",
      type: "mainImage",
      title: "Images de la galerie (2)",
    },
    {
      name: "altImage3",
      type: "mainImage",
      title: "Images de la galerie (3)",
    },
    {
      name: "altImage4",
      type: "mainImage",
      title: "Images de la galerie (4)",
    },
    {
      name: "altImage5",
      type: "mainImage",
      title: "Images de la galerie (5)",
    },
    {
      name: "altImage6",
      type: "mainImage",
      title: "Images de la galerie (6)",
    },
    {
      name: "altImage7",
      type: "mainImage",
      title: "Images de la galerie (7)",
    },
    {
      name: "altImage8",
      type: "mainImage",
      title: "Images de la galerie (8)",
    },
    {
      name: "altImage9",
      type: "mainImage",
      title: "Images de la galerie (9)",
    },
    {
      name: "altImage10",
      type: "mainImage",
      title: "Images de la galerie (10)",
    },
    {
      name: "altImage11",
      type: "mainImage",
      title: "Images de la galerie (11)",
    },
    {
      name: "altImage12",
      type: "mainImage",
      title: "Images de la galerie (12)",
    },
    {
      name: "altImage13",
      type: "mainImage",
      title: "Images de la galerie (13)",
    },
    {
      name: "altImage14",
      type: "mainImage",
      title: "Images de la galerie (14)",
    },
    {
      name: "altImage15",
      type: "mainImage",
      title: "Images de la galerie (15)",
    },
    {
      name: "body",
      type: "bodyPortableText",
      title: "Body",
    },
  ],
  orderings: [
    {
      name: "publishingDateAsc",
      title: "Publishing date new–>old",
      by: [
        {
          field: "publishedAt",
          direction: "asc",
        },
        {
          field: "title",
          direction: "asc",
        },
      ],
    },
    {
      name: "publishingDateDesc",
      title: "Publishing date old->new",
      by: [
        {
          field: "publishedAt",
          direction: "desc",
        },
        {
          field: "title",
          direction: "asc",
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "title",
      publishedAt: "publishedAt",
      slug: "slug",
      media: "mainImage",
    },
    prepare({ title = "No title", publishedAt, slug = {}, media }) {
      const dateSegment = format(new Date(publishedAt), "yyyy/MM");
      const path = `/${dateSegment}/${slug.current}/`;
      return {
        title,
        media,
        subtitle: publishedAt ? path : "Missing publishing date",
      };
    },
  },
};
