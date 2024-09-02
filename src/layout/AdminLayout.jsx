import { useToast } from "@/components/ui/use-toast";
import { ChartBarBig, Home, LogOutIcon, UserCircleIcon } from "lucide-react";
import { useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";

// Sidebar Item component for both Desktop and Mobile
const SidebarItem = ({ to, icon: Icon, label, expanded, mobile }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `flex items-center ${
        mobile ? "justify-center" : "justify-between w-full"
      } gap-2 ${isActive ? "text-primary" : "text-muted-foreground"} ${
        expanded && "rounded-lg"
      }`
    }
  >
    <Icon className="h-5 w-5 md:h-9 md:w-9" />
    {expanded && <span>{label}</span>}
    {mobile && <span className="sr-only">{label}</span>}
  </NavLink>
);

// Sidebar component for Desktop
const Sidebar = ({ expanded, onExpand }) => {
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
  <aside
    className={`fixed inset-y-0 left-0 z-10 hidden sm:flex flex-col border-r bg-background transition-width ${
      expanded ? "w-60 px-4 shadow-lg" : "w-14"
    }`}
    onMouseEnter={onExpand}
    onMouseLeave={onExpand}
  >
    <nav className="flex flex-col items-center gap-4 px-2 py-2">
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
    <nav className="mt-auto flex flex-col items-center gap-4 px-2 py-4">
      <SidebarItem to="/" icon={Home} label="Home" expanded={expanded} />
      <div
        className="flex items-center justify-between w-full gap-2            text-muted-foreground cursor-pointer"
        onClick={handleLogout}
      >
        <LogOutIcon className="h-5 w-5 md:h-9 md:w-9" />
        {expanded && <span>Log Out</span>}
      </div>
    </nav>
  </aside>;
};
// Mobile Navbar component
const MobileNavbar = () => (
  <nav className="fixed left-0 top-0 z-10 flex w-full justify-between bg-background p-2 sm:hidden">
    <div className="flex items-center gap-4">
      <SidebarItem to="/admin" icon={UserCircleIcon} label="Dashboard" mobile />
      <SidebarItem
        to="/admin/category"
        icon={ChartBarBig}
        label="Category"
        mobile
      />
    </div>
    <SidebarItem to="/" icon={Home} label="Home" mobile />
  </nav>
);

const AdminLayout = () => {
  const [sidebarExpanded, setSidebarExpanded] = useState(false);

  return (
    <div className="flex">
      <Sidebar
        expanded={sidebarExpanded}
        onExpand={() => setSidebarExpanded(!sidebarExpanded)}
      />
      <MobileNavbar />
      <main className="flex-1 p-4 md:px-8 md:py-4 md:ml-14 mt-12 md:mt-0">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
