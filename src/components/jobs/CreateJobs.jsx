import { useState } from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";

const CreateJobs = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    portfolioURL: "",
    sampleWork: null,
    resume: null,
    coverLetter: "",
    yearsOfExperience: "",
    specialization: "",
    equipment: "",
    software: "",
    preferredStartDate: "",
    availability: "",
    referenceName: "",
    referenceContact: "",
    certifications: "",
    awards: "",
    personalStatement: "",
    consent: false,
  });

  const handleChange = (e) => {
    const { name, value, type, files, checked } = e.target;
    setFormData({
      ...formData,
      [name]:
        type === "file" ? files[0] : type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 p-6 max-w-4xl rounded-2xl cursive--font bg-white dark:bg-black/50 shadow-md shadow-black/20 dark:shadow-white/20 mx-4 md:mx-auto border mt-32 mb-10"
    >
      <h1 className="md:text-3xl text-2xl text-center font-bold">
        Create your job here
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="space-y-4">
          <div>
            <Label
              htmlFor="fullName"
              className="block text-sm font-medium text-gray-700 dark:text-zinc-200"
            >
              Full Name:
            </Label>
            <Input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm  text-sm"
            />
          </div>
          <div>
            <Label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 dark:text-zinc-200"
            >
              Email Address:
            </Label>
            <Input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm  sm:text-sm"
            />
          </div>
          <div>
            <Label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700 dark:text-zinc-200"
            >
              Phone Number:
            </Label>
            <Input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm  sm:text-sm"
            />
          </div>
          <div>
            <Label
              htmlFor="address"
              className="block text-sm font-medium text-gray-700 dark:text-zinc-200"
            >
              Address:
            </Label>
            <Input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm  sm:text-sm"
            />
          </div>
          <div>
            <Label
              htmlFor="portfolioURL"
              className="block text-sm font-medium text-gray-700 dark:text-zinc-200"
            >
              Portfolio URL:
            </Label>
            <Input
              type="url"
              id="portfolioURL"
              name="portfolioURL"
              value={formData.portfolioURL}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm  sm:text-sm"
            />
          </div>
          <div>
            <Label
              htmlFor="sampleWork"
              className="block text-sm font-medium text-gray-700 dark:text-zinc-200"
            >
              Upload Sample Work:
            </Label>
            <Input
              type="file"
              id="sampleWork"
              name="sampleWork"
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
            />
          </div>
          <div>
            <Label
              htmlFor="resume"
              className="block text-sm font-medium text-gray-700 dark:text-zinc-200"
            >
              Resume/CV Upload:
            </Label>
            <Input
              type="file"
              id="resume"
              name="resume"
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
            />
          </div>
          <div>
            <Label
              htmlFor="coverLetter"
              className="block text-sm font-medium text-gray-700 dark:text-zinc-200"
            >
              Cover Letter:
            </Label>
            <Textarea
              id="coverLetter"
              name="coverLetter"
              value={formData.coverLetter}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm  sm:text-sm"
            />
          </div>
          <div>
            <Label
              htmlFor="yearsOfExperience"
              className="block text-sm font-medium text-gray-700 dark:text-zinc-200"
            >
              Years of Experience:
            </Label>
            <Input
              type="number"
              id="yearsOfExperience"
              name="yearsOfExperience"
              value={formData.yearsOfExperience}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm  sm:text-sm"
            />
          </div>
          <div>
            <Label
              htmlFor="preferredStartDate"
              className="block text-sm font-medium text-gray-700 dark:text-zinc-200"
            >
              Preferred Start Date:
            </Label>
            <Input
              type="date"
              id="preferredStartDate"
              name="preferredStartDate"
              value={formData.preferredStartDate}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm  sm:text-sm"
            />
          </div>
        </div>
        <div className="space-y-4">
          <div>
            <Label
              htmlFor="specialization"
              className="block text-sm font-medium text-gray-700 dark:text-zinc-200"
            >
              Specialization:
            </Label>
            <Input
              type="text"
              id="specialization"
              name="specialization"
              value={formData.specialization}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm  sm:text-sm"
            />
          </div>
          <div>
            <Label
              htmlFor="equipment"
              className="block text-sm font-medium text-gray-700 dark:text-zinc-200"
            >
              Photography Equipment Used:
            </Label>
            <Input
              type="text"
              id="equipment"
              name="equipment"
              value={formData.equipment}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm  sm:text-sm"
            />
          </div>
          <div>
            <Label
              htmlFor="software"
              className="block text-sm font-medium text-gray-700 dark:text-zinc-200"
            >
              Software Proficiency:
            </Label>
            <Input
              type="text"
              id="software"
              name="software"
              value={formData.software}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm  sm:text-sm"
            />
          </div>

          <div>
            <Label
              htmlFor="availability"
              className="block text-sm font-medium text-gray-700 dark:text-zinc-200"
            >
              Availability for Work:
            </Label>
            <Input
              type="text"
              id="availability"
              name="availability"
              value={formData.availability}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm  sm:text-sm"
            />
          </div>
          <div>
            <Label
              htmlFor="referenceName"
              className="block text-sm font-medium text-gray-700 dark:text-zinc-200"
            >
              Reference Name:
            </Label>
            <Input
              type="text"
              id="referenceName"
              name="referenceName"
              value={formData.referenceName}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm  sm:text-sm"
            />
          </div>
          <div>
            <Label
              htmlFor="referenceContact"
              className="block text-sm font-medium text-gray-700 dark:text-zinc-200"
            >
              Reference Contact Information:
            </Label>
            <Input
              type="text"
              id="referenceContact"
              name="referenceContact"
              value={formData.referenceContact}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm  sm:text-sm"
            />
          </div>
          <div>
            <Label
              htmlFor="certifications"
              className="block text-sm font-medium text-gray-700 dark:text-zinc-200"
            >
              Certifications:
            </Label>
            <Input
              type="text"
              id="certifications"
              name="certifications"
              value={formData.certifications}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm  sm:text-sm"
            />
          </div>
          <div>
            <Label
              htmlFor="awards"
              className="block text-sm font-medium text-gray-700 dark:text-zinc-200"
            >
              Awards and Recognitions:
            </Label>
            <Textarea
              id="awards"
              name="awards"
              value={formData.awards}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm  sm:text-sm"
            />
          </div>
          <div>
            <Label
              htmlFor="personalStatement"
              className="block text-sm font-medium text-gray-700 dark:text-zinc-200"
            >
              Personal Statement:
            </Label>
            <Textarea
              id="personalStatement"
              name="personalStatement"
              value={formData.personalStatement}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm  sm:text-sm"
            />
          </div>
        </div>
      </div>

      <div className="flex items-center">
        <Input
          type="checkbox"
          id="consent"
          name="consent"
          checked={formData.consent}
          onChange={handleChange}
          className="mr-2 h-4 w-4 border-gray-300 rounded"
        />
        <Label
          htmlFor="consent"
          className="text-sm font-medium text-gray-700 dark:text-zinc-200"
        >
          I agree to the terms and conditions
        </Label>
      </div>

      <Button
        type="submit"
        className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-primary/70 focus:outline-none focus:ring-2 focus:ring-offset-2 "
      >
        Submit
      </Button>
    </form>
  );
};

export default CreateJobs;
