import Link from "next/link";

const linkStyle = {
  marginRight: 15,
};

const Nav = () => (
  <div>
    <Link href="/">
      <a style={linkStyle}>Home</a>
    </Link>
    <Link href="/about">
      <a style={linkStyle}>About</a>
    </Link>
    <Link href="/blog">
      <a style={linkStyle}>Blog</a>
    </Link>
    <Link href="/resume">
      <a style={linkStyle}>Resume</a>
    </Link>
  </div>
);

export default Nav;
