import gsap from "gsap";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { brand } from "../../constants/constatns";
import { useEffect, useState } from "react";
import { AlignCenter, X } from "lucide-react";
import { useDispatch } from "react-redux";
import { toggleIsLogIn } from "../app/features/auth/authSlice";
import { Button } from "@/components/ui/button";
import { useToast } from "./ui/use-toast";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import {
  NavigationMenu,
  NavigationMenuItem,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const navItems = [
  { title: "Home", href: "/" },
  { title: "Community", href: "/community" },
  { title: "Jobs", href: "/jobs" },
  { title: "Create-jobs", href: "/create-jobs" },
];

const Header = () => {
  const token = localStorage.getItem("token");
  const location = useLocation();
  const [bgColor, setBgColor] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { toast } = useToast();

  useEffect(() => {
    const handleScroll = () => setBgColor(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    window.scrollTo(0, 0);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  const toggleNav = () => {
    const nav = document.getElementById("mobileNav");
    gsap.to(nav, {
      x: isOpen ? "100%" : "0%",
      duration: 0.2,
    });
    setIsOpen(!isOpen);
  };

  const handleSignup = () => {
    dispatch(toggleIsLogIn(false));
    navigate("/auth");
  };

  const handleLogin = () => {
    dispatch(toggleIsLogIn(true));
    navigate("/auth");
  };

  const handleLogout = () => {
    try {
      localStorage.removeItem("token");
      toast({
        title: "Successfully logged out",
        description: "You have been logged out successfully",
      });
      navigate("/auth");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  const handleProfile = () => {
    navigate("/profile");
  };

  return (
    <header
      className={`py-2 duration-150 top-0 fixed left-0 w-full z-[100] ${
        bgColor ? "backdrop-blur-sm bg-white/40 shadow-md" : "bg-white"
      }`}
    >
      <section className="md:max-w-6xl w-[90%] mx-auto flex justify-between items-center">
        <Link
          to="/"
          className="logo inline-block md:text-[28px] text-[20px] text-gray-700 font-bold z-10"
        >
          {brand}
          <span className="text-primary">&nbsp;.</span>
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex">
          {navItems.map(({ title, href }) => {
            if (title === "Create-jobs" && !token) {
              return null;
            }
            return (
              <NavigationMenuItem key={title}>
                <NavLink
                  to={href}
                  className={({ isActive }) =>
                    `${navigationMenuTriggerStyle()} ${
                      isActive
                        ? "text-base font-medium text-primary transition-all duration-200"
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
        <div className="md:flex gap-4 items-center hidden">
          {!token ? (
            <>
              <LinkButton text="Login" onClick={handleLogin} />
              <GradientButton text="Sign Up" onClick={handleSignup} />
            </>
          ) : (
            <div className="flex items-center gap-4">
              <GradientButton text="Log out" onClick={handleLogout} />
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Avatar>
                    <AvatarImage src="https://www.upwork.com/profile-portraits/c1rR2GIyXNyaR_mmAFSWCei61b6sFHYbqQDJcRGijFpwyjY3RDDa2IsGe5B9vaLfKP" />
                    <AvatarFallback>AK</AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>User Profile</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleProfile}>
                    Profile
                  </DropdownMenuItem>
                  <DropdownMenuItem>Billing</DropdownMenuItem>
                  <DropdownMenuItem>Team</DropdownMenuItem>
                  <DropdownMenuItem>Subscription</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
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
              if (title === "Create-jobs" && !token) {
                return null;
              }
              return (
                <li
                  key={title}
                  className="hover:bg-gray-100 p-1 rounded-md ps-2"
                >
                  <NavLink
                    to={href}
                    className={({ isActive }) =>
                      isActive
                        ? "text-primary font-[400] md:text-[16px] text-[16px]"
                        : "text-gray-600 hover:text-gray-500 font-[500] md:text-[16px] text-[14px]"
                    }
                    aria-label={title}
                  >
                    {title}
                  </NavLink>
                </li>
              );
            })}
            <div className="md:hidden gap-2 mt-2 flex flex-col items-start">
              {!token ? (
                <>
                  <LinkButton text="Login" onClick={handleLogin} />
                  <GradientButton text="Sign Up" onClick={handleSignup} />
                </>
              ) : (
                <div className="flex items-center gap-2">
                  <GradientButton text="Log out" onClick={handleLogout} />
                  <Avatar>
                    <AvatarImage src="https://www.upwork.com/profile-portraits/c1rR2GIyXNyaR_mmAFSWCei61b6sFHYbqQDJcRGijFpwyjY3RDDa2IsGe5B9vaLfKP" />
                    <AvatarFallback>AK</AvatarFallback>
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
    className="text-gray-600 font-[500]"
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
