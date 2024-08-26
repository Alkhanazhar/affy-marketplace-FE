import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import CommunityPage from "./pages/CommunityPage";
import CommunitySlug from "./components/community/communitySlug/CommunitySlug";
import axios from "axios";
import LocomotiveScroll from "locomotive-scroll";
import Jobs from "./components/jobs/Jobs";
import Posts from "./pages/Posts";
import CreateJobs from "./components/jobs/CreateJobs";
import "./App.css";
import ProfilePage from "./pages/ProfilePage";

const App = () => {
  axios.defaults.baseURL = "http://localhost:8714";

  const location = useLocation();
  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: document.querySelector("[data-scroll-container]"),
      smooth: true,
    });

    return () => {
      if (scroll) {
        scroll.destroy();
      }
    };
  }, [location]);

  return (
    <div data-scroll-container>
      <div className="bg-grid"></div>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route path="/auth" element={<LoginPage />} />
        <Route element={<CommunityPage />} path="/community" />
        <Route element={<Jobs />} path="/jobs" />
        <Route element={<CommunitySlug />} path="/community/:communityName" />
        <Route element={<Posts />} path="/community/:communityName/posts" />
        <Route
          element={<Posts />}
          path="/community/:communityName/posts/:postId"
        />
        <Route element={<ProfilePage />} path="/profile" />
        <Route element={<CreateJobs />} path="/create-jobs" />
        <Route element={<CommunitySlug />} path="/how-we-work/clients" />
        <Route element={<CommunitySlug />} path="/how-we-work/freelancer" />
      </Routes>
    </div>
  );
};

export default App;
