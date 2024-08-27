import { useEffect, useState } from "react";
import Header from "../shared/Header";
import JobCard from "./JobCard"; // Import the JobPost component
import { Input } from "../ui/input";
import { LocateIcon, User } from "lucide-react";

const Jobs = () => {
  const [searchTitle, setSearchTitle] = useState("");
  const [searchLocation, setSearchLocation] = useState("");
  const [filteredJobs, setFilteredJobs] = useState([]);

  const jobs = [
    {
      title: "Frontend Developer",
      company: "Tech Corp",
      location: "New York, NY",
      type: "Full-time",
      description:
        "We are looking for a skilled Frontend Developer with experience in React and Tailwind CSS to join our team. The ideal candidate will have a deep understanding of modern web development practices and be able to work closely with our design team to bring innovative solutions to life.",
    },
    {
      title: "Backend Developer",
      company: "Innovatech",
      location: "San Francisco, CA",
      type: "Part-time",
      description:
        "Seeking a Backend Developer with expertise in Node.js and MongoDB to work on our cloud-based applications. This role requires a strong understanding of server-side development and database management, as well as the ability to collaborate effectively with front-end developers.",
    },
    {
      title: "Full Stack Developer",
      company: "Web Solutions",
      location: "Austin, TX",
      type: "Remote",
      description:
        "We are searching for a Full Stack Developer who is proficient in both front-end and back-end technologies. The successful candidate will have experience with JavaScript frameworks such as React and Node.js, as well as a solid understanding of RESTful APIs and database design.",
    },
    {
      title: "UI/UX Designer",
      company: "Creative Minds",
      location: "Los Angeles, CA",
      type: "Contract",
      description:
        "Creative Minds is looking for a UI/UX Designer to help us create user-friendly interfaces and enhance the user experience for our digital products. The ideal candidate should have a keen eye for detail and be able to design with both aesthetics and functionality in mind.",
    },
    {
      title: "DevOps Engineer",
      company: "Cloud Innovators",
      location: "Seattle, WA",
      type: "Full-time",
      description:
        "Join our team as a DevOps Engineer and play a crucial role in managing our cloud infrastructure. You will work with cutting-edge technologies to automate deployment processes and ensure the reliability and scalability of our systems.",
    },
    {
      title: "Data Scientist",
      company: "Data Insights",
      location: "Boston, MA",
      type: "Full-time",
      description:
        "We are hiring a Data Scientist to analyze complex datasets and provide actionable insights to drive business decisions. The role requires strong analytical skills and experience with data visualization tools, as well as proficiency in Python and SQL.",
    },
    {
      title: "Mobile App Developer",
      company: "Appify",
      location: "Chicago, IL",
      type: "Full-time",
      description:
        "Appify is looking for a Mobile App Developer with experience in developing iOS and Android applications. The successful candidate will have strong programming skills in Swift and Kotlin, and be able to work in a fast-paced environment to deliver high-quality mobile solutions.",
    },
  ];

  useEffect(() => {
    const filtered = jobs.filter(
      (job) =>
        job.title.toLowerCase().includes(searchTitle.toLowerCase()) &&
        job.location.toLowerCase().includes(searchLocation.toLowerCase())
    );
    setFilteredJobs(filtered);
  }, [searchLocation, searchTitle]);

  return (
    <>
      <Header />
      <div className="pt-16">
        <div className="py-4 flex items-center justify-center md:max-w-7xl mx-auto w-[90%]">
          <div className="flex gap-3 items-center bg-white px-6 py-2 rounded-lg shadow-md shadow-[#00000047] lg:w-5/12 w-10/12 border-t">
            <div className="rounded-l-full md:px-4 flex items-center px-2 bg-transparent relative">
              <User className="text-gray-500" />
              <Input
                type="text"
                className="border-none outline-none focus:outline-none focus:border-none bg-transparent w-full"
                placeholder="Find your Perfect job"
                value={searchTitle}
                onChange={(e) => setSearchTitle(e.target.value)}
              />
            </div>

            <div className="rounded-r-full hidden  md:px-4 px-2 sm:flex items-center bg-transparent relative">
              <LocateIcon className="text-gray-500" />
              <Input
                type="text"
                placeholder="Location"
                className="border-none outline-none focus:outline-none focus:border-none bg-transparent"
                value={searchLocation}
                onChange={(e) => setSearchLocation(e.target.value)}
              />
            </div>
          </div>
        </div>
        <hr />
        <div className="grid grid-cols-9 md:max-w-7xl w-[90%] mx-auto gap-2 py-2">
          <div className="col-span-2 border rounded-lg hidden md:flex bg-white"></div>
          <div className="md:col-span-5 col-span-9 space-y-2 w-full md:w-auto">
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
          <div className="col-span-2 hidden md:flex"></div>
        </div>
      </div>
    </>
  );
};

export default Jobs;
