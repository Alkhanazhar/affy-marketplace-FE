import { useToast } from "@/components/ui/use-toast";
import { ChartBarBig, Home, LogOutIcon, UserCircleIcon } from "lucide-react";
import { useState } from "react";
import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";

const SidebarItem = ({ to, icon: Icon, label, expanded }) => {
  const location = useLocation();
  return (
    <NavLink
      to={to}
      className={() =>
        `flex items-center justify-between w-full gap-2   text-muted-foreground ${
          location.pathname == to ? "text-primary rounded-2xl" : ""
        }`
      }
    >
      <Icon className="h-5 w-5 md:h-9 md:w-9" />
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
      className={
        "flex items-center justify-between w-full gap-2   text-muted-foreground cursor-pointer"
      }
    >
      <LogOutIcon className="h-5 w-5 md:h-9 md:w-9" />
      {expanded && <span className="cursive--font">Logout</span>}
    </div>
  );
};

const Sidebar = ({ expanded, onExpand }) => (
  <aside
    className={`fixed inset-y-0 left-0 z-10 hidden flex-col border-r bg-background transition-width p-2 ${
      expanded ? "w-60 px-4 shadow-2xl shadow-black/30" : "w-fit"
    } sm:flex`}
    onMouseEnter={onExpand}
    onMouseLeave={onExpand}
  >
    <nav className="flex flex-col items-center gap-4 mt-4 ">
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
    </nav>
    <nav className="mt-auto flex flex-col items-center gap-4 mb-4">
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
    <div className="flex items-center gap-4 px-2 py-4">
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
      <div className="flex-1 p-4 md:px-8 md:py-4 md:ml-14 mt-12 md:mt-0">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
