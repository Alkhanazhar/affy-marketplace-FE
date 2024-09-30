import { useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { Link, Tag, User, User2Icon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import axios from "axios";

const CommunitySlug = () => {
  const { communityName } = useParams();
  const [data, setData] = useState([]);
  const { toast } = useToast();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  // const user = { isMember: true };
  function handleJoin() {
    token
      ? toast({
          title: "Community joined",
          description: "you r now member of" + communityName,
        })
      : navigate("/auth");
  }

  async function getCommunitySlug() {
    const { data } = await axios.get(
      "api/admin/community/display/" + communityName,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    setData(() => data?.meta);
    console.log(data?.meta);
  }
  useEffect(() => {
    getCommunitySlug();
    // setData(
    //   photographyCommunities.filter((community) => {
    //     return community.slug == communityName;
    //   })
    // );
  }, [communityName]);

  const user = { isMember: true };
  return (
    <>
      <div className="pt-16 pb-16  min-h-screen mx-4 md:mx-0 cursive--font ">
        <div className="max-w-5xl lg:mx-auto flex md:gap-4 gap-4 md:flex-row flex-col-reverse py-8 md:mx-4 ">
          <div className=" w-full rounded-xl md:flex-[1.6] border shadow-container p-6 bg-white dark:bg-slate-950">
            <h1 className="leading-none text-black/70  dark:text-zinc-100 md:text-3xl text-2xl font-[700]">
              {data?.name}
            </h1>
            <div className="my-4 rounded-xl overflow-hidden">
              <img
                src={
                  "https://cdn.pixabay.com/photo/2014/07/08/10/47/team-386673_1280.jpg"
                }
                alt=""
                loading="lazy"
                className="aspect-video object-cover"
              />
            </div>
            <div className="flex justify-between md:gap-2 lg:gap-4 gap-2 text-gray-600 dark:text-gray-100  my-4 text-xs md:text-sm ">
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
                <a href="">By Cassandra Smith</a>
              </div>
            </div>
            <div className="text-base text-gray-600 dark:text-gray-400  leading-7">
              <p>{data?.description}</p>
            </div>
          </div>
          <div className="col-span-4 w-full rounded-xl flex-[.8] shadow-container border overflow-hidden h-fit bg-white dark:dark:bg-slate-950">
            <div className="">
              <img
                src={
                  "https://cdn.pixabay.com/photo/2014/07/08/10/47/team-386673_1280.jpg"
                }
                alt=""
                className="w-full h-full object-cover aspect-video"
              />
            </div>
            {/* content */}
            <div className="flex px-4 py-4 space-y-2 flex-col">
              <a
                href="#"
                className="hover:underline font-[500] md:text-[20px]  text-[16px] "
              >
                {data?.name}
              </a>
              <p className="md:text-[15px] font-[400] text-[12px] text-gray-500">
                Welcome to {data?.name}!
              </p>
              <div className="flex flex-col space-y-0">
                <a
                  className="flex items-center md:text-[15px] font-[400] text-[12px] text-gray-600 hover:underline"
                  href="#"
                >
                  <Link className="w-5 h-5" />
                  <div className="ml-2">Follow us on instagram</div>
                </a>
                <a
                  className="flex items-center md:text-[15px] font-[400] text-[12px] text-gray-600 hover:underline"
                  href="#"
                >
                  <Link className="w-5 h-5" />
                  <div className="ml-2">Follow us on facebook</div>
                </a>
                <a
                  className="flex items-center md:text-[15px] font-[400] text-[12px] text-gray-600 hover:underline"
                  href="#"
                >
                  <Link className="w-5 h-5" />
                  <div className="ml-2">Follow us on twitter</div>
                </a>
              </div>
            </div>
            <div className="grid grid-cols-3 divide-x py-2 border-t border-b mx-4">
              <div className="p-2 flex items-center flex-col justify-center">
                <h3 className="leading-none font-bold md:text-[15px] text-[12px]">
                  5.6 K
                </h3>
                <p className="text-gray-500 md:text-[15px] font-[400] text-[12px]">
                  members
                </p>
              </div>
              <div className="p-2 flex items-center flex-col justify-center">
                <h3 className="leading-none font-bold md:text-[15px] text-[12px]">
                  5.6 K
                </h3>
                <p className="text-gray-500 md:text-[15px] font-[400] text-[12px]">
                  members
                </p>
              </div>
              <div className="p-2 flex items-center flex-col justify-center">
                <h3 className="leading-none font-bold md:text-[15px] text-[12px]">
                  5.6 K
                </h3>
                <p className="text-gray-500 md:text-[15px] font-[400] text-[12px]">
                  members
                </p>
              </div>
            </div>
            {/* join button */}
            <div className="w-full p-4">
              {user.isMember ? (
                <Button className="w-full">
                  <NavLink
                    to={"/community/" + communityName + "/posts"}
                    className="w-full "
                  >
                    Show
                  </NavLink>
                </Button>
              ) : (
                <Button
                  onClick={handleJoin}
                  // to={"/community/" + communityName + "/posts"}
                  className="w-full  py-4 rounded-md font-bold text-[16px]  flex justify-center  bg-primary text-white shadow-md shadow-black/30  leading-none"
                >
                  Join
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CommunitySlug;
