import axios from "axios";
import {
  Briefcase,
  ClipboardList,
  Edit,
  Pen,
  PlusCircle,
  Trash,
} from "lucide-react";
import { BarChart, Card, PageTitle } from "./Dashboard";
import { CardContent } from "@/components/ui/card";
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
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
import { toast } from "@/components/ui/use-toast";
import { Link } from "react-router-dom";

const EmployeeDashboard = () => {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [jobsCreated, setJobsCreated] = useState(0); // State to store the number of jobs created

  const token = localStorage.getItem("token");
  const userInfo = token && jwtDecode(token);

  const fetchJobData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(`/api/job/display/${userInfo.id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setJobs(()=>response.data.meta);
      setJobsCreated(()=>response.data.meta.length); // Update the number of jobs created
    } catch (error) {
      console.error("Failed to fetch jobs:", error);
      setError("Failed to fetch jobs. Please try again later.");
    } finally {
      setIsLoading(()=>false);
    }
  };
  const deleteJob = async (jobId, createdBy) => {
    setIsLoading(()=>true);
    try {
      const res = await axios.delete(`/api/job/delete/${createdBy}/${jobId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log(res);
      if (res.status == 200) {
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
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchJobData();
  }, []);

  const cardData = [
    {
      label: "Jobs Created",
      amount: jobsCreated.toString(),
      description: "+5 from last month",
      icon: Briefcase,
    },
    {
      label: "Pending Jobs",
      amount: "7",
      description: "Jobs awaiting approval",
      icon: ClipboardList,
    },
    {
      label: "Jobs Edited",
      amount: "12",
      description: "+3 from last month",
      icon: Edit,
    },
    {
      label: "New Jobs This Month",
      amount: "+8",
      description: "Jobs created this month",
      icon: PlusCircle,
    },
  ];

  return (
    <div className="cursive--font">
      <PageTitle title={"Employee Dashboard"} />
      <div className="mt-8">
        <section className="grid w-full grid-cols-1 gap-4 gap-x-8 transition-all sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 ">
          {cardData.map((data, index) => (
            <Card
              key={index}
              amount={data.amount}
              description={data.description}
              icon={data.icon}
              label={data.label}
            />
          ))}
        </section>
      </div>
      <section className="grid grid-cols-1 gap-4 transition-all lg:grid-cols-2 rounded-md">
        <CardContent className="bg-white dark:bg-slate-900 border mt-8 rounded-xl shadow-lg">
          <p className="p-4 font-semibold">Overview</p>
          <BarChart />
        </CardContent>
        <CardContent className="bg-white dark:bg-slate-900 border no-scroll overflow-scroll mt-8 rounded-xl shadow-lg p-2 h-[60vh]">
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
                </TableRow>
              </TableHeader>
              <TableBody>
                {jobs.length > 0 ? (
                  jobs.map((job) => (
                    <TableRow key={job?.id}>
                      <TableCell>{job?.id}</TableCell>
                      <TableCell>{job?.name}</TableCell>
                      <TableCell>{job?.description}</TableCell>
                      <TableCell>
                        <AlertDialog>
                          <AlertDialogTrigger asChild>
                            <Button
                              variant="outline"
                              size="sm"
                              className="bg-red-500 hover:bg-red-600 text-white"
                            >
                              {" "}
                              <Trash className="w-4 h-4" />
                            </Button>
                          </AlertDialogTrigger>
                          <AlertDialogContent>
                            <AlertDialogHeader>
                              <AlertDialogTitle>
                                Are you absolutely sure?
                              </AlertDialogTitle>
                              <AlertDialogDescription>
                                This action cannot be undone. This will
                                permanently delete your account and remove your
                                data from our servers.
                              </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                              <AlertDialogCancel>Cancel</AlertDialogCancel>
                              <AlertDialogAction
                                onClick={() => deleteJob(job.id, userInfo.id)}
                              >
                                delete
                              </AlertDialogAction>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialog>
                        <Button variant="" asChild size="sm" className="ml-2">
                          <Link to={"/employee-page/edit/" + job?.id}>
                            <Pen className="w-4 h-4" />
                          </Link>
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan="4">No jobs found</TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </section>
    </div>
  );
};

export default EmployeeDashboard;
