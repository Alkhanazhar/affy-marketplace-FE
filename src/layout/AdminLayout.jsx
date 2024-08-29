import { ChartBarBig, Home, UserCircleIcon } from "lucide-react";
import { NavLink, Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div className="flex">
      <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
        <nav className="flex flex-col items-center gap-4 px-2 sm:py-4">
          <NavLink
            to="/admin"
            className={({ isActive }) =>
              `flex h-9 w-9 items-center justify-center rounded-lg transition-colors hover:text-foreground md:h-8 md:w-8 ${
                isActive ? "text-foreground" : "text-muted-foreground"
              }`
            }
          >
            <UserCircleIcon className="h-5 w-5 md:h-12 md:w-12" />
            <span className="sr-only">Dashboard</span>
          </NavLink>

          <NavLink
            to="/admin/category"
            className={({ isActive }) =>
              `flex h-12 w-12 items-center justify-center rounded-lg transition-colors hover:text-foreground md:h-8 md:w-8 ${
                isActive
                  ? "bg-accent text-accent-foreground"
                  : "text-muted-foreground"
              }`
            }
          >
            <ChartBarBig className="h-5 w-5 md:h-12 md:w-12" />
          </NavLink>
        </nav>

        <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex h-9 w-9 items-center justify-center rounded-lg transition-colors hover:text-foreground md:h-8 md:w-8 ${
                isActive ? "text-foreground" : "text-muted-foreground"
              }`
            }
          >
            <Home className="h-5 w-5 md:h-12 md:w-12" />
            <span className="sr-only">Settings</span>
          </NavLink>
        </nav>
      </aside>
      <nav className="fixed p-2 left-0 top-0 z-10 flex w-full   justify-between border-r bg-background sm:hidden items-center">
        <nav className="flex  items-center gap-4 px-2 sm:py-4">
          <NavLink
            to="/admin"
            className={({ isActive }) =>
              `flex h-9 w-9 items-center justify-center rounded-lg transition-colors hover:text-foreground md:h-8 md:w-8 ${
                isActive ? "text-foreground" : "text-muted-foreground"
              }`
            }
          >
            <UserCircleIcon className="h-5 w-5" />
            <span className="sr-only">Dashboard</span>
          </NavLink>

          <NavLink
            to="/admin/category"
            className={({ isActive }) =>
              `flex h-9 w-9 items-center justify-center rounded-lg transition-colors hover:text-foreground md:h-8 md:w-8 ${
                isActive
                  ? "bg-accent text-accent-foreground"
                  : "text-muted-foreground"
              }`
            }
          >
            <ChartBarBig className="h-5 w-5" />
          </NavLink>
        </nav>

        <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex h-9 w-9 items-center justify-center rounded-lg transition-colors hover:text-foreground md:h-8 md:w-8 ${
                isActive ? "text-foreground" : "text-muted-foreground"
              }`
            }
          >
            <Home className="h-5 w-5" />
            <span className="sr-only">Settings</span>
          </NavLink>
        </nav>
      </nav>
      <div className="md:px-8 md:py-4 md:ml-14 w-full p-4 mt-12 md:mt-0 cursive--font">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
