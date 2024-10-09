/* eslint-disable no-unused-vars */
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { toast } from "@/components/ui/use-toast";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { Pen, Trash } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const EmployeeCreatedJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [jobsCreated, setJobsCreated] = useState(0); // State to store the number of jobs created

  const deleteJob = async (jobId, createdBy) => {
    setIsLoading(true);
    try {
      const res = await axios.delete(`/api/job/delete/${createdBy}/${jobId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log(res);
      if (res.status === 200) {
        toast({
          variant: "default",
          title: "Success",
          description: "Job Post Deleted successfully.",
        });
      }
      setJobs(jobs.filter((job) => job.id !== jobId)); // Update the state to remove the deleted job
    } catch (error) {
      console.error("Failed to delete job:", error);
      setError("Failed to delete job. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  const token = localStorage.getItem("token");
  const userInfo = token && jwtDecode(token);

  const fetchJobData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(`/api/job/display/${userInfo.id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setJobs(response.data.meta);
      console.log(jobs);
      setJobsCreated(response.data.meta.length); // Update the number of jobs created
    } catch (error) {
      console.error("Failed to fetch jobs:", error);
      setError("Failed to fetch jobs. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };
  const navigate = useNavigate();
  useEffect(() => {
    fetchJobData();
  }, []);

  return (
    <CardContent className="bg-white dark:bg-slate-900 border cursive--font no-scroll overflow-scroll mt-8 rounded-xl shadow-lg p-2 h-[60vh]">
      {isLoading ? (
        <p>Loading jobs...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <Table>
          <TableCaption>A list of your recent jobs.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Job ID</TableHead>
              <TableHead>Title</TableHead>
              <TableHead>Description</TableHead>
              <TableHead className="text-right">Actions</TableHead>
              <TableHead className="text-right">Applicants</TableHead>{" "}
              {/* Add a new column for Applicants */}
            </TableRow>
          </TableHeader>
          <TableBody>
            {jobs.length > 0 ? (
              jobs.map((job) => (
                <TableRow key={job?.id}>
                  <TableCell>{job?.id}</TableCell>
                  <TableCell>{job?.name}</TableCell>
                  <TableCell>{job?.description}</TableCell>
                  <TableCell className="text-right">
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button
                          variant="outline"
                          size="sm"
                          className="bg-red-600 hover:bg-red-700 text-white"
                        >
                          <Trash className="w-2 h-2 sm:w-4 sm:h-4" />
                        </Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>
                            Are you absolutely sure?
                          </AlertDialogTitle>
                          <AlertDialogDescription>
                            This action cannot be undone. This will permanently
                            delete your job post and remove its data from our
                            servers.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancel</AlertDialogCancel>
                          <AlertDialogAction
                            onClick={() => deleteJob(job.id, userInfo.id)}
                          >
                            Delete
                          </AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                    <Button variant="" asChild size="sm" className="ml-2">
                      <Link to={`/employee-page/edit/${job?.id}`}>
                        <Pen className="w-2 h-2 sm:w-4 sm:h-4" />
                      </Link>
                    </Button>
                  </TableCell>
                  <TableCell
                    className="cursor-pointer"
                    onClick={() => {
                      navigate(job.id + "/applicants");
                    }}
                  >
                    {job?.applicants || 0}
                  </TableCell>
                  {/* Display the number of applicants */}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan="5">No jobs found</TableCell>{" "}
                {/* Update colspan to match new column */}
              </TableRow>
            )}
          </TableBody>
        </Table>
      )}
    </CardContent>
  );
};

export default EmployeeCreatedJobs;
