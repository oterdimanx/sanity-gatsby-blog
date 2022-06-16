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
      description: "Titles should be catchy, descriptive, and not too long",
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug",
      description:
        "Some frontends will require a slug to be set to be able to show the post",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "publishedAt",
      type: "datetime",
      title: "Published at",
      description: "This can be used to schedule post for publishing",
    },
    {
      name: "mainImage",
      type: "mainImage",
      title: "Main image",
    },
    {
      name: "excerpt",
      type: "excerptPortableText",
      title: "Excerpt",
      description:
        "This ends up on summary pages, on Google, when people share your post in social media.",
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
    },
    {
      name: "price",
      type: "number",
      title: "Prix",
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
