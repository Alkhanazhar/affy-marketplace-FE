import { Button } from "@/components/ui/button";
import { useTheme } from "../components/themeProvider"; // Adjust this path based on your file structure

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <Button
      onClick={toggleTheme}
      className="px-4 bg-gray-200 dark:bg-gray-800 rounded text- dark:text-white"
    >
      Switch to {theme === "light" ? "Dark" : "Light"} Mode
    </Button>
  );
};

export default ThemeSwitcher;
