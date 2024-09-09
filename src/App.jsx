import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import CommunityPage from "./pages/CommunityPage";
import CommunitySlug from "./components/community/communitySlug/CommunitySlug";
import axios from "axios";
import Jobs from "./components/jobs/Jobs";
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

const App = () => {
  axios.defaults.baseURL = "http://localhost:8714";
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
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
          path: "/jobs",
          element: <Jobs />,
        },
        {
          path: "/community/:communityName",
          element: <CommunitySlug />,
        },
        {
          path: "/community/:communityName/posts",
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
      element: <AuthLayout />,
      children: [
        {
          path: "/auth",
          element: <LoginPage />,
        },
      ],
    },
    {
      path: "/admin",
      element: <AdminLayout />,
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
  ]);

  return (
    <div>
      <ThemeProvider defaultTheme={"light"} storageKey="vite-ui-theme">
        <div className="bg-grid dark:hidden"></div>
        <div className="bg-grid-dark dark:block hidden"></div>
        <RouterProvider router={router} />
      </ThemeProvider>
    </div>
  );
};

export default App;
