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
        x: theme === "light" ? 16 : -16, // Move right in light mode, left in dark mode
        duration: 0.5,
        rotation: theme === "light" ? 180 : 0,
        ease: "power2.out",
      });
    }
  }, [theme]);

  return (
    <Button
      onClick={toggleTheme}
      size="sm"
      className="px-5 scale-75 rounded-full bg-primary/50 hover:bg-primary/50  dark:bg-gray-800/40 h-9 hover:text-zinc-100  text-zinc-600 text-2xl overflow-hidden dark:text-white"
    >
      {theme === "dark" ? (
        <span className="darkBtn" ref={iconRef}>
          🌕
        </span>
      ) : (
        <span className="lightBtn" ref={iconRef}>
          ☀️
        </span>
      )}
    </Button>
  );
};

export default ThemeSwitcher;
