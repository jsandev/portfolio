interface IProps {
  title: string;
  href: string;
  setMenuVisible: React.Dispatch<React.SetStateAction<boolean>>;
}
export const Link: React.FC<IProps> = ({ title, href, setMenuVisible }) => {
  return (
    <a
      href={href}
      className="link relative group font-ubuntu-condensed text-[2rem] lg:text-[1.125rem] text-primary whitespace-nowrap"
      onClick={() => setMenuVisible(false)}
    >
      {title}
      <span className="absolute -bottom-[0.75rem] lg:-bottom-[0.3125rem] left-[50%] -translate-x-1/2 w-[0.375rem] h-[0.375rem] lg:w-[0.25rem] lg:h-[0.25rem] rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-[opacity] duration-[150ms] ease-in"></span>
    </a>
  );
};
