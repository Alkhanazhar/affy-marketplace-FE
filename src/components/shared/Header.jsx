import gsap from "gsap";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { brand } from "../../../constants/constatns";
import { useEffect, useState, useMemo } from "react";
import { useDispatch } from "react-redux";
import { toggleIsLogIn } from "@/app/features/auth/authSlice";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  NavigationMenu,
  NavigationMenuItem,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { useToast } from "../ui/use-toast";
import ThemeSwitcher from "@/pages/themeSwitcher";
import { jwtDecode } from "jwt-decode";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "../ui/sheet";
import { User } from "lucide-react";

const navItems = [
  { title: "Home", href: "/" },
  { title: "Community", href: "/community" },
];

const Header = () => {
  const token = localStorage.getItem("token");
  const [bgColor, setBgColor] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { toast } = useToast();

  // Decode the JWT token only once on mount
  const userInfo = useMemo(() => (token ? jwtDecode(token) : null), [token]);

  // GSAP animation
  useEffect(() => {
    gsap.from(".header a", {
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

  // Navigation handlers
  const handleAuthNavigation = (isLogin) => {
    dispatch(toggleIsLogIn(isLogin));
    navigate("/auth");
  };

  const handleNavigation = (path) => navigate(path);

  const handleLogout = () => {
    localStorage.removeItem("token");
    toast({
      variant: "default",
      title: "Successfully logged out",
      description: "You have been logged out successfully",
    });
    handleAuthNavigation(true);
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
          className="logo inline-block md:text-[28px] text-[20px] text-gray-700 dark:text-zinc-100 font-bold z-10"
        >
          {brand}
          <span className="text-primary">&nbsp;.</span>
        </Link>

        {/* Desktop Navigation */}
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
          <UserMenu
            userInfo={userInfo}
            handleLogout={handleLogout}
            handleNavigation={handleNavigation}
          />
        </div>

        {/* Auth and Profile Buttons */}
        <div className="md:flex gap-4 items-center hidden">
          <ThemeSwitcher />
          {!token ? (
            <>
              <LinkButton
                text="Login"
                onClick={() => handleAuthNavigation(true)}
              />
              <GradientButton
                text="Sign Up"
                onClick={() => handleAuthNavigation(false)}
              />
            </>
          ) : (
            <div className="flex items-center gap-4">
              <UserMenu
                userInfo={userInfo}
                handleLogout={handleLogout}
                handleNavigation={handleNavigation}
              />
            </div>
          )}
        </div>
      </section>
    </header>
  );
};

// Reusable User Menu Component
const UserMenu = ({ userInfo, handleLogout, handleNavigation }) => (
  <Sheet>
    <SheetTrigger>
      <Avatar className="-z-10">
        <AvatarImage src={userInfo?.avatar} />
        <AvatarFallback className="uppercase">
          {userInfo?.name[0]}
        </AvatarFallback>
      </Avatar>
    </SheetTrigger>
    <SheetContent>
      <SheetHeader>
        <SheetDescription>
          <div className="flex flex-col gap-1 mt-16">
            <User className="w-32 h-32 mx-auto text-black dark:text-white" />
            <div className="cursive--font p-6">
              <p>
                Name: <span className="font-semibold">{userInfo?.name}</span>
              </p>
              <p>
                City: <span className="font-semibold">{userInfo?.city}</span>
              </p>
              <p>
                Country:{" "}
                <span className="font-semibold">{userInfo?.country}</span>
              </p>
              <p>
                Email: <span className="font-semibold">{userInfo?.email}</span>
              </p>
              <p>
                Created At:{" "}
                <span className="font-semibold">
                  {userInfo?.createdAt &&
                    new Date(userInfo.createdAt).toLocaleString()}
                </span>
              </p>
            </div>
            {userInfo?.role === "Employee" && (
              <Button
                onClick={() => handleNavigation("/employee-page")}
                variant="outline"
              >
                Dashboard
              </Button>
            )}
            <Button
              variant="outline"
              onClick={() => handleNavigation("/profile")}
            >
              Profile
            </Button>
            {userInfo?.role === "Admin" && (
              <Button
                variant="outline"
                onClick={() => handleNavigation("/admin")}
              >
                Admin
              </Button>
            )}
            <Button onClick={handleLogout} variant="destructive" size="sm">
              Log out
            </Button>
          </div>
        </SheetDescription>
      </SheetHeader>
    </SheetContent>
  </Sheet>
);

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
