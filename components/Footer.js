import Link from "next/link";
import {
  Twitter,
  Instagram,
  Linkedin,
  Facebook,
  GitHub,
  Mail,
  DollarSign
} from "react-feather";

const linkStyle = {
  marginRight: 15
};

const footerWrapper = {
  marginTop: 60
};

const Footer = () => (
  <div style={footerWrapper}>
    <Link href="https://twitter.com/freebly">
      <a target="_blank" style={linkStyle}>
        <Twitter />
      </a>
    </Link>
    <Link href="https://www.instagram.com/freebies/">
      <a target="_blank" style={linkStyle}>
        <Instagram />
      </a>
    </Link>
    <Link href="https://www.facebook.com/JustinFreebs">
      <a target="_blank" style={linkStyle}>
        <Facebook />
      </a>
    </Link>
    <Link href="https://www.linkedin.com/in/justin-friebel-b199641b/">
      <a target="_blank" style={linkStyle}>
        <Linkedin />
      </a>
    </Link>
    <Link href="https://github.com/justinfriebel">
      <a target="_blank" style={linkStyle}>
        <GitHub />
      </a>
    </Link>
    <Link href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=friebj99@gmail.com&tf=1">
      <a target="_blank" style={linkStyle}>
        <Mail />
      </a>
    </Link>
    {/* <Link href="https://cash.app/$freebly">
      <a target="_blank" style={linkStyle}>
        <DollarSign />
      </a>
    </Link> */}
  </div>
);

export default Footer;
