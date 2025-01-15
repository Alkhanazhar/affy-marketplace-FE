import {
  ArrowLeft,
  BadgeJapaneseYenIcon,
  MailPlus,
  Mails,
  UserRoundSearch,
} from "lucide-react";
import Post from "@/components/community/Post";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useNavigate, useParams } from "react-router-dom";

import { useEffect, useMemo, useState } from "react";

import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import { toast } from "@/components/ui/use-toast";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import PostForm from "@/components/shared/CreatePostForm";
import { useGetCommunity } from "@/hooks/useGetCommunity";
import CreateJobs from "@/components/jobs/CreateJobs";
import Jobs from "@/components/jobs/Jobs";
import BackButton from "@/components/shared/BackButton";

const Posts = () => {
  const { communityId } = useParams();
  const [isPostModal, setIsPostModal] = useState(false);
  const [singlePost, setSinglePost] = useState(null);
  const [postArray, setPostArray] = useState([]);
  const [comments, setComments] = useState(null);
  const token = localStorage.getItem("token");
  const [selectedTab, setSelectedTab] = useState("posts");

  // const filteredJobs = useJobFilter(jobsData, searchTitle, searchLocation);

  const userData = token && jwtDecode(token);

  async function fetchComments(item) {
    try {
      const res = await axios.get("/api/web/post/comment/" + item.id, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });
      console.log(res?.data?.meta, "json");
      setComments(res.data.meta);
    } catch (error) {
      console.log(error);
      console.log(error.response.data.message);
    }
  }

  const handleShowPost = async (item) => {
    try {
      setSinglePost(() => item);
      setIsPostModal(() => true);
      fetchComments(item);
    } catch (error) {
      console.log(error);
      console.log(error.response.data.message);
    }
  };

  const fetchPosts = async () => {
    try {
      const res = await axios.get(`/api/web/post/display/${communityId}`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });
      console.log(res?.data?.meta);
      setPostArray(res.data.meta);
    } catch (error) {
      console.log(error);
    }
  };

  const { data: communityData } = useGetCommunity(communityId);

  useEffect(() => {
    fetchPosts();
  }, [communityId]);

  const memoizedPosts = useMemo(() => {
    return postArray.reverse();
  }, [postArray]);

  return (
    <>
      <div className="min-h-screen  xl:mx-0 relative bg-white  dark:bg-slate-950 space-y-4">
        <div className="md:container mx-auto flex md:gap-4 flex-col md:flex-row">
          <div className="md:w-1/6 bg-white  dark:bg-slate-950">
            <div className="w-full flex justify-between border-b md:flex-col gap-4 flex-row mb-4">
              <div className="hidden md:block">
                <BackButton />
              </div>
              <div
                className={`cursor-pointer px-6 py-3 w-full text-center font-medium flex items-center gap-4 ${
                  selectedTab === "posts"
                    ? "border-primary text-primary bg-gray-100 dark:bg-transparent border-b-2"
                    : "border-b-2 text-gray-600 dark:text-gray-200"
                }`}
                onClick={() => setSelectedTab("posts")}
              >
                <Mails /> Posts
              </div>
              <div
                className={`cursor-pointer px-6 py-3 text-center w-full font-medium flex items-center gap-4 ${
                  selectedTab === "jobs"
                    ? "border-primary text-primary bg-gray-100 dark:bg-transparent border-b-2"
                    : "border-b-2 text-gray-600 dark:text-gray-200"
                }`}
                onClick={() => setSelectedTab("jobs")}
              >
                <UserRoundSearch /> Jobs
              </div>
              {userData?.role == "Employee" && (
                <div
                  className={`cursor-pointer px-6 py-3 text-center w-full font-medium flex items-center gap-4 ${
                    selectedTab === "create_jobs"
                      ? "border-primary text-primary bg-gray-100 dark:bg-transparent border-b-2"
                      : "border-b-2 text-gray-600 dark:text-gray-200"
                  }`}
                  onClick={() => setSelectedTab("create_jobs")}
                >
                  <BadgeJapaneseYenIcon /> Create Jobs
                </div>
              )}
            </div>
          </div>
          <div className="md:w-5/6 ">
            <div className="mx-3 md:mb-4 mb-2 border-b flex flex-row-reverse md:flex-row items-center justify-between">
              <div
                className="flex flex-col items-center justify-center border-b-[3px]  w-fit border-b-[#35b1a7] text-[#101918]  py-3"
                href="#"
              >
                <p className="dark:text-slate-100 uppercase cursive--font text-slate-950 text-xl font-bold leading-normal cursor-pointer">
                  {communityData?.name}
                </p>
              </div>
              <div className="md:hidden block">
                <BackButton />
              </div>
            </div>
            {selectedTab == "posts" && (
              <PostForm
                userData={userData}
                communityId={communityId}
                onPostCreated={fetchPosts}
              />
            )}
            {selectedTab !== "create_jobs" && (
              <main className="w-full  dark:bg-slate-950  rounded-lg overflow-y-auto  mb-4">
                <div className="space-y-4 mb-3">
                  {selectedTab == "posts" && (
                    <>
                      {" "}
                      {/* <div className="flex justify-between items-center  mt-2">
                      <div className="flex gap-3 items-center bg-white dark:bg-slate-950 px-6 py-2 mx-3 rounded-lg shadow-md shadow-[#00000047] w-full  dark:shadow-white/20  border-t ">
                        <Search className="text-gray-500 dark:text-zinc-100" />
                        <Input
                          type="text"
                          className="w-1/2 outline-none border-none"
                          placeholder="Search for communities..."
                        />
                      </div>
                    </div> */}
                      <div>
                        {memoizedPosts?.map((item, index) => (
                          <div key={index} className="m-3">
                            <Post
                              key={index}
                              communityName={item.communityId}
                              textMessage={item.textMessage}
                              item={item}
                              showMessage={() => handleShowPost(item)}
                            />
                          </div>
                        ))}
                      </div>
                    </>
                  )}

                  {selectedTab == "jobs" && (
                    <>
                      <Jobs communityId={communityId} />
                    </>
                  )}
                </div>

                <AlertDialog open={isPostModal}>
                  <AlertDialogTrigger asChild>
                    {/* <Button variant="outline">Show Dialog</Button> */}
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Post</AlertDialogTitle>
                      <AlertDialogDescription>
                        <div className="my-4 flex gap-4">
                          <div>
                            <Avatar w={"10"} h={"10"}>
                              <AvatarImage
                                src={"https://github.com/shadcn.png"}
                              />
                              <AvatarFallback className="uppercase">
                                {/* {item?.userId?.name?.split("")[0]} */}
                              </AvatarFallback>
                            </Avatar>
                          </div>
                          <h2 className="text-sm">{singlePost?.textMessage}</h2>
                        </div>
                        <CommentInput
                          setIsPostModal={setIsPostModal}
                          singlePost={singlePost}
                        />

                        {comments && (
                          <div className="h-24 mt-4 overflow-y-auto scroll-hide">
                            {comments?.reverse().map((comment, index) => {
                              console.log(comment, "comment");
                              const time = new Date(
                                comment.updatedAt
                              ).toUTCString();
                              return (
                                <div key={index}>
                                  <div>
                                    <Avatar w={"10"} h={"10"}>
                                      <AvatarImage
                                        src={"https://github.com/shadcn.png"}
                                      />
                                      <AvatarFallback className="uppercase">
                                        {/* {item?.userId?.name?.split("")[0]} */}
                                      </AvatarFallback>
                                    </Avatar>
                                  </div>
                                  <div>{comment.text}</div>
                                  <div className="text-start text-sm">
                                    {time}
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        )}
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel
                        onClick={() => setIsPostModal(false)}
                        className="text-sm "
                      >
                        Cancel
                      </AlertDialogCancel>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </main>
            )}
            {selectedTab == "create_jobs" && <CreateJobs />}
          </div>
        </div>
      </div>
    </>
  );
};

const CommentInput = ({ singlePost, setIsPostModal }) => {
  const [comment, setComment] = useState("");

  const handleCreateComment = async () => {
    try {
      const res = await axios.post(
        "/api/web/post/comment/" + singlePost.id,
        {
          text: comment,
        },
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
      console.log(res);
      setIsPostModal(() => false);
      toast({
        title: "Create Comment",
        description: "Comment created successfully",
      });

      // fetchComments();
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setComment(e.target.value);
  };
  return (
    <div className="flex relative border rounded-full">
      <Input
        placeholder="Comment Here"
        onChange={handleChange}
        className="border-0 rounded-full ps-4"
      />
      <Button
        onClick={handleCreateComment}
        size="sm"
        className="absolute right-0 flex justify-between items-center gap-2 top-0 h-full  px-4 rounded-e-full"
      >
        <MailPlus size={18} /> comment
      </Button>
    </div>
  );
};

export default Posts;
