import Link from "next/link";
import { config } from "../config";

const Nav = () => (
  <div>
    {config.nav.map((navItem) => (
      <Link href={navItem.link} key={navItem.text}>
        <a className="navLink">{navItem.text}</a>
      </Link>
    ))}
    <style jsx>{`
      .navLink {
        margin-right: 15px;
      }
    `}</style>
  </div>
);

export default Nav;
