import { Moon, Sun } from "lucide-react";
import { useTheme } from "../components/themeProvider"; // Adjust this path based on your file structure
import { Switch } from "@/components/ui/switch";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  console.log(theme);

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <div className="flex items-center">
      <div className="text-xs mr-2">
        <div className={`${theme === "dark" ? "text-secondary" : ""}`}>
          <Moon className="w-4 h-4" />
        </div>
      </div>
      <Switch
        id="dark-mode"
        checked={theme === "light"}
        onCheckedChange={toggleTheme}
      />
      <div className="text-xs ml-2">
        <div className={`${theme === "dark" ? "" : "text-primary"}`}>
          <Sun className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
};

export default ThemeSwitcher;
