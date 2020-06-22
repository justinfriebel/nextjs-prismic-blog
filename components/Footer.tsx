import Link from "next/link";
import { config } from "config";

const Footer = () => (
  <div className="footerContainer">
    {config.socials.map((social) => (
      <Link href={`//${social.link}`} key={social.link}>
        <a target="_blank" className="footerLink">
          <social.icon />
        </a>
      </Link>
    ))}

    <p className="copyrightContainer">
      &copy; {new Date().getFullYear()} {config.name}.
      {config.displayPoweredBy && (
        <span>
          {" "}
          Powered by
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
        </span>
      )}
    </p>

    <style jsx>{`
      .footerContainer {
        margin-top: 60px;
      }
      .footerLink {
        margin-right: 15px;
      }
      .copyrightContainer {
        font-size: 12px;
      }
    `}</style>
  </div>
);

export { Footer };
