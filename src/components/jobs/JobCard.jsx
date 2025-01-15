import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

const JobCard = ({ job }) => {
  console.log(job, "jobs");
  const images = [
    "https://cdn.usegalileo.ai/sdxl10/38993a56-0fa3-420e-b171-1807c194e110.png",
    "https://cdn.usegalileo.ai/sdxl10/4e0a5972-3470-4f54-9982-debf3bce1f77.png",
    "https://cdn.usegalileo.ai/stability/938b517e-dc32-442d-92aa-ac87f4509de0.png",
  ];
  const randomNumber = Math.floor(Math.random() * images.length);
  console.log(randomNumber);
  return (
    <Dialog>
      <div className="p-3 border rounded-md cursive--font">
        <div className="flex items-stretch justify-between gap-4 rounded-xl">
          <div className="flex flex-[2_2_0px] flex-col gap-4">
            <div className="flex flex-col gap-1">
              <p className="text-[#4c719a] text-sm font-normal leading-normal">
                {job.location}
              </p>
              <p className="text-[#0d141b] text-xl font-bold leading-tight">
                {job.name}
              </p>
              <p className="text-[#4c719a] text-sm font-normal leading-tight">
                {job.description}
              </p>

              <p className="text-[#4c719a] text-sm font-normal leading-normal">
                ${job.price}
              </p>
              <p className="text-[#4c719a] text-sm font-normal leading-normal">
                {job.Community.name}
              </p>
            </div>

            <DialogTrigger asChild className="mt-auto">
              <Button size="sm" className="w-fit">
                Apply Now
              </Button>
            </DialogTrigger>
          </div>
          <img
            src={images[randomNumber]}
            className="w-40 bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex-1 object-cover"
          ></img>
        </div>
      </div>

      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-2xl">
            Apply for {job?.fullName}
          </DialogTitle>
          <DialogDescription>
            <strong className="text-xl capitalize">Bidding price:</strong>
            <span>{job?.price} </span>
            <div className="flex space-y-4 flex-col mt-4">
              <Label>Your Bidding Price</Label>
              <div className="flex gap-2">
                <Input placeholder="Enter your Bidding Amount" type="number" />
                <Button>Apply</Button>
              </div>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default JobCard;
