import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";
import { Button } from "../ui/button";

const CreateJobs = () => {
  const [jobDetails, setJobDetails] = useState({
    title: "",
    description: "",
    type: "",
    location: "",
    budget: "",
    duration: "",
    equipment: "",
    additionalRequirements: "",
    contactEmail: "",
    contactPhone: "",
    date: "", // Added this missing field
  });

  const handleChange = (e) => {
    setJobDetails((prevDetails) => ({
      ...prevDetails,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
  };

  return (
    <div className="min-h-screen flex flex-col">
      <section className="flex-1 flex items-center overflow-hidden justify-center relative">
        <main className="flex items-center justify-center px-8 w-full">
          <div className="lg:w-3/4 w-full">
            <div className="relative flex items-center flex-col justify-center md:mt-10">
              <h1 className="text-center font-[500] text-gray-800 mt-10 md:text-4xl text-3xl z-10">
                Create Jobs
              </h1>
              <form
                onSubmit={handleSubmit}
                className="space-y-2 md:w-1/2 w-full border mx-auto p-4 rounded-lg shadow-lg my-4 z-10 bg-white create-jobs"
              >
                <div className="flex flex-col sm:flex-row gap-2 create-jobs ">
                  <Input
                    type="text"
                    name="title"
                    placeholder="Job Title"
                    value={jobDetails.title}
                    onChange={handleChange}
                    required
                  />
                  <Input
                    type="text"
                    name="location"
                    placeholder="Job Location"
                    value={jobDetails.location}
                    onChange={handleChange}
                    required
                  />
                </div>
                <Textarea
                  name="description"
                  placeholder="Job Description"
                  value={jobDetails.description}
                  onChange={handleChange}
                  className="resize-none"
                />
                <select
                  name="type"
                  value={jobDetails.type}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-lg outline-none bg-white"
                >
                  <option value="" disabled>
                    Select Photography Type
                  </option>
                  <option value="Wedding">Wedding</option>
                  <option value="Portrait">Portrait</option>
                  <option value="Product">Product</option>
                  <option value="Event">Event</option>
                </select>
                <div className="flex items-center gap-2 ">
                  <Label className="flex flex-1 text-[#64748b] border font-[400] rounded-lg p-2 items-center justify-between">
                    Starting date <ChevronRight />
                  </Label>
                  <Input
                    type="date"
                    name="date"
                    value={jobDetails.date}
                    onChange={handleChange}
                    className="flex-1 text-[#64748b] border font-[400]"
                    required
                  />
                </div>
                <div className="flex flex-row gap-2">
                  <Input
                    type="number"
                    name="budget"
                    placeholder="Budget"
                    value={jobDetails.budget}
                    onChange={handleChange}
                  />
                  <Input
                    type="text"
                    name="duration"
                    placeholder="Duration"
                    value={jobDetails.duration}
                    onChange={handleChange}
                  />
                </div>
                <Textarea
                  name="equipment"
                  placeholder="Required Equipment"
                  value={jobDetails.equipment}
                  onChange={handleChange}
                  className="resize-none"
                />
                <Textarea
                  name="additionalRequirements"
                  placeholder="Additional Requirements"
                  value={jobDetails.additionalRequirements}
                  onChange={handleChange}
                  className="resize-none"
                />
                <div className="flex flex-col sm:flex-row gap-2">
                  <Input
                    type="email"
                    name="contactEmail"
                    placeholder="Email address"
                    value={jobDetails.contactEmail}
                    onChange={handleChange}
                    required
                  />
                  <Input
                    type="tel"
                    name="contactPhone"
                    placeholder="Phone"
                    value={jobDetails.contactPhone}
                    onChange={handleChange}
                    required
                  />
                </div>
                <Button type="submit" className="w-full">
                  Submit Job
                </Button>
              </form>
            </div>
          </div>
        </main>
        <img
          src="bg.png"
          className="absolute top-0 left-0 opacity-30 object-cover -z-5 w-full h-full"
          alt=""
        />
      </section>
    </div>
  );
};

export default CreateJobs;
