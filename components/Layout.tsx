import Nav from "./Nav";
import Footer from "./Footer";

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

export default Layout;
