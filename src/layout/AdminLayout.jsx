import { ChartBarBig, Home, UserCircleIcon } from "lucide-react";
import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

const SidebarItem = ({ to, icon: Icon, label, expanded }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `flex items-center justify-between w-full gap-2  ${
        isActive ? "text-primary  rounded-lg " : "text-muted-foreground"
      }`
    }
  >
    <Icon className="h-5 w-5 md:h-9 md:w-9" />
    {expanded && <span>{label}</span>}
  </NavLink>
);

const Sidebar = ({ expanded, onExpand }) => (
  <aside
    className={`fixed inset-y-0 left-0 z-10 hidden flex-col border-r bg-background transition-width ${
      expanded ? "w-60 px-4" : "w-14"
    } sm:flex`}
    onMouseEnter={onExpand}
    onMouseLeave={onExpand}
  >
    <nav className="flex flex-col items-center gap-4 px-2 py-2 ">
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
    </nav>
  </aside>
);

const MobileNavItem = ({ to, icon: Icon, label }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `flex items-center justify-center rounded-lg transition-colors hover:text-foreground ${
        isActive ? "text-primary" : "text-muted-foreground"
      }`
    }
  >
    <Icon className="h-5 w-5" />
    <span className="sr-only">{label}</span>
  </NavLink>
);

const MobileNavbar = () => (
  <nav className="fixed p-2 left-0 top-0 z-10 flex w-full justify-between border-r bg-background sm:hidden items-center">
    <div className="flex items-center gap-4 px-2 py-4">
      <MobileNavItem to="/admin" icon={UserCircleIcon} label="Dashboard" />
      <MobileNavItem to="/admin/category" icon={ChartBarBig} label="Category" />
    </div>
    <MobileNavItem to="/" icon={Home} label="Home" />
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
