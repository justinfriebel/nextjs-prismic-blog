import Link from "next/link";
import {
  Twitter,
  Instagram,
  Linkedin,
  Facebook,
  GitHub,
  Mail,
  DollarSign,
} from "react-feather";

const linkStyle = {
  marginRight: 15,
};

const footerWrapper = {
  marginTop: 60,
};

const Footer = () => (
  <div style={footerWrapper}>
    <Link href="//twitter.com/freebly">
      <a target="_blank" style={linkStyle}>
        <Twitter />
      </a>
    </Link>
    <Link href="//www.instagram.com/freebies/">
      <a target="_blank" style={linkStyle}>
        <Instagram />
      </a>
    </Link>
    <Link href="//www.facebook.com/JustinFreebs">
      <a target="_blank" style={linkStyle}>
        <Facebook />
      </a>
    </Link>
    <Link href="//www.linkedin.com/in/justin-friebel-b199641b/">
      <a target="_blank" style={linkStyle}>
        <Linkedin />
      </a>
    </Link>
    <Link href="//github.com/justinfriebel">
      <a target="_blank" style={linkStyle}>
        <GitHub />
      </a>
    </Link>
    <Link href="//mail.google.com/mail/u/0/?view=cm&fs=1&to=friebj99@gmail.com&tf=1">
      <a target="_blank" style={linkStyle}>
        <Mail />
      </a>
    </Link>
    <Link href="//cash.app/$freebly">
      <a target="_blank" style={linkStyle}>
        <DollarSign />
      </a>
    </Link>
    <p className="poweredBy">
      &copy; {new Date().getFullYear()} Justin Friebel. Powered by
      <Link href="//nextjs.org/">
        <a target="_blank"> Next.js</a>
      </Link>
      ,
      <Link href="//prismic.io/">
        <a target="_blank"> prismic</a>
      </Link>
      , &
      <Link href="//vercel.com">
        <a target="_blank"> Vercel</a>
      </Link>
      .
    </p>
    <style jsx>{`
      .poweredBy {
        font-size: 12px;
      }
    `}</style>
  </div>
);

export default Footer;
