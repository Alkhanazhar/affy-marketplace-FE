import { useState, useEffect } from "react";
import JobCard from "./JobCard";
import { Input } from "../ui/input";
import { User, LocateIcon, ChevronsUpDown } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

// Custom hook for filtering jobs
const useJobFilter = (jobs, searchTitle, searchLocation) => {
  const [filteredJobs, setFilteredJobs] = useState([]);

  useEffect(() => {
    const filtered = jobs.filter(
      (job) =>
        job.title.toLowerCase().includes(searchTitle.toLowerCase()) &&
        job.location.toLowerCase().includes(searchLocation.toLowerCase())
    );
    setFilteredJobs(filtered);
  }, [searchLocation, searchTitle, jobs]);

  return filteredJobs;
};

// SearchBar Component
const SearchBar = ({
  searchTitle,
  setSearchTitle,
  searchLocation,
  setSearchLocation,
}) => (
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
      <div className="rounded-r-full hidden md:px-4 px-2 sm:flex items-center bg-transparent relative">
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
);

// CollapsibleFilters Component
const CollapsibleFilters = () => {
  return (
    <div className="col-span-3 border rounded-lg hidden md:flex flex-col gap-6 h-fit text-neutral-700 bg-white p-4">
      <Collapsible className="w-full mb-4">
        <div className="flex justify-between w-full items-center">
          <p className="text-lg">Category</p>
          <CollapsibleTrigger>
            <ChevronsUpDown className="w-4 h-4" />
          </CollapsibleTrigger>
        </div>
        <CollapsibleContent className="mt-4">
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Job Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel className="font-[500]">Job Category</SelectLabel>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="blueberry">Blueberry</SelectItem>
                <SelectItem value="grapes">Grapes</SelectItem>
                <SelectItem value="pineapple">Pineapple</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </CollapsibleContent>
      </Collapsible>
      <Collapsible className="w-full mb-4">
        <div className="flex justify-between w-full items-center">
          <p className="text-lg">Job type</p>
          <CollapsibleTrigger>
            <ChevronsUpDown className="w-4 h-4" />
          </CollapsibleTrigger>
        </div>
        <CollapsibleContent className="mt-4">
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Job Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel className="font-[500]">Job Category</SelectLabel>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="blueberry">Blueberry</SelectItem>
                <SelectItem value="grapes">Grapes</SelectItem>
                <SelectItem value="pineapple">Pineapple</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </CollapsibleContent>
      </Collapsible>
      <Collapsible className="w-full mb-4">
        <div className="flex justify-between w-full items-center">
          <p className="text-lg">Experience</p>
          <CollapsibleTrigger>
            <ChevronsUpDown className="w-4 h-4" />
          </CollapsibleTrigger>
        </div>
        <CollapsibleContent className="mt-4">
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Job Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel className="font-[500]">Job Category</SelectLabel>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="blueberry">Blueberry</SelectItem>
                <SelectItem value="grapes">Grapes</SelectItem>
                <SelectItem value="pineapple">Pineapple</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </CollapsibleContent>
      </Collapsible>
      <Collapsible className="w-full mb-4">
        <div className="flex justify-between w-full items-center">
          <p className="text-lg">Job duration</p>
          <CollapsibleTrigger>
            <ChevronsUpDown className="w-4 h-4" />
          </CollapsibleTrigger>
        </div>
        <CollapsibleContent className="mt-4">
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Job Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel className="font-[500]">Job Category</SelectLabel>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="blueberry">Blueberry</SelectItem>
                <SelectItem value="grapes">Grapes</SelectItem>
                <SelectItem value="pineapple">Pineapple</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};

// Main Jobs Component
const Jobs = () => {
  const [searchTitle, setSearchTitle] = useState("");
  const [searchLocation, setSearchLocation] = useState("");

  const jobsData = [
    {
      title: "Frontend Developer",
      company: "Tech Corp",
      location: "New York, NY",
      type: "Full-time",
      description:
        "We are looking for a skilled Frontend Developer with experience in React and Tailwind CSS to join our team. The ideal candidate will have a deep understanding of modern web development practices and be able to work closely with our design team to bring innovative solutions to life.",
      experience: "3-5 years",
      skills: ["React", "Tailwind CSS", "JavaScript", "HTML", "CSS"],
    },
    {
      title: "Backend Developer",
      company: "Innovatech",
      location: "San Francisco, CA",
      type: "Part-time",
      description:
        "Seeking a Backend Developer with expertise in Node.js and MongoDB to work on our cloud-based applications. This role requires a strong understanding of server-side development and database management, as well as the ability to collaborate effectively with front-end developers.",
      experience: "4-6 years",
      skills: [
        "Node.js",
        "MongoDB",
        "Express.js",
        "API Design",
        "Database Management",
      ],
    },
    {
      title: "Full Stack Developer",
      company: "Web Solutions",
      location: "Austin, TX",
      type: "Remote",
      description:
        "We are searching for a Full Stack Developer who is proficient in both front-end and back-end technologies. The successful candidate will have experience with JavaScript frameworks such as React and Node.js, as well as a solid understanding of RESTful APIs and database design.",
      experience: "5-7 years",
      skills: [
        "React",
        "Node.js",
        "RESTful APIs",
        "Database Design",
        "JavaScript",
      ],
    },
    {
      title: "UI/UX Designer",
      company: "Creative Minds",
      location: "Los Angeles, CA",
      type: "Contract",
      description:
        "Creative Minds is looking for a UI/UX Designer to help us create user-friendly interfaces and enhance the user experience for our digital products. The ideal candidate should have a keen eye for detail and be able to design with both aesthetics and functionality in mind.",
      experience: "2-4 years",
      skills: ["UI Design", "UX Research", "Adobe XD", "Figma", "Prototyping"],
    },
    {
      title: "DevOps Engineer",
      company: "Cloud Innovators",
      location: "Seattle, WA",
      type: "Full-time",
      description:
        "Join our team as a DevOps Engineer and play a crucial role in managing our cloud infrastructure. You will work with cutting-edge technologies to automate deployment processes and ensure the reliability and scalability of our systems.",
      experience: "3-5 years",
      skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "Automation"],
    },
    {
      title: "Data Scientist",
      company: "Data Insights",
      location: "Boston, MA",
      type: "Full-time",
      description:
        "We are hiring a Data Scientist to analyze complex datasets and provide actionable insights to drive business decisions. The role requires strong analytical skills and experience with data visualization tools, as well as proficiency in Python and SQL.",
      experience: "4-6 years",
      skills: [
        "Python",
        "SQL",
        "Data Analysis",
        "Machine Learning",
        "Data Visualization",
      ],
    },
    {
      title: "Mobile App Developer",
      company: "Appify",
      location: "Chicago, IL",
      type: "Full-time",
      description:
        "Appify is looking for a Mobile App Developer with experience in developing iOS and Android applications. The successful candidate will have strong programming skills in Swift and Kotlin, and be able to work in a fast-paced environment to deliver high-quality mobile solutions.",
      experience: "3-5 years",
      skills: [
        "Swift",
        "Kotlin",
        "iOS Development",
        "Android Development",
        "Mobile UI/UX",
      ],
    },
  ];

  const filteredJobs = useJobFilter(jobsData, searchTitle, searchLocation);

  return (
    <>
      <div className="pt-16">
        <SearchBar
          searchTitle={searchTitle}
          setSearchTitle={setSearchTitle}
          searchLocation={searchLocation}
          setSearchLocation={setSearchLocation}
        />
        <div className="grid grid-cols-12 md:max-w-6xl w-[90%] mx-auto gap-2 py-2">
          <CollapsibleFilters />
          <div className="md:col-span-9 col-span-12 space-y-2 w-full md:w-auto">
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
