import gsap from "gsap";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { brand } from "../../../constants/constatns";
import { useEffect, useState, useMemo, useCallback } from "react";
import { AlignCenter, X } from "lucide-react";
import { useDispatch } from "react-redux";
import { toggleIsLogIn } from "@/app/features/auth/authSlice";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  NavigationMenu,
  NavigationMenuItem,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { useToast } from "../ui/use-toast";
import ThemeSwitcher from "@/pages/themeSwitcher";
import {jwtDecode} from "jwt-decode"; // Change from named import to default import

const navItems = [
  { title: "Home", href: "/" },
  { title: "Community", href: "/community" },
];

const Header = () => {
  const token = localStorage.getItem("token");
  const [bgColor, setBgColor] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { toast } = useToast();

  // Decode the JWT token only once on mount
  const userInfo = useMemo(() => {
    return token ? jwtDecode(token) : null;
  }, [token]);

  // GSAP timeline
  useEffect(() => {
    const tl = gsap.timeline();
    tl.from(".header a, .popover", {
      y: -10,
      duration: 0.6,
      opacity: 0,
      stagger: 0.2,
    });
  }, []);

  // Handle scroll effect for background color
  useEffect(() => {
    const handleScroll = () => setBgColor(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle mobile navigation
  const toggleNav = useCallback(() => {
    const nav = document.getElementById("mobileNav");
    gsap.to(nav, {
      x: isOpen ? "100%" : "0%",
      duration: 0.3,
    });
    setIsOpen((prev) => !prev);
  }, [isOpen]);

  // Navigation handlers
  const handleSignup = () => {
    dispatch(toggleIsLogIn(false));
    navigate("/auth");
  };

  const handleLogin = () => {
    dispatch(toggleIsLogIn(true));
    navigate("/auth");
  };

  const handleEmployeeJobs = () => {
    dispatch(toggleIsLogIn(true));
    navigate("/employee-page");
  };

  const handleAdmin = () => {
    navigate("/admin");
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    toast({
      variant: "default",
      title: "Successfully logged out",
      description: "You have been logged out successfully",
    });
    navigate("/auth");
  };

  const handleProfile = () => {
    navigate("/profile");
  };

  return (
    <header
      className={`py-2 duration-150 top-0 fixed cursive--font z-[5] left-0 w-full ${
        bgColor ? "backdrop-blur-sm bg-white/40 dark:bg-white/10 shadow-md" : ""
      }`}
    >
      <section className="md:max-w-6xl w-[90%] header mx-auto flex justify-between items-center z-50">
        <Link
          to="/"
          className="logo inline-block md:text-[28px] opacity-1 text-[20px] text-gray-700 dark:text-zinc-100 font-bold z-10"
        >
          {brand}
          <span className="text-primary">&nbsp;.</span>
        </Link>
        <NavigationMenu className="hidden md:flex gap-2">
          {navItems.map(({ title, href }) => {
            if (title === "Create-jobs" && !token) return null;
            return (
              <NavigationMenuItem key={title}>
                <NavLink
                  to={href}
                  className={({ isActive }) =>
                    `${navigationMenuTriggerStyle()} ${
                      isActive
                        ? "text-base font-medium opacity-1 text-primary transition-all duration-200"
                        : ""
                    }`
                  }
                  aria-label={title}
                >
                  {title}
                </NavLink>
              </NavigationMenuItem>
            );
          })}
        </NavigationMenu>

        {/* Mobile Navigation Toggle */}
        <div className="flex md:hidden text-primary">
          <AlignCenter onClick={toggleNav} />
        </div>

        {/* Auth and Profile Buttons */}
        <div className="md:flex gap-4 items-center hidden avatar">
          <div className="popover">
            <ThemeSwitcher />
          </div>

          {!token ? (
            <>
              <LinkButton text="Login" onClick={handleLogin} />
              <GradientButton text="Sign Up" onClick={handleSignup} />
            </>
          ) : (
            <div className="flex items-center gap-4 popover">
              <Popover>
                <PopoverTrigger>
                  <Avatar className="-z-10">
                    <AvatarImage src={userInfo?.avatar} />
                    <AvatarFallback className="uppercase">
                      {userInfo.name[0]}
                    </AvatarFallback>
                  </Avatar>
                </PopoverTrigger>
                <PopoverContent>
                  <div className="flex flex-col gap-1">
                    {userInfo.role === "Employee" && (
                      <Button
                        onClick={handleEmployeeJobs}
                        variant="outline"
                        size="sm"
                      >
                        Dashboard
                      </Button>
                    )}
                    <Button variant="outline" size="sm" onClick={handleProfile}>
                      Profile
                    </Button>
                    {userInfo.role === "Admin" && (
                      <Button variant="outline" size="sm" onClick={handleAdmin}>
                        Admin
                      </Button>
                    )}

                    <Button
                      onClick={handleLogout}
                      variant="destructive"
                      size="sm"
                    >
                      Log out
                    </Button>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          )}
        </div>

        {/* Mobile Navigation */}
        <div
          id="mobileNav"
          className="mobile-nav bg-white backdrop-blur-lg md:hidden h-screen shadow-xl"
        >
          <div className="close-btn flex justify-end p-2">
            <X onClick={toggleNav} />
          </div>
          <ul className="flex flex-col p-4">
            {navItems.map(({ title, href }) => {
              if (title === "Create-jobs" && !token) return null;
              return (
                <li
                  key={title}
                  onClick={toggleNav}
                  className="hover:bg-gray-100 p-1 rounded-md ps-2"
                >
                  <NavLink
                    to={href}
                    className={({ isActive }) =>
                      isActive
                        ? "text-primary font-[400] inline-block w-full opacity-1 md:text-[16px] text-[16px]"
                        : "text-gray-600 hover:text-gray-500 opacity-1 font-[500] md:text-[16px] inline-block w-full text-[14px]"
                    }
                    aria-label={title}
                  >
                    {title}
                  </NavLink>
                </li>
              );
            })}
            <div className="md:hidden gap-2 mt-2 flex flex-col items-start popover">
              {!token ? (
                <>
                  <LinkButton text="Login" onClick={handleLogin} />
                  <GradientButton text="Sign Up" onClick={handleSignup} />
                </>
              ) : (
                <div className="flex items-center gap-2">
                  <GradientButton text="Log out" onClick={handleLogout} />
                  <Avatar>
                    <AvatarImage
                      src={userInfo?.avatar || "default-avatar-url"}
                    />
                    <AvatarFallback>{userInfo.name[0]}</AvatarFallback>
                  </Avatar>
                </div>
              )}
            </div>
          </ul>
        </div>
      </section>
    </header>
  );
};

const LinkButton = ({ text, onClick }) => (
  <Button
    variant="secondary"
    className="dark:text-black"
    onClick={onClick}
    aria-label={text}
    size="sm"
  >
    {text}
  </Button>
);

export const GradientButton = ({ text, onClick }) => (
  <Button onClick={onClick} type="button" aria-label={text} size="sm">
    {text}
  </Button>
);

export default Header;
