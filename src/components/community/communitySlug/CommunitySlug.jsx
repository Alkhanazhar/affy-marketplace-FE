import { useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { Link, Tag, User, User2Icon } from "lucide-react";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { jwtDecode } from "jwt-decode"; // Corrected import

const CommunitySlug = () => {
  const { communityId } = useParams();
  const [community, setCommunity] = useState({});
  const [isMember, setIsMember] = useState(false);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const userInfo = token ? jwtDecode(token) : null;

  async function handleJoin() {
    if (token) {
      try {
        const res = await axios.post(
          "/api/web/community/user",
          {
            community_id: community?.id,
            user_id: userInfo?.id,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log(res);
        checkIsUserExist();
      } catch (error) {
        console.error("Error joining community:", error);
      }
    } else {
      navigate("/auth");
    }
  }

  async function getCommunityData() {
    try {
      const { data } = await axios.get(
        `/api/admin/community/display/${communityId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setCommunity(data?.meta);
    } catch (error) {
      console.error("Error fetching community data:", error);
    }
  }

  async function checkIsUserExist() {
    console.log("Checking if user exists");
    console.log(localStorage.getItem("token"));
    try {
      const response = await axios.post(
        "/api/web/community/is-user-exist",
        {
          community_id: communityId,
          user_id: userInfo.id,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      console.log(response);
      setIsMember(response.data.meta.exists); // Assuming exists is returned
    } catch (error) {
      console.error("Error checking user existence:", error);
    }
  }

  useEffect(() => {
    getCommunityData();
    checkIsUserExist();
  }, [communityId]);

  return (
    <div className="pt-16 pb-16 min-h-screen mx-4 md:mx-0 cursive--font">
      <div className="max-w-5xl lg:mx-auto flex md:gap-4 gap-4 md:flex-row flex-col-reverse py-8 md:mx-4">
        <div className="w-full rounded-xl md:flex-[1.6] border shadow-container p-6 bg-white dark:bg-slate-950">
          <h1 className="leading-none text-black/70 dark:text-zinc-100 md:text-3xl text-2xl font-bold">
            {community?.name}
          </h1>
          <div className="my-4 rounded-xl overflow-hidden">
            <img
              src="https://cdn.pixabay.com/photo/2014/07/08/10/47/team-386673_1280.jpg"
              alt=""
              loading="lazy"
              className="aspect-video object-cover"
            />
          </div>
          <div className="flex justify-between md:gap-2 lg:gap-4 gap-2 text-gray-600 dark:text-gray-100 my-4 text-xs md:text-sm">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              5.9k members
            </div>
            <div className="flex items-center gap-2">
              <Tag className="w-4 h-4" />
              Free
            </div>
            <div className="flex items-center gap-2">
              <User2Icon className="w-4 h-4" />
              <a href="#">By Cassandra Smith</a>
            </div>
          </div>
          <div className="text-base text-gray-600 dark:text-gray-400 leading-7">
            <p>{community?.description}</p>
          </div>
        </div>
        <div className="col-span-4 w-full rounded-xl flex-[0.8] shadow-container border overflow-hidden h-fit bg-white dark:bg-slate-950">
          <div>
            <img
              src="https://cdn.pixabay.com/photo/2014/07/08/10/47/team-386673_1280.jpg"
              alt=""
              className="w-full h-full object-cover aspect-video"
            />
          </div>
          {/* Content */}
          <div className="flex px-4 py-4 space-y-2 flex-col">
            <a
              href="#"
              className="hover:underline font-medium md:text-[20px] text-[16px]"
            >
              {community?.name}
            </a>
            <p className="md:text-[15px] font-[400] text-[12px] text-gray-500">
              Welcome to {community?.name}!
            </p>
            <div className="flex flex-col space-y-0">
              <a
                className="flex items-center md:text-[15px] font-[400] text-[12px] text-gray-600 hover:underline"
                href="#"
              >
                <Link className="w-5 h-5" />
                <div className="ml-2">Follow us on Instagram</div>
              </a>
              <a
                className="flex items-center md:text-[15px] font-[400] text-[12px] text-gray-600 hover:underline"
                href="#"
              >
                <Link className="w-5 h-5" />
                <div className="ml-2">Follow us on Facebook</div>
              </a>
              <a
                className="flex items-center md:text-[15px] font-[400] text-[12px] text-gray-600 hover:underline"
                href="#"
              >
                <Link className="w-5 h-5" />
                <div className="ml-2">Follow us on Twitter</div>
              </a>
            </div>
          </div>
          <div className="grid grid-cols-3 divide-x py-2 border-t border-b mx-4">
            {Array.from({ length: 3 }).map((_, index) => (
              <div
                key={index}
                className="p-2 flex items-center flex-col justify-center"
              >
                <h3 className="leading-none font-bold md:text-[15px] text-[12px]">
                  5.6 K
                </h3>
                <p className="text-gray-500 md:text-[15px] font-[400] text-[12px]">
                  members
                </p>
              </div>
            ))}
          </div>
          {/* Join button */}
          <div className="w-full p-4">
            {isMember ? (
              <Button className="w-full" asChild>
                <NavLink
                  to={`/community/${communityId}/posts`}
                  className="w-full inline-block h-full"
                >
                  Show
                </NavLink>
              </Button>
            ) : (
              <Button
                onClick={handleJoin}
                className="w-full py-4 rounded-md font-bold text-[16px] flex justify-center bg-primary text-white shadow-md shadow-black/30 leading-none"
              >
                Join
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunitySlug;
