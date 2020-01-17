import Nav from "./Nav";

const Layout = (props: any) => (
  <div className="layoutContainer">
    <Nav />
    {props.children}

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
