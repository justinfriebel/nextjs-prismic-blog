import { Nav } from "components/Nav";
import { Footer } from "components/Footer";

const Layout = (props: any) => (
  <div className="layoutContainer">
    <Nav />
    {props.children}
    <Footer />

    <style jsx>{`
      .layoutContainer {
        padding: 20px;
        margin-left: auto;
        margin-right: auto;
        max-width: 800px;
      }
    `}</style>
  </div>
);

export { Layout };
