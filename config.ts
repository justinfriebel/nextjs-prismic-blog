import {
  Twitter,
  Instagram,
  Facebook,
  Linkedin,
  GitHub,
  Mail,
  DollarSign,
} from "react-feather";

export const config = {
  name: "Justin Friebel",
  socials: [
    { link: "https://twitter.com/freebly", icon: Twitter },
    { link: "https://www.instagram.com/freebies/", icon: Instagram },
    { link: "https://www.facebook.com/JustinFreebs", icon: Facebook },
    {
      link: "https://www.linkedin.com/in/justin-friebel-b199641b/",
      icon: Linkedin,
    },
    { link: "https://github.com/justinfriebel", icon: GitHub },
    {
      link:
        "https://mail.google.com/mail/u/0/?view=cm&fs=1&to=friebj99@gmail.com&tf=1",
      icon: Mail,
    },
    { link: "https://cash.app/$freebly", icon: DollarSign },
  ],
  nav: [
    { link: "/", text: "Home" },
    { link: "/about", text: "About" },
    { link: "/blog", text: "Blog" },
    { link: "/resume", text: "Resume" },
  ],
  displayLogo: true,
  displayPoweredBy: true,
  globalMediaQueries: {
    small: "(max-width: 599px)",
    medium: "(min-width: 600px) and (max-width: 1199px)",
    mediumUp: "(min-width: 600px)",
    large: "(min-width: 1200px)",
  },
};
