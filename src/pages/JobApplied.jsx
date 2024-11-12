
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { DataTable } from "./Category";

const JobApplied = () => {
  const [jobs, setJobs] = useState([
    {
      id: 1,
      title: "Frontend Developer",
      company: "Tech Solutions",
      status: "Applied",
      dateApplied: "2024-09-01",
    },
    {
      id: 2,
      title: "UI/UX Designer",
      company: "Creative Studio",
      status: "Interview Scheduled",
      dateApplied: "2024-08-28",
    },
    {
      id: 3,
      title: "Backend Developer",
      company: "Cloud Innovators",
      status: "Rejected",
      dateApplied: "2024-07-15",
    },
  ]);

  const columns = [
    { header: "Job Title", key: "title" },
    { header: "Company", key: "company" },
    { header: "Status", key: "status" },
    { header: "Date Applied", key: "dateApplied" },
  ];

  return (
    <div className="max-w-7xl mx-auto space-y-6 p-6">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Jobs Applied</h1>
        <Button variant="outline" onClick={() => alert("Refreshed!")}>
          Refresh List
        </Button>
      </header>

      <div className="bg-white dark:bg-slate-950 shadow-md rounded-lg ">
        {jobs.length > 0 ? (
          <DataTable columns={columns} data={jobs} />
        ) : (
          <p className="text-center text-gray-500">No jobs applied yet.</p>
        )}
      </div>
    </div>
  );
};

export default JobApplied;
