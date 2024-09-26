import { useToast } from "@/components/ui/use-toast";
import { brand } from "../../constants/constatns";
import {
  ChartBarBig,
  Home,
  LogOutIcon,
  UserCircleIcon,
  UserRoundCheck,
} from "lucide-react";
import { useState } from "react";
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useNavigate,
} from "react-router-dom";

const SidebarItem = ({ to, icon: Icon, label, expanded }) => {
  const location = useLocation();
  return (
    <NavLink
      to={to}
      className={`flex items-center w-full gap-20 py-2 text-muted-foreground   ${
        location.pathname == to
          ? "text-primary border-r-4 border-primary bg-primary/10"
          : ""
      } ${expanded ? "justify-between w-64 px-4" : "justify-center px-2"}`}
    >
      <Icon className="h-5 w-5 md:h-8 md:w-8" />
      {expanded && <span className="cursive--font">{label}</span>}
    </NavLink>
  );
};

const LogoutSidebarBtn = ({ to, expanded }) => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const handleLogout = () => {
    try {
      localStorage.removeItem("token");
      toast({
        variant: "default",
        title: "Successfully logged out",
        description: "You have been logged out successfully",
      });
      navigate("/auth");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <div
      to={to}
      onClick={handleLogout}
      className={`flex items-center  w-full gap-2   text-muted-foreground cursor-pointer  ${
        expanded ? "justify-between w-64 px-4" : "justify-center px-2"
      }`}
    >
      <LogOutIcon className="h-5 w-5 md:h-8 md:w-8" />
      {expanded && <span className="cursive--font">Logout</span>}
    </div>
  );
};

const Sidebar = ({ expanded, onExpand }) => (
  <aside
    className={`fixed inset-y-0 left-0 z-10 hidden flex-col border-r bg-background transition-width items-center  ${
      expanded ? "shadow-2xl shadow-black/30 backdrop-blur-md" : ""
    } sm:flex`}
    onMouseEnter={onExpand}
    onMouseLeave={onExpand}
  >
    <nav className="flex flex-col items-center gap-4 mt-4 ">
      <Link
        to={"/"}
        className="cursive--font inline-block md:text-3xl text-xl font-bold text-black/60 dark:text-slate-100 cursor-pointer border-b w-full p-2 text-center"
      >
        {!expanded ? brand[0] : brand}
      </Link>

      <SidebarItem
        to="/admin"
        icon={UserCircleIcon}
        label="Dashboard"
        expanded={expanded}
      />
      <SidebarItem
        to="/admin/category"
        icon={ChartBarBig}
        label="Category"
        expanded={expanded}
      />
      <SidebarItem
        to="/admin/community"
        icon={UserRoundCheck}
        label="Community"
        expanded={expanded}
      />
    </nav>
    <nav className="mt-auto flex flex-col items-center gap-4 py-2 border-t w-full ">
      <LogoutSidebarBtn expanded={expanded} />
      <SidebarItem to="/" icon={Home} label="Home" expanded={expanded} />
    </nav>
  </aside>
);

const MobileNavItem = ({ to, icon: Icon, label }) => {
  return (
    <NavLink
      to={to}
      className={() =>
        `flex items-center justify-center rounded-lg transition-colors hover:text-foreground text-muted-foreground
      }`
      }
    >
      <Icon className="h-5 w-5" />
      <span className="sr-only">{label}</span>
    </NavLink>
  );
};

const MobileNavbar = () => (
  <nav className="fixed px-4 left-0 top-0 z-10 flex w-full justify-between border-r bg-background sm:hidden items-center">
    <div className="flex items-center gap-4 px-2 py-2">
      <Link
        to={"/"}
        className="cursive--font inline-block text-2xl font-bold text-black/60 dark:text-slate-100 cursor-pointer  w-full text-center"
      >
        {brand}
      </Link>
      <MobileNavItem to="/admin" icon={UserCircleIcon} label="Dashboard" />
      <MobileNavItem to="/admin/category" icon={ChartBarBig} label="Category" />
    </div>
    <button className="text-muted-foreground">
      <LogOutIcon className="h-5 w-5" />
    </button>
  </nav>
);

const AdminLayout = () => {
  const [headerExpanded, setHeaderExpanded] = useState(false);
  const toggleHeaderExpansion = () => setHeaderExpanded((prev) => !prev);

  return (
    <div className="flex">
      <Sidebar expanded={headerExpanded} onExpand={toggleHeaderExpansion} />
      <MobileNavbar />
      <div className="flex-1 p-4 sm:px-10 md:py-8 sm:ml-14 mt-12 sm:mt-0">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
