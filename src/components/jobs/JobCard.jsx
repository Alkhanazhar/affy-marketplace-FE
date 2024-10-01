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
import { Clock2 } from "lucide-react";

const JobCard = ({ job }) => {
  return (
    <Dialog>
      <Card className="cursive--font">
        <CardHeader className="cursive--font">
          <CardTitle className="text-black/80 dark:text-zinc-200 cursive--font">
            {job.title}
          </CardTitle>
          <p>{job.location}</p>
          <CardDescription>{job.company}</CardDescription>
        </CardHeader>
        <CardContent>
          <CardDescription>{job.description}</CardDescription>
          <div className="mt-4 flex text-black/70 dark:text-zinc-300">
            <p className="text-[#64748b] flex items-center">
              <Clock2 className="w-4 h-4 mr-2" /> Experience Required: &nbsp;
            </p>{" "}
            {job.experience}
          </div>
          <ul className="flex gap-2 items-center mt-4 flex-wrap">
            <p className="text-[#64748b]">Skills:</p>
            {job.skills.map((skill, index) => (
              <li
                key={index}
                className="py-[4px] text-xs md:text-sm px-4 rounded-full bg-neutral-100 dark:bg-zinc-300 border cursor-pointer text-neutral-600"
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
