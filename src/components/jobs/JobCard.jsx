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

const JobCard = ({ job }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{job.title}</CardTitle>
        <p>{job.location}</p>
        <CardDescription>{job.company} </CardDescription>
      </CardHeader>
      <CardContent>
        <CardDescription>{job.description}</CardDescription>
      </CardContent>
      <CardFooter>
        <Button size="sm" className="mt-4">
          Apply Now
        </Button>
      </CardFooter>
    </Card>
  );
};

export default JobCard;
