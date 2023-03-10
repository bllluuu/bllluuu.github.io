import "./styles/header.css";
import Logo from "../assets/bluff-logo.svg";
import Hamburger from "../assets/hamburger.svg";
import { ChangeEventHandler, useEffect, useState } from "react";
import ScrollToSectionButton from './ScrollToSectionButton';
import ScrollToTopButton from "./ScrollToTopButton";

const Header: React.FC = () => {
  const [mobileNav, setmobileNav] = useState(false);

  const btnChecked: ChangeEventHandler<HTMLInputElement> = (e) => {
    e.target.checked ? setmobileNav(true) : setmobileNav(false);
  };

  const links = [
    { label: 'Home', url: '/' },
    { label: 'Projects', url: '/' },
    { label: 'Contact', url: '/' },
  ];

  useEffect(() => {
    if (mobileNav) {
      document.getElementsByTagName("body")[0].classList.add("bg-nav");
    } else {
      document.getElementsByTagName("body")[0].classList.remove("bg-nav");
    }
  }, [mobileNav]);

  return (
    <header>
      <img src={Logo} alt="Logo" />
      {/* <ScrollToSectionButton targetId="top"/> */}
      {/* <ScrollToTopButton/> */}
      <div className = "hamburger" ><img src={Hamburger} alt="Hamburger" /></div>
      <section id="top"/>
      <nav>
        {links.map((link) => (
          <a key={link.url} href={link.url}>
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Header;
