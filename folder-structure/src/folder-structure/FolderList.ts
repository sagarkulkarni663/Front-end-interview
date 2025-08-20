export const folderList = [
  {
    id: 1,
    name: "src",
    type: "folder",
    children: [
      {
        id: 2,
        name: "components",
        type: "folder",
        children: [
          {
            id: 3,
            name: "ui",
            type: "folder",
            children: [
              { id: 4, name: "Button.jsx", type: "file" },
              { id: 5, name: "Modal.jsx", type: "file" },
            ],
          },
          {
            id: 6,
            name: "layout",
            type: "folder",
            children: [
              { id: 7, name: "Header.jsx", type: "file" },
              { id: 8, name: "Sidebar.jsx", type: "file" },
            ],
          },
        ],
      },
      {
        id: 9,
        name: "hooks",
        type: "folder",
        children: [
          { id: 10, name: "useAuth.js", type: "file" },
          { id: 11, name: "useDebounce.js", type: "file" },
        ],
      },
      {
        id: 12,
        name: "pages",
        type: "folder",
        children: [
          {
            id: 13,
            name: "dashboard",
            type: "folder",
            children: [
              { id: 14, name: "Dashboard.jsx", type: "file" },
              { id: 15, name: "Stats.jsx", type: "file" },
            ],
          },
          { id: 16, name: "Home.jsx", type: "file" },
          { id: 17, name: "About.jsx", type: "file" },
        ],
      },
      { id: 18, name: "App.js", type: "file" },
      { id: 19, name: "index.js", type: "file" },
    ],
  },
  {
    id: 20,
    name: "public",
    type: "folder",
    children: [
      {
        id: 21,
        name: "assets",
        type: "folder",
        children: [
          { id: 22, name: "logo.png", type: "file" },
          { id: 23, name: "styles.css", type: "file" },
        ],
      },
      { id: 24, name: "index.html", type: "file" },
      { id: 25, name: "favicon.ico", type: "file" },
    ],
  },
  { id: 26, name: "package.json", type: "file" },
  { id: 27, name: "README.md", type: "file" },
];
