import { Button } from "@/components/ui/button";
import { useTheme } from "../components/themeProvider"; // Adjust this path based on your file structure
import { gsap } from "gsap";
import { useEffect, useRef } from "react";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const iconRef = useRef(null);

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  useEffect(() => {
    // Animate icon switch using GSAP
    if (iconRef.current) {
      gsap.to(iconRef.current, {
        x: theme === "light" ? 14 : -14, // Move right in light mode, left in dark mode
        duration: 0.5,
        rotation: theme === "light" ? 180 : 0,
        ease: "power2.out",
      });
    }
  }, [theme]);

  return (
    <div className="flex items-center">
      <div className="text-xs">{theme === "dark" ? <>Dark</> : <>Light</>}</div>

      <Button
        onClick={toggleTheme}
        size="sm"
        className=" px-4 scale-75 rounded-full bg-primary/50 hover:bg-primary/50  dark:bg-white/40 h-6 text-sm hover:text-zinc-100  text-zinc-600  flex gap-6 overflow-hidden dark:text-white"
      >
        {theme === "dark" ? (
          <span className="darkBtn text-base" ref={iconRef}>
            🌕
          </span>
        ) : (
          <span className="lightBtn text-base" ref={iconRef}>
            ☀️
          </span>
        )}
      </Button>
    </div>
  );
};

export default ThemeSwitcher;
