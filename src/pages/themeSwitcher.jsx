import { useTheme } from "../components/themeProvider"; // Adjust this path based on your file structure
import { Switch } from "@/components/ui/switch";

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
    <div className="flex items-center">
      <div className="text-xs mr-4">{theme === "dark" ? <>Dark </> : <>Light </>}</div>
      <Switch id="dark-mode" onCheckedChange={toggleTheme} />
    </div>
  );
};

export default ThemeSwitcher;
