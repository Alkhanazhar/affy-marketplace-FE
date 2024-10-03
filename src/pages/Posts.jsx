import { Search } from "lucide-react";
import { jobsData } from "../../constants/constatns";
import Post from "@/components/community/Post";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useParams } from "react-router-dom";

import { useEffect, useState } from "react";

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
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  CollapsibleFilters,
  SearchBar,
  useJobFilter,
} from "@/components/jobs/Jobs";
import JobCard from "@/components/jobs/JobCard";
import { toast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";

const Posts = () => {
  const id = useParams();

  console.log(id, "id");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPostModal, setIsPostModal] = useState(false);
  const [singlePost, setSinglePost] = useState(null);
  const [textMessage, setTextMessage] = useState("");
  const [getPostArray, setPostArray] = useState([]);
  // const [comments, setComments] = useState(null);
  const [comment, setComment] = useState(null);
  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };
  const token = localStorage.getItem("token");
  const [selectedTab, setSelectedTab] = useState("posts");
  const [searchTitle, setSearchTitle] = useState("");
  const [searchLocation, setSearchLocation] = useState("");

  const filteredJobs = useJobFilter(jobsData, searchTitle, searchLocation);

  const userData = jwtDecode(token);
  console.log(userData);
  const getPosts = async () => {
    try {
      const res = await axios.get("/api/web/post/display/" + id.communityId, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });
      console.log(res.data.meta);
      setPostArray(res.data.meta);
    } catch (error) {
      console.log(error);
    }
  };
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
      console.log(res.response.data.message);
      // setComments(res.data.meta);
    } catch (error) {
      console.log(error);
      console.log(error.response.data.message);
    }
  }
  const handleShowPost = async (item) => {
    try {
      setSinglePost(() => item);
      console.log(item);
      setIsPostModal(() => true);
      fetchComments(item);
    } catch (error) {
      console.log(error);
      console.log(error.response.data.message);
    }
  };

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
      // fetchComments();
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getPosts();
  }, []);

  return (
    <>
      <div className="min-h-screen mx-4 xl:mx-0 relative">
        <div className="max-w-7xl mx-auto flex pt-16">
          <aside className="md:w-1/4 hidden md:flex h-fit p-4 sticky top-16 w-full rounded-lg border dark:bg-[#020817] bg-zinc-100/90">
            <AlertDialog open={isModalOpen}>
              <AlertDialogTrigger asChild>
                {selectedTab == "posts" && (
                  <button
                    className="px-4 py-2 shadow-white/10 shadow-lg border rounded-full bg-primary dark:bg-secondary text-white cursive--font dark:text-black text-base whitespace-nowrap mx-auto  flex justify-center items-center"
                    onClick={toggleModal}
                  >
                    Create Posts
                  </button>
                )}
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogTitle className="md:text-4xl text-2xl text-black/70 text-center rounded-full  dark:text-slate-100">
                  Post something here
                </AlertDialogTitle>
                <form
                  onSubmit={handleSubmit}
                  className="space-y-4 p-4 rounded-xl w-full mx-auto bg-white border mt-4 dark:bg-transparent"
                >
                  <div>
                    <Label htmlFor="name" className="my-4">
                      Community Name
                    </Label>
                    <Textarea
                      id="name"
                      name="name"
                      type="text"
                      value={textMessage}
                      onChange={(e) => setTextMessage(e.target.value)}
                      placeholder="Enter Upto 255 Words"
                      className="my-2"
                    />
                  </div>

                  <div className="flex justify-start items-center gap-4">
                    <Button type="submit">Create Post</Button>{" "}
                    <Button
                      onClick={toggleModal}
                      type="button"
                      variant="outline"
                    >
                      Cancel
                    </Button>
                  </div>
                </form>
              </AlertDialogContent>
            </AlertDialog>

            {selectedTab === "jobs" && <CollapsibleFilters />}
          </aside>
          <main className="md:w-3/4 w-full bg-zinc-100/90  dark:bg-slate-950 dark:border rounded-lg overflow-y-auto mx-2">
            <div className="w-full flex justify-between border-b">
              <div
                className={`w-1/2 cursor-pointer p-4 text-center font-medium  ${
                  selectedTab === "posts"
                    ? "border-primary text-primary bg-gray-100 dark:bg-transparent border-b-2"
                    : "border-b-2 border-transparent"
                }`}
                onClick={() => setSelectedTab("posts")}
              >
                Posts
              </div>
              <div
                className={`w-1/2 cursor-pointer p-4 text-center font-medium  ${
                  selectedTab === "jobs"
                    ? "border-primary text-primary bg-gray-100 dark:bg-transparent border-b-2"
                    : "border-b-2 border-transparent"
                }`}
                onClick={() => setSelectedTab("jobs")}
              >
                Jobs
              </div>
            </div>
            <div className="space-y-4 ">
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
                    {getPostArray.map((item, index) => (
                      <div key={index} onClick={() => handleShowPost(item)} className="m-3">
                        <Post
                          key={index}
                          communityName={item.communityId}
                          textMessage={item.textMessage}
                          // handleShowPost={handleShowPost(item)}
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
                      {filteredJobs.length > 0 ? (
                        filteredJobs.map((job, index) => (
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
                      <h2 className="text-xl">{singlePost?.textMessage}</h2>
                    </div>
                    <div className="my-4">
                      <Textarea onChange={(e) => setComment(e.target.value)} />
                      <Button onClick={handleCreateComment} className="mt-4">
                        comment
                      </Button>
                    </div>
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
    </>
  );
};

export default Posts;
