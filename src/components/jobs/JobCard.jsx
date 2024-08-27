/* eslint-disable react/prop-types */
// src/components/JobCard.js
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

const JobCard = ({ job }) => {
  return (
    <Dialog>
      <Card>
        <CardHeader>
          <CardTitle>{job.title}</CardTitle>
          <p>{job.location}</p>
          <CardDescription>{job.company}</CardDescription>
        </CardHeader>
        <CardContent>
          <CardDescription>{job.description}</CardDescription>
          <div className="mt-4 flex">
            <p className="text-[#64748b] ">Experience Required: &nbsp;</p>{" "}
            {job.experience}
          </div>

          <ul className="flex gap-2 items-center mt-4">
            <p className="text-[#64748b]">Skills:</p>
            {job.skills.map((skill, index) => (
              <li
                key={index}
                className="py-[6px] px-4 rounded-full bg-neutral-200 text-[#546274]"
              >
                {skill}
              </li>
            ))}
          </ul>
        </CardContent>
        <CardFooter>
          <DialogTrigger asChild>
            <Button size="sm" className="mt-4">
              Apply Now
            </Button>
          </DialogTrigger>
        </CardFooter>
      </Card>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default JobCard;
