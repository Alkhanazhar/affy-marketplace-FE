import { Button } from "@/components/ui/button";
import { MoveLeft } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";

const Applicants = () => {
  const { jobId } = useParams();
  console.log(jobId);
  const navigate = useNavigate();

  // Static applicants data
  const applicants = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Smith" },
    { id: 3, name: "David Johnson" },
  ];

  return (
    <div>
      {/* Small back button */}
      <Button
        onClick={() => navigate(-1)}
        size="sm"
        className="mb-4 flex items-center"
      >
        <MoveLeft className="mr-2 w-4" /> Back
      </Button>

      {/* Applicants List */}
      <div>
        {applicants.map((applicant) => (
          <div
            key={applicant.id}
            className="flex justify-between items-center p-4 hover:bg-slate-200 duration-150 mb-2 dark:bg-gray-100 bg-slate-100 rounded-lg"
          >
            <p>{applicant.name}</p>
            <Button variant="outline" size="sm" asChild>
              <a href={`/applicant-profile/${applicant.id}`}>View Profile</a>
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Applicants;
