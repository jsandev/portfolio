import classNames from "classnames";

import { LANG, getI18N } from "../../i18n";

import { FiGlobe } from "react-icons/fi";

interface IProps {
  currentLocale: string;
  position?: "top" | "bottom";
  className?: string;
}
export const LanguageSelector: React.FC<IProps> = ({
  currentLocale,
  position = "bottom",
  className,
}) => {
  const i18n = getI18N({ currentLocale });

  return (
    <div
      className={classNames(
        "relative group flex justify-center items-center gap-[0.5rem] cursor-pointer p-[0.5rem] rounded-[0.25rem]",
        className
      )}
    >
      <span className="font-ubuntu text-[0.875rem] leading-[20px]">
        {currentLocale.toUpperCase()}
      </span>
      <FiGlobe size={20} className="text-primary" />

      <div
        className={classNames(
          "hidden w-[90px] absolute left-[50%] -translate-x-1/2 group-hover:flex flex-col bg-white py-[0.25rem] rounded-[8px] shadow-[6px_6px_8px_rgba(35,41,61,.08)]",
          position === "bottom" ? "top-[100%]" : "bottom-[120%]"
        )}
      >
        {Object.values(LANG).map((code, i) => {
          return (
            <a
              key={i}
              href={
                code === currentLocale || code === LANG.SPANISH
                  ? "/"
                  : `/${code}`
              }
              className="w-full text-[0.875rem] flex items-center justify-center py-[10px] hover:bg-slate-50"
            >
              {code === LANG.SPANISH ? i18n.LANGUAGES.ES : i18n.LANGUAGES.EN}
            </a>
          );
        })}
      </div>
    </div>
  );
};
