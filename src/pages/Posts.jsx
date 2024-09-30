import { Search } from "lucide-react";
import { jobsData, postsArray } from "../../constants/constatns";
import Post from "@/components/community/Post";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useParams } from "react-router-dom";

import { useState } from "react";

import {
  AlertDialog,
  AlertDialogContent,
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

const Posts = () => {
  const id = useParams();
  console.log(id, "id");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [textMessage, setTextMessage] = useState("");
  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };
  const user = localStorage.getItem("token");
  const [selectedTab, setSelectedTab] = useState("posts");
  const [searchTitle, setSearchTitle] = useState("");
  const [searchLocation, setSearchLocation] = useState("");

  const filteredJobs = useJobFilter(jobsData, searchTitle, searchLocation);

  const userData = jwtDecode(user);
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await axios.post("/api/web/post/create", {
        community_id: parseInt(id.communityName),
        user_id: parseInt(userData.id),
        textMessage: textMessage,
      });
      console.log(response);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }

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
                    {postsArray.map((item) => (
                      <div
                        key={item.textMessage}
                        className="mx-2 mb-2 cursor-pointer"
                        onClick={() => {
                          // setData(() => item);
                          setIsModalOpen(true);
                        }}
                      >
                        <Post
                          communityName={item.communityId}
                          textMessage={item.textMessage}
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
          </main>
        </div>
      </div>
    </>
  );
};

export default Posts;
