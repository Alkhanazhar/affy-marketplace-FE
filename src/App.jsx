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

const App = () => {
  axios.defaults.baseURL = "http://localhost:8714";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />, // Main layout for the landing page and other main routes
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
          path: "/community/:communityName/posts/:postId",
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
      element: <AuthLayout />, // Auth layout for authentication routes
      children: [
        {
          path: "/auth",
          element: <LoginPage />,
        },
      ],
    },
  ]);

  return (
    <div>
      <div className="bg-grid"></div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
