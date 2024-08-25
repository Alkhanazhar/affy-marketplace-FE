/* eslint-disable react/prop-types */
import gsap from "gsap";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { brand } from "../../constants/constatns";
import { useEffect, useState } from "react";
import { AlignCenter, X } from "lucide-react";
import { useDispatch } from "react-redux";
import { toggleIsLogIn } from "../app/features/auth/authSlice";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { useToast } from "./ui/use-toast";

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
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  function handleSignup() {
    dispatch(toggleIsLogIn(false));
    navigate("/auth");
  }
  function handleLogin() {
    dispatch(toggleIsLogIn(true));
    navigate("/auth");
  }

  const toggleNav = () => {
    const nav = document.getElementById("mobileNav");
    gsap.to(nav, {
      x: isOpen ? "100%" : "0%",
      duration: 0.2,
    });
    setIsOpen(!isOpen);
  };
  const { toast } = useToast();
  const handleLogout = () => {
    try {
      localStorage.removeItem("token");
      toast({
        title: "Successfully logged in",
        description: "Logged out successfully",
      });

      navigate("/auth");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  useEffect(() => {
    const handleScroll = () => setBgColor(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    window.scrollTo(0, 0);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  return (
    <header
      className={`p-2 duration-150  top-0 fixed left-0 w-full z-[100]  ${
        bgColor ? " backdrop-blur-sm bg-white/40 shadow-md " : " bg-white"
      }`}
    >
      <section className="md:max-w-6xl  w-[90%] mx-auto flex justify-between items-center">
        <Link
          to={"/"}
          className="logo  inline-block md:text-[28px] text-[20px] text-gray-700 font-bold z-10"
        >
          {brand}
          <span className="text-primary">&nbsp;.</span>
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex">
          {navItems.map(({ title, href }) => (
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
          ))}
        </NavigationMenu>

        <div className="flex md:hidden text-primary">
          <AlignCenter onClick={toggleNav} />
        </div>
        <div className="md:flex gap-4 items-center hidden">
          {!token ? (
            <>
              <LinkButton
                styleType="secondary"
                text="Login"
                onClick={handleLogin}
              />
              <GradientButton text="Sign Up" onClick={handleSignup} />
            </>
          ) : (
            <GradientButton text="Log out" onClick={handleLogout} />
          )}
        </div>

        {/* Mobile Navigation */}
        <div
          id="mobileNav"
          className="mobile-nav bg-white  backdrop-blur-lg md:hidden h-screen z-[100] shadow-xl"
        >
          <div className="close-btn flex justify-end p-2">
            <X onClick={toggleNav} />
          </div>
          <ul className="flex flex-col p-4 ">
            {navItems.map(({ title, href }) => (
              <li key={title} className="hover:bg-gray-100 p-1 rounded-md ps-2">
                <NavLink
                  to={href}
                  className={({ isActive }) =>
                    isActive
                      ? "text-primary  font-[400] md:text-[16px] mix-blend-difference text-[16px]"
                      : "text-gray-600  hover:text-gray-500 mix-blend-difference  font-[500] md:text-[16px] text-[14px]"
                  }
                  aria-label={title}
                >
                  {title}
                </NavLink>
              </li>
            ))}
            <div className="md:hidden gap-2  mt-2 flex flex-col items-start">
              {!token ? (
                <>
                  <LinkButton
                    onClick={handleLogin}
                    styleType="secondary"
                    text="Login"
                  />
                  <GradientButton text="Sign Up" onClick={handleSignup} />
                </>
              ) : (
                <GradientButton text="Log out" onClick={handleLogout} />
              )}
            </div>
          </ul>
        </div>
      </section>
    </header>
  );
};

const LinkButton = ({ to, text, onClick }) => (
  <Button
    variant="secondary"
    className="text-gray-600 font-[500]"
    onClick={onClick}
    aria-label={text}
  >
    {to ? <Link to={to}>{text}</Link> : text}
  </Button>
);

export const GradientButton = ({ to, text, onClick }) => (
  <Button onClick={onClick} type="button" aria-label={text}>
    {to ? <Link to={to}>{text}</Link> : text}
  </Button>
);

export default Header;
