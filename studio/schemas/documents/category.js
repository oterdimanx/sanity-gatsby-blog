export default {
  name: "category",
  type: "document",
  title: "Category",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Titre",
    },
    {
      name: "ident",
      type: "string",
      title: "Urls de la catégorie respective",
    },
    {
      name: "description",
      type: "text",
      title: "Description",
    },
  ],
};
