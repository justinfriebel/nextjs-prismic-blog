import Nav from "./nav";

const layoutStyle = {
  margin: 20,
  padding: 20
};

const Layout = (props: any) => (
  <div style={layoutStyle}>
    <Nav />
    {props.children}
  </div>
);

export default Layout;
