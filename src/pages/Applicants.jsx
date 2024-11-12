import {
  Breadcrumb,
  BreadcrumbItem,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Link, useLocation, useParams } from "react-router-dom";

const Applicants = () => {
  const { jobId } = useParams();
  console.log(jobId);

  const location = useLocation();

  // Static applicants data
  const applicants = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Smith" },
    { id: 3, name: "David Johnson" },
  ];

  return (
    <div>
      <Breadcrumb>
        {location.pathname.split("/").map((item, index) => {
          return (
            <BreadcrumbItem key={index}>
              <Link className="" to={"/" + item}>{item}</Link> /
            </BreadcrumbItem>
          );
        })}
      </Breadcrumb>

      {/* Applicants List */}
      <div className="grid md:grid-cols-3 grid-cols-1  gap-4">
        {applicants.map((applicant) => (
          <div
            key={applicant.id}
            className="flex justify-between items-center p-4 hover:bg-slate-200 duration-150 mb-2 dark:bg-gray-900 bg-slate-100  rounded-lg"
          >
            <p>{applicant.name}</p>
            <Button variant="outline" size="sm" asChild>
              <Link to={`applicant-profile/${applicant.id}`}>View Profile</Link>
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Applicants;
