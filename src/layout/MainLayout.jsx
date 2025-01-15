import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      <Header />
      <div className="mt-[58px]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
