import { LogoutSidebarBtn, SidebarItem } from "@/layout/AdminLayout";
import { brand } from "../../constants/constatns";
import {
  ChartBarBig,
  GraduationCap,
  LogOut,
  UserCircleIcon,
} from "lucide-react";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { Button } from "@/components/ui/button";

const EmployeePage = () => {
  const [headerExpanded, setHeaderExpanded] = useState(false);
  const toggleHeaderExpansion = () => setHeaderExpanded((prev) => !prev);
  return (
    <div className="flex">
      <div className="h-64 border top-0 left-0 w-[100-vw] absolute"></div>
      <aside
        className={`fixed inset-y-0 left-0 z-10 hidden flex-col border-r bg-background transition-width items-center ${
          headerExpanded ? "shadow-2xl shadow-black/30 backdrop-blur-md " : ""
        } sm:flex`}
        onMouseEnter={toggleHeaderExpansion}
        onMouseLeave={toggleHeaderExpansion}
      >
        <nav className="flex flex-col items-center gap-4 mt-4">
          <Link
            to={"/"}
            className="cursive--font inline-block md:text-3xl text-xl font-bold text-black/60 dark:text-slate-100 cursor-pointer border-b w-full h-12 text-center"
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
          <SidebarItem
            to="/employee-page/jobs"
            icon={GraduationCap}
            label="Created jobs"
            expanded={headerExpanded}
          />
        </nav>
        <nav className="mt-auto flex-col gap-4 py-4 border-t w-full ">
          <LogoutSidebarBtn expanded={headerExpanded} />
        </nav>
      </aside>
      <div className="flex-1 ">
        <div className="w-100  h-16 md:ps-24 px-4 flex items-center justify-between bg-white border-b">
          {" "}
          <span className="text-2xl font-bold text-primary cursor-pointer">
            {brand}
          </span>
          <Button size="sm">
            Logout <LogOut className="ml-2 w-4 h-4"/>
          </Button>
        </div>
        <div className="px-4 sm:px-10 md:py-8 sm:ml-14 sm:mt-12 md:mt-0">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default EmployeePage;
