import { createContext, useState } from "react";
import DataFetcher from "./components/DataFetcher";
import ToggleThemeButton from "./components/ToggleThemeButton";

interface ContextType {
  setTheme: React.Dispatch<React.SetStateAction<"light" | "dark">>;
  theme: string;
}
export const ThemeContext = createContext<ContextType>({
  theme: "light",
  setTheme: () => {},
});

function App() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const bgColor = theme === "light" ? "bg-slate-100" : "bg-slate-800";

  return (
    <>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <div className={bgColor}>
          <ToggleThemeButton />
          <DataFetcher />
        </div>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
