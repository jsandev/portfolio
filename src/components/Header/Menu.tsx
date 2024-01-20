import classNames from "classnames";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FiX } from "react-icons/fi";

interface IProps {
  children: React.ReactNode;
  menuVisible: boolean;
  setMenuVisible: (v: boolean) => void;
}
export const Menu: React.FC<IProps> = ({
  children,
  menuVisible,
  setMenuVisible,
}) => {
  const onClose = () => setMenuVisible(false);

  return (
    <nav
      className={classNames(
        "lg:static fixed top-0 right-0 z-10 bg-[rgba(0,0,0,0.3)] lg:bg-transparent w-full lg:w-auto h-full flex justify-end transition-[opacity_visibility] duration-[150ms] ease-in lg:transition-none lg:opacity-100 lg:visible",
        menuVisible ? "opacity-100 visible" : "opacity-0 invisible"
      )}
      onClick={onClose}
    >
      <ul
        className={classNames(
          "flex flex-col lg:flex-row w-full max-w-[30rem] lg:max-w-auto bg-white justify-between items-center gap-[1.25rem] pb-[1.5rem] px-[1.5rem] lg:p-0 transition-[transform] duration-[150ms] ease-in lg:transition-none lg:translate-x-[0px]",
          menuVisible ? "translate-x-[0px]" : "translate-x-[30rem]"
        )}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-full min-h-[4rem] xs:min-h-[5rem] flex items-center justify-between lg:hidden">
          <a
            href="/"
            className="font-ubuntu font-bold text-[1.25rem] text-primary"
          >
            JS.
          </a>
          <button
            className="appearance-none lg:hidden w-[2rem] h-[2rem] grid place-content-center"
            onClick={onClose}
          >
            <FiX size={24} />
          </button>
        </div>
        <div className="w-full h-full flex flex-col lg:flex-row items-center justify-center gap-[2.5rem] lg:gap-[1.25rem]">
          {children}
        </div>
        <div className="flex items-center gap-[1rem] lg:hidden">
          <a
            href="https://github.com/jsandev"
            target="_blank"
            className="w-[2rem] h-[2rem] flex items-center justify-center"
          >
            <FaGithub size={32} className="text-primary" />
          </a>
          <a
            href="https://www.linkedin.com/in/jimmysandovalramirez/"
            target="_blank"
            className="w-[2rem] h-[2rem] flex items-center justify-center"
          >
            <FaLinkedin size={32} className="text-primary" />
          </a>
          <a
            href="https://twitter.com/iam_sam0610"
            target="_blank"
            className="w-[2rem] h-[2rem] flex items-center justify-center"
          >
            <FaTwitter size={32} className="text-primary" />
          </a>
        </div>
      </ul>
    </nav>
  );
};
