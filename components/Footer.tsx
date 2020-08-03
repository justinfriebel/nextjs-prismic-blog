import { config } from "config";

const Footer = () => (
  <div className="footerContainer">
    {config.socials.map((social) => (
      <a
        href={`${social.link}`}
        key={social.link}
        target="_blank"
        className="footerLink"
      >
        <social.icon />
      </a>
    ))}

    <p className="copyrightContainer">
      &copy; {new Date().getFullYear()} {config.name}.
      {config.displayPoweredBy && (
        <span>
          {" "}
          Powered by{" "}
          <a href="https://nextjs.org/" target="_blank">
            Next.js
          </a>
          ,{" "}
          <a href="https://prismic.io/" target="_blank">
            prismic
          </a>
          , &{" "}
          <a href="https://vercel.com" target="_blank">
            Vercel
          </a>
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
