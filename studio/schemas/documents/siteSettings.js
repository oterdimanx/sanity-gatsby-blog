export default {
  name: "siteSettings",
  type: "document",
  title: "Site Settings",
  __experimental_actions: ["update", /* 'create', 'delete',*/  "publish"],
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: 'subtitle',
      type: 'string',
      title: 'Subtitle',
    },
    {
      name: "summary",
      type: "text",
      title: "Texte de la page d'accueil",
      description: "Cet encart de texte apparaîtra directement sur la page d'accueil.",
    },
    {
      name: "description",
      type: "text",
      title: "Description",
      description: "Description du site pour les moteurs de recherche et les réseaux sociaux.",
    },
    {
      name: "keywords",
      type: "array",
      title: "Keywords",
      description: "Mots-clés importants pour le référencement.",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
    },
    {
      name: "author",
      type: "reference",
      description: "Définir un agent immobilier par défaut.",
      title: "Author",
      to: [{ type: "author" }],
    },
  ],
};
