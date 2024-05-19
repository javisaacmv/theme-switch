import { IconSunHigh } from "@tabler/icons-react";
import { useContext } from "react";
import { ThemeContext } from "../App";

const ToggleThemeButton = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const bgButtonColor = theme === "light" ? "bg-white" : "bg-slate-800";
  const hoverBgButtonColor =
    theme === "light" ? "hover:bg-slate-100" : "hover:bg-slate-600";
  const borderButtonColor =
    theme === "light" ? "border-slate-200" : "border-slate-700";
  const iconButtonColor = theme === "light" ? "black" : "white";

  const handleToggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button
      className={`w-8 h-8 rounded-full ${bgButtonColor} border ${borderButtonColor} shadow-md m-5 ${hoverBgButtonColor} flex justify-center items-center absolute top-0 left-0`}
      onClick={handleToggleTheme}
      type="button"
    >
      <IconSunHigh size={20} color={iconButtonColor} />
    </button>
  );
};

export default ToggleThemeButton;
