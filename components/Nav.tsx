import Link from "next/link";
import { config } from "config";
import logo from "public/logo.svg";

const Nav = () => {
  const { displayLogo, name, nav } = config;

  return (
    <div className="navContainer">
      {displayLogo && <img src={logo} alt={`${name} logo`} />}

      {nav.map((navItem) => (
        <Link href={navItem.link} key={navItem.text}>
          <a className={displayLogo ? "navLinksWithLogo" : "navLinksNoLogo"}>
            {navItem.text}
          </a>
        </Link>
      ))}

      <style jsx>{`
        .navContainer {
          display: flex;
          align-items: center;
        }
        .navLinksWithLogo {
          margin-right: 12px;
          margin-left: 12px;
        }
        .navLinksNoLogo {
          margin-right: 15px;
        }
      `}</style>
    </div>
  );
};

export { Nav };
