import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import CommunityPage from "./pages/CommunityPage";
import CommunitySlug from "./components/community/communitySlug/CommunitySlug";
import axios from "axios";
import Posts from "./pages/Posts";
import CreateJobs from "./components/jobs/CreateJobs";
import "./App.css";
import ProfilePage from "./pages/ProfilePage";
import MainLayout from "./layout/MainLayout";
import AuthLayout from "./layout/AuthLayout";
import AdminLayout from "./layout/AdminLayout";
import Dashboard from "./pages/Dashboard";
import CategoryPage from "./pages/Category";
import { ThemeProvider } from "../src/components/themeProvider";
import CommunityDashboard from "./pages/CommunityDashboard";
import { brand } from "../constants/constatns";
import { useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { v4 as uuidv4 } from "uuid";
import EmployeePage from "./pages/EmployeePage";
import EmployeeDahboard from "./pages/EmployeeDahboard";
import EmployeeCreatedJobs from "./pages/EmployeeCreatedJobs";
import AuthContextProvider from "./context/AuthContext";
import Applicants from "./pages/Applicants";
const App = () => {
  // base url / backend url
  axios.defaults.baseURL = "http://localhost:8714/";
  const [intro, setIntro] = useState(false);
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <AuthContextProvider>
          <MainLayout />
        </AuthContextProvider>
      ),
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/community",
          element: <CommunityPage />,
        },

        {
          path: "/community/:communityId",
          element: <CommunitySlug />,
        },
        {
          path: "/community/:communityId/posts",
          element: <Posts />,
        },
        {
          path: "/profile",
          element: <ProfilePage />,
        },
        {
          path: "/create-jobs",
          element: <CreateJobs />,
        },
        {
          path: "/how-we-work/clients",
          element: <CommunitySlug />,
        },
        {
          path: "/how-we-work/freelancer",
          element: <CommunitySlug />,
        },
      ],
    },
    {
      path: "/auth",
      element: (
        <AuthContextProvider>
          <AuthLayout />
        </AuthContextProvider>
      ),
      children: [
        {
          path: "/auth",
          element: <LoginPage />,
        },
      ],
    },
    {
      path: "/admin",
      element: (
        <AuthContextProvider>
          <AdminLayout />
        </AuthContextProvider>
      ),
      children: [
        {
          path: "/admin",
          element: <Dashboard />,
        },
        {
          path: "/admin/category",
          element: <CategoryPage />,
        },
        {
          path: "/admin/community",
          element: <CommunityDashboard />,
        },
      ],
    },
    {
      path: "/employee-page",
      element: (
        <AuthContextProvider>
          <EmployeePage />
        </AuthContextProvider>
      ),
      children: [
        {
          path: "/employee-page",
          element: (
            <AuthContextProvider>
              {" "}
              <EmployeeDahboard />
            </AuthContextProvider>
          ),
        },
        {
          path: "/employee-page/create-jobs",
          element: <CreateJobs />,
        },
        {
          path: "/employee-page/edit/:jobId",
          element: <CreateJobs />,
        },
        {
          path: "/employee-page/jobs",
          element: <EmployeeCreatedJobs />,
        },
        {
          path: "/employee-page/jobs/:jobId/applicants",
          element: <Applicants />,
        },
      ],
    },
  ]);
  // text
  const introText = "Welcome to " + brand;
  // const outroText = "Find and hire skilled photographers";
  const tl = gsap.timeline({
    onComplete: () => {
      setIntro(true);
    },
  });

  useGSAP(() => {
    tl.to(".show", {
      height: "100%",
      duration: 1,
      ease: "circ.inOut",
    })
      .to(".heading", {
        opacity: 1,
        y: -30,
        duration: 1,
      })
      .to("heading", {
        x: 10,
        ease: "circ.inOut",
        stagger: 0.2, // Staggering duration
        duration: 0.6, // Duration of opacity animation
      })
      .to(".heading span", {
        stagger: 0.1, // Staggering duration
        duration: 0.2, // Duration of opacity animation
        x: -5,
        opacity: 0,
      })
      // .to(".heading-2", {
      //   opacity: 1,
      //   y: -30,
      //   duration: 1,
      // })
      // .to("heading-2", {
      //   x: 10,
      //   ease: "circ.inOut",
      //   stagger: 0.2, // Staggering duration
      //   duration: 0.6, // Duration of opacity animation
      // })
      // .to(".heading-2 span", {
      //   stagger: 0.1, // Staggering duration
      //   duration: 0.2, // Duration of opacity animation
      //   x: -5,
      //   opacity: 0,
      // })
      .to(".show", {
        ease: "elastic.inOut",
        y: 1000,
        height: 0,
        duration: 1.6,
        // opacity: 0,
      });
  }, []);

  return (
    <div>
      <ThemeProvider defaultTheme={"light"} storageKey="vite-ui-theme">
        <div className="bg-grid dark:hidden"></div>
        <div className="bg-grid-dark dark:block hidden"></div>
        {!intro ? (
          <>
            <div className="h-screen bg-white dark:bg-[#060C1B] flex justify-center items-center overflow-hidden w-screen  relative ">
              <div className="line w-full show  bg-primary/90  flex justify-center items-center ">
                <h1 className="flex gap-2 sm:text-[3vw] font-medium heading opacity-0 block-head text-2xl  absolute top-[50%] left-[50%] -translate-x-[50%]  -translate-y-[50%] text-white dark:text-[#060C1B]">
                  {introText.split("").map((item) => {
                    return (
                      <span key={uuidv4()} className="-mx-[1px]">
                        {item}
                      </span>
                    );
                  })}
                </h1>
              </div>
            </div>
          </>
        ) : (
          <RouterProvider router={router} />
        )}
      </ThemeProvider>
    </div>
  );
};

export default App;
