import Nav from "./Nav";

const Layout = (props: any) => (
  <div className="layoutContainer">
    <Nav />
    {props.children}

    <style jsx>{`
      .layoutContainer {
        padding: 20px;
      }
      @media (max-width: 1920px) {
        .layoutContainer {
          max-width: 60%;
          margin-left: auto;
          margin-right: auto;
        }
      }
      @media (max-width: 1440px) {
        .layoutContainer {
          max-width: 70%;
          margin-left: auto;
          margin-right: auto;
        }
      }
      @media (max-width: 1024px) {
        .layoutContainer {
          max-width: 80%;
          margin-left: auto;
          margin-right: auto;
        }
      }
      @media (max-width: 600px) {
        .layoutContainer {
          max-width: 100%;
          margin-left: auto;
          margin-right: auto;
        }
      }
    `}</style>
  </div>
);

export default Layout;
