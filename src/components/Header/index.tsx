import { useState } from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";

import { Menu } from "./Menu";

interface IProps {
  children: React.ReactNode;
}
export const Header: React.FC<IProps> = ({ children }) => {
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <header className="w-full min-h-[5rem] flex items-center">
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
          {children}
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
