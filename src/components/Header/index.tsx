import { useEffect, useRef, useState } from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";

import { Menu } from "./Menu";
import { Link } from "./Link";

export const Header: React.FC<{}> = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const [showShadow, setShowShadow] = useState(false);
  const [showHeader, setShowHeader] = useState(true);

  const oldScrollY = useRef(0);

  useEffect(() => {
    const f = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 80) setShowShadow(true);
      else setShowShadow(false);

      if (currentScrollY > oldScrollY.current) setShowHeader(false);
      else setShowHeader(true);

      oldScrollY.current = currentScrollY;
    };

    document.addEventListener("scroll", f);

    return () => document.removeEventListener("scroll", f);
  }, []);

  return (
    <header
      className="w-full min-h-[4rem] xs:min-h-[5rem] sticky bg-white z-[1] flex items-center"
      style={{
        boxShadow: showShadow ? "0 2px 6px 0 hsla(0,0%,76%,.25)" : undefined,
        transition: "all 250ms cubic-bezier(0.33, 1, 0.68, 1)",
        top: showHeader ? 0 : -80,
      }}
    >
      <div className="relative w-full h-full max-w-[76.5rem] mx-auto flex items-center justify-between px-[1.5rem] sm:px-[2rem] md:px-[3rem] lg:px-[4rem]">
        <a
          href=""
          className="font-ubuntu font-bold text-[1.25rem] text-primary"
        >
          JS.
        </a>
        <button
          className="lg:hidden appearance-none outline-none"
          onClick={() => setMenuVisible(true)}
        >
          <FiMenu size={24} />
        </button>
        <Menu menuVisible={menuVisible} setMenuVisible={setMenuVisible}>
          <Link title="Inicio" href="/" setMenuVisible={setMenuVisible} />
          <Link
            title="Servicios"
            href="#services"
            setMenuVisible={setMenuVisible}
          />
          <Link
            title="Mis trabajos"
            href="#works"
            setMenuVisible={setMenuVisible}
          />
          <Link
            title="Proyectos"
            href="#projects"
            setMenuVisible={setMenuVisible}
          />
          <Link
            title="Contáctame"
            href="#contact"
            setMenuVisible={setMenuVisible}
          />
        </Menu>
        <div className="hidden lg:flex items-center gap-[0.5rem]">
          <a
            href="https://github.com/jsandev"
            target="_blank"
            className="w-[2rem] h-[2rem] flex items-center justify-center"
          >
            <FaGithub size={24} className="text-primary" />
          </a>
          <a
            href="https://www.linkedin.com/in/jimmysandovalramirez/"
            target="_blank"
            className="w-[2rem] h-[2rem] flex items-center justify-center"
          >
            <FaLinkedin size={24} className="text-primary" />
          </a>
          <a
            href="https://twitter.com/iam_sam0610"
            target="_blank"
            className="w-[2rem] h-[2rem] flex items-center justify-center"
          >
            <FaTwitter size={24} className="text-primary" />
          </a>
        </div>
      </div>
    </header>
  );
};
