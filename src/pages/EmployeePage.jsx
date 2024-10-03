import { LogoutSidebarBtn, SidebarItem } from "@/layout/AdminLayout";
import { brand } from "../../constants/constatns";
import { ChartBarBig, Home, UserCircleIcon } from "lucide-react";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const EmployeePage = () => {
  const [headerExpanded, setHeaderExpanded] = useState(false);
  const toggleHeaderExpansion = () => setHeaderExpanded((prev) => !prev);
  return (
    <div className="flex">
      <aside
        className={`fixed inset-y-0 left-0 z-10 hidden flex-col border-r bg-background transition-width items-center ${
          headerExpanded ? "shadow-2xl shadow-black/30 backdrop-blur-md" : ""
        } sm:flex`}
        onMouseEnter={toggleHeaderExpansion}
        onMouseLeave={toggleHeaderExpansion}
      >
        <nav className="flex flex-col items-center gap-4 mt-4 ">
          <Link
            to={"/"}
            className="cursive--font inline-block md:text-3xl text-xl font-bold text-black/60 dark:text-slate-100 cursor-pointer border-b w-full p-2 text-center"
          >
            {!headerExpanded ? brand[0] : brand}
          </Link>

          <SidebarItem
            to="/employee-page"
            icon={UserCircleIcon}
            label="Dashboard"
            expanded={headerExpanded}
          />
          <SidebarItem
            to="/employee-page/create-jobs"
            icon={ChartBarBig}
            label="Create jobs"
            expanded={headerExpanded}
          />
        </nav>
        <nav className="mt-auto flex flex-col items-center gap-4 py-2 border-t w-full ">
          <LogoutSidebarBtn expanded={headerExpanded} />
          <SidebarItem
            to="/"
            icon={Home}
            label="Home"
            expanded={headerExpanded}
          />
        </nav>
      </aside>
      <div className="flex-1 p-4 sm:px-10 md:py-8 sm:ml-14 mt-12 sm:mt-0">
        <Outlet />
      </div>
    </div>
  );
};

export default EmployeePage;
