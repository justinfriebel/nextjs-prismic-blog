import Link from "next/link";
import { config } from "config";
import logo from "public/logo.svg";
import { Menu, X } from "react-feather";
import { useState } from "react";
import { useMedia } from "react-media";
import { colors } from "colors";
import { useRouter } from "next/router";

const Nav = () => {
  const { displayLogo, name, nav, globalMediaQueries } = config;

  const router = useRouter();
  const matches = useMedia({ queries: globalMediaQueries });

  const [isOpen, setIsOpen] = useState(false);

  const toggleMobileNav = (event: React.FormEvent) => {
    event.preventDefault();
    setIsOpen(!isOpen);
  };

  const handleMobileNavItemClick = (event: React.FormEvent, link: string) => {
    toggleMobileNav(event);
    router.push(link);
  };

  return (
    <div>
      <div className="navContainer">
        {displayLogo && (
          <Link href="/">
            <img src={logo} alt={`${name} logo`} />
          </Link>
        )}

        {(matches.medium || matches.large) &&
          nav.map((navItem) => (
            <Link href={navItem.link} key={navItem.text}>
              <a
                className={displayLogo ? "navLinksWithLogo" : "navLinksNoLogo"}
              >
                {navItem.text}
              </a>
            </Link>
          ))}

        {/* {matches.small && ( */}
        <a onClick={(event) => toggleMobileNav(event)} className="menuIcon">
          <Menu />
        </a>
        {/* )} */}
      </div>

      {isOpen && (
        <div className="mobileNavContainer">
          <div className="navLinkContainer">
            <a onClick={(event) => toggleMobileNav(event)}>
              <X />
            </a>
          </div>

          {nav.map((navItem) => (
            <div className="navLinkContainer">
              <a
                onClick={(event) =>
                  handleMobileNavItemClick(event, navItem.link)
                }
              >
                {navItem.text}
              </a>
            </div>
          ))}
        </div>
      )}

      <style jsx>{`
        .navContainer {
          display: flex;
          flex: 1;
          align-items: center;
        }
        .navLinksWithLogo {
          margin-right: 12px;
          margin-left: 12px;
        }
        .navLinksNoLogo {
          margin-right: 15px;
        }
        .menuIcon {
          margin-left: 12px;
        }
        .mobileNavContainer {
          position: fixed;
          left: 50%;
          top: 0;
          transform: translate(-50%, 0%);
          background: ${colors.mobileNavBackground};
          z-index: 9;
          height: 66%;
          width: 88%;
          border-radius: 0px 0px 8px 8px;
          display: flex;
          flex-direction: column;
          -webkit-filter: drop-shadow(
            0px 0px 3px ${colors.mobileNavBackground}
          );
          filter: drop-shadow(0px 0px 3px ${colors.mobileNavBackground});
        }
        .navLinkContainer {
          flex: 1;
          align-items: center;
          display: flex;
          margin: 16px auto;
          cursor: pointer;
        }
        .navLinkContainer:first-child {
          margin-top: 32px;
        }
        .navLinkContainer:last-child {
          margin-bottom: 32px;
        }
        .hidden {
          display: none;
        }
        @media ${globalMediaQueries.medium} {
          .menuIcon {
            display: none;
          }
        }
        @media ${globalMediaQueries.large} {
          .menuIcon {
            display: none;
          }
        }
      `}</style>
    </div>
  );
};

export { Nav };
