import FontFaceObserver from "fontfaceobserver";

const Fonts = () => {
  const link = document.createElement("link");
  link.href =
    "https://fonts.googleapis.com/css?family=Open+Sans|Roboto&display=swap";
  link.rel = "stylesheet";

  document.head.appendChild(link);

  const roboto = new FontFaceObserver("Roboto");
  const openSans = new FontFaceObserver("Open+Sans");

  roboto
    .load()
    .then(() => {
      openSans.load();
    })
    .then(() => {
      document.documentElement.classList.add("roboto");
      document.documentElement.classList.add("open sans");
    });
};

export { Fonts };
