import {
  Image,
  LucidePodcast,
  Mails,
  Search,
  UserRoundSearch,
} from "lucide-react";
import { jobsData } from "../../constants/constatns";
import Post from "@/components/community/Post";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import profanity from "profanity";

import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useParams } from "react-router-dom";

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

import {
  CollapsibleFilters,
  SearchBar,
  useJobFilter,
} from "@/components/jobs/Jobs";
import JobCard from "@/components/jobs/JobCard";
import { toast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { Avatar } from "@/components/ui/avatar";
import PostForm from "@/components/shared/CreatePostForm";

const Posts = () => {
  const id = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPostModal, setIsPostModal] = useState(false);
  const [singlePost, setSinglePost] = useState(null);
  const [textMessage, setTextMessage] = useState("");
  const [postArray, setPostArray] = useState([]);
  const [comments, setComments] = useState(null);

  const token = localStorage.getItem("token");
  const [selectedTab, setSelectedTab] = useState("posts");
  const [searchTitle, setSearchTitle] = useState("");
  const [searchLocation, setSearchLocation] = useState("");

  const filteredJobs = useJobFilter(jobsData, searchTitle, searchLocation);

  const userData = token && jwtDecode(token);
  console.log(userData);

  async function handleSubmit(e) {
    console.log(userData.id);
    e.preventDefault();
    try {
      const response = await axios.post(
        "/api/web/post/create",
        {
          community_id: id?.communityId,
          userId: userData?.id,
          textMessage: textMessage,
        },
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
      if (response.status == 201) {
        toast({
          variant: "default",
          title: "Success",
          description: "Post created successfully",
        });
        console.log(response);
        console.log(response.data);
        getPosts();
        setIsModalOpen(false);
      }
    } catch (error) {
      console.log(error);
      toast({
        variant: "destructive",
        title: "Registration failed. Please try again.",
        description:
          error?.response?.data?.message ||
          "Something went wrong. Please try again",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
    }
  }

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
      const res = await axios.get(`/api/web/post/display/${id.communityId}`, {
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

  useEffect(() => {
    fetchPosts();
  }, [id.communityId]);
  // const handleTextChange = useCallback((e) => {
  //   setTextMessage(e.target.value);
  // }, []);

  const memoizedPosts = useMemo(() => {
    console.log("memo");
    return postArray.reverse();
  }, [postArray]);
  return (
    <>
      <div className="min-h-screen  xl:mx-0 relative bg-white">
        <div className="container mx-auto flex md:gap-8 flex-col md:flex-row">
          <div className="md:w-1/6">
            <div className="w-full flex justify-between border-b md:flex-col gap-4 flex-row mb-4">
              <div
                className={`cursor-pointer p-3 w-full text-center font-medium flex items-center gap-4 ${
                  selectedTab === "posts"
                    ? "border-primary text-primary bg-gray-100 dark:bg-transparent border-b-2"
                    : "border-b-2 border-transparent"
                }`}
                onClick={() => setSelectedTab("posts")}
              >
                <Mails /> Posts
              </div>
              <div
                className={`cursor-pointer p-3 text-center w-full font-medium flex items-center gap-4 ${
                  selectedTab === "jobs"
                    ? "border-primary text-primary bg-gray-100 dark:bg-transparent border-b-2"
                    : "border-b-2 border-transparent"
                }`}
                onClick={() => setSelectedTab("jobs")}
              >
                <UserRoundSearch /> Jobs
              </div>
            </div>
          </div>
          <div className="md:w-5/6">
            <h2 className="text-2xl font-bold cursive--font">Community Name</h2>
            {selectedTab == "posts" && (
              <PostForm
                userData={userData}
                communityId={id.communityId}
                onPostCreated={fetchPosts}
              />
            )}
            <main className=" w-full bg-zinc-100/90  dark:bg-slate-950 dark:border rounded-lg overflow-y-auto  mb-4">
              <div className="space-y-4 mb-3">
                {selectedTab == "posts" && (
                  <>
                    {" "}
                    <div className="flex justify-between items-center  px-3 mt-2">
                      <div className="flex gap-3 items-center bg-white dark:bg-slate-950 px-6 py-2 rounded-lg shadow-md shadow-[#00000047] w-full  dark:shadow-white/20  border-t ">
                        <Search className="text-gray-500 dark:text-zinc-100" />
                        <Input
                          type="text"
                          className="w-1/2 outline-none border-none"
                          placeholder="Search for communities..."
                        />
                      </div>
                    </div>
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
                    <div className="">
                      <SearchBar
                        searchTitle={searchTitle}
                        setSearchTitle={setSearchTitle}
                        searchLocation={searchLocation}
                        setSearchLocation={setSearchLocation}
                      />
                      <div className="md:col-span-9 col-span-12 space-y-2 w-full md:w-auto mx-3 ">
                        {filteredJobs?.length > 0 ? (
                          filteredJobs?.map((job, index) => (
                            <JobCard job={job} key={index} />
                          ))
                        ) : (
                          <p className="text-2xl font-bold text-center mt-20">
                            No jobs found matching your criteria.
                          </p>
                        )}
                      </div>
                    </div>
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
                      <div className="my-4">
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
                                  <Avatar />
                                </div>
                                <div>{comment.text}</div>
                                <div className="text-start text-sm">{time}</div>
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel onClick={() => setIsPostModal(false)}>
                      Cancel
                    </AlertDialogCancel>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </main>
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
        className="absolute right-0 top-0 h-full  px-4 rounded-e-full"
      >
        comment
      </Button>
    </div>
  );
};

export default Posts;
