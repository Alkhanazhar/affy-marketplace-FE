import { useState, useEffect } from "react";
import JobCard from "./JobCard";
import { Input } from "../ui/input";
import { User, LocateIcon, ChevronsUpDown, X } from "lucide-react";
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
import { jobsData } from "../../../constants/constatns";

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
    <div className="flex gap-3 items-center bg-white dark:bg-transparent px-6 py-2 rounded-lg shadow-md shadow-[#00000047] dark:shadow-white/20 lg:w-5/12 w-10/12 border-t">
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
  // eslint-disable-next-line no-unused-vars
  const [filters, setFilters] = useState(["frontend", "backend", "search"]);
  const renderCollapsibleSection = (title, placeholder) => (
    <Collapsible className="w-full dark:text-zinc-100 ">
      <div className="flex justify-between w-full items-center">
        <p className="text-base">{title}</p>
        <CollapsibleTrigger>
          <ChevronsUpDown className="w-4 h-4" />
        </CollapsibleTrigger>
      </div>
      <CollapsibleContent className="mt-4">
        <Select>
          <SelectTrigger className="w-full dark:text-zinc-100">
            <SelectValue placeholder={placeholder} />
          </SelectTrigger>
          <SelectContent className="text-zinc-50">
            <SelectGroup>
              <SelectLabel className="font-[500]">{placeholder}</SelectLabel>
              <SelectItem value="apple" className="w-full dark:text-zinc-100">
                Apple
              </SelectItem>
              <SelectItem value="banana" className="w-full dark:text-zinc-100">
                Banana
              </SelectItem>
              <SelectItem
                value="blueberry"
                className="w-full dark:text-zinc-100"
              >
                Blueberry
              </SelectItem>
              <SelectItem value="grapes" className="w-full dark:text-zinc-100">
                Grapes
              </SelectItem>
              <SelectItem
                value="pineapple"
                className="w-full dark:text-zinc-100"
              >
                Pineapple
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </CollapsibleContent>
    </Collapsible>
  );

  return (
    <div className="col-span-3 border rounded-lg hidden md:flex flex-col gap-5 h-fit text-neutral-700 dark:text-zinc-200 bg-white dark:bg-slate-950 sticky top-20 mb-10 p-4 cursive--font">
      <div className="flex items-center gap-2 flex-wrap">
        Selected filters:
        {filters.map((item, index) => {
          return (
            <div
              key={index}
              className="text-xs border px-3 py-1 rounded-full flex items-center gap-2"
            >
              {item} <X className="w-3 h-3 cursor-pointer" />
            </div>
          );
        })}
      </div>
      {renderCollapsibleSection("Category", "Job Category")}
      {renderCollapsibleSection("Job Type", "Job Type")}
      {renderCollapsibleSection("Experience", "Experience")}
      {renderCollapsibleSection("Job Duration", "Job Duration")}
    </div>
  );
};

// Main Jobs Component
const Jobs = () => {
  const [searchTitle, setSearchTitle] = useState("");
  const [searchLocation, setSearchLocation] = useState("");

  const filteredJobs = useJobFilter(jobsData, searchTitle, searchLocation);

  return (
    <div className="pt-16 ">
      <SearchBar
        searchTitle={searchTitle}
        setSearchTitle={setSearchTitle}
        searchLocation={searchLocation}
        setSearchLocation={setSearchLocation}
      />
      <div className="grid grid-cols-12 md:max-w-6xl w-[90%] mx-auto gap-2 py-2">
        <CollapsibleFilters />
        <div className="md:col-span-9 col-span-12 space-y-2 w-full md:w-auto ">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job, index) => <JobCard job={job} key={index} />)
          ) : (
            <p className="text-2xl font-bold text-center mt-20">
              No jobs found matching your criteria.
            </p>
          )}
        </div>
        <div className="col-span-2 hidden md:flex"></div>
      </div>
    </div>
  );
};

export default Jobs;
