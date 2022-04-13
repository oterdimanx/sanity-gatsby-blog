export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "6256ec14b513e23c476549bd",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-8ddx34o3",
                  apiId: "ddda0c19-c64b-4535-b4e5-fbe12a41da1f",
                },
                {
                  buildHookId: "6256ec14274ed740f5d2d7ed",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-mzdn2nm3",
                  apiId: "2cc37e51-fdab-48ac-a3ea-270faade2dde",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/oterdimanx/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-mzdn2nm3.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
