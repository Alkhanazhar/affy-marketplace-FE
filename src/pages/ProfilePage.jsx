/* eslint-disable no-unused-vars */
import { Button } from "@/components/ui/button";
import { skills } from "../../constants/constatns";
import { MapPin, UserPen, Trash, Upload, Plus, Pen } from "lucide-react";
import { useEffect, useState } from "react";

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
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { toast } from "@/components/ui/use-toast";
import { useForm } from "react-hook-form";

const ProfilePage = () => {
  return (
    <div className="py-20 pt-32 px-4 md:px-0 cursive--font">
      <div className="max-w-7xl mx-auto rounded-2xl w-full h-full border overflow-hidden md:p-6 p-4 md:pb-12 pb-4 bg-white dark:bg-slate-950 shadow-md">
        <div className="hidden md:flex md:flex-row flex-col gap-4">
          <ProfileImageWrapper />
          <UserInfoWrapper />
        </div>
        <div className="flex md:hidden flex-col gap-4">
          <MobileProfileHeader />
          <UserActions />
        </div>
        <div className="flex mt-4 border rounded-2xl divide-x divide-neutral-200">
          <div className="w-1/2 p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="md:text-2xl text-xl font-[500]">Educations</h2>
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button
                    variant=""
                    className="mt-4 rounded-full w-10 h-10 p-2"
                  >
                    <Plus className="w-6 h-6" />
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle className="md:text-3xl text-center text-2xl">
                      Add your Education
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                      <div className="my-4 flex flex-col gap-4 ">
                        <Label className="font-[400] text-sm">Subject</Label>
                        <Input />
                      </div>
                      <div className="my-4 flex flex-col gap-4">
                        <Label className="font-[400] text-sm">
                          Description
                        </Label>
                        <Textarea />
                      </div>
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction asChild>
                      <Button>Add your Education</Button>
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center text-xs md:text-base text-neutral-600  dark:text-neutral-200">
                <span>Schools Mp Bhopal</span>
                <ActionIcon Icon={Pen} padding={2} size={4} />
              </div>
              <div className="flex justify-between text-xs md:text-base items-center text-neutral-600  dark:text-neutral-200">
                <span>College Btech Mp Bhopal</span>
                <ActionIcon Icon={Pen} padding={2} size={4} />
              </div>
            </div>
          </div>
          <div className="w-1/2 p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="md:text-2xl text-xl font-[500]">Languages</h2>
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button
                    variant=""
                    className="mt-4 rounded-full w-10 h-10 p-2"
                  >
                    <Plus className="w-6 h-6" />
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle className="md:text-3xl text-center text-2xl  dark:text-neutral-200">
                      Add your Certificates
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                      <div className="my-4 flex flex-col gap-4 ">
                        <Label className="font-[400] text-sm">Subject</Label>
                        <Input />
                      </div>
                      <div className="my-4 flex flex-col gap-4">
                        <Label className="font-[400] text-sm">
                          Description
                        </Label>
                        <Textarea />
                      </div>
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction asChild>
                      <Button>Add your Category</Button>
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center text-xs md:text-base text-neutral-600  dark:text-neutral-200">
                <span>
                  English: <span className="text-xs">Proficiency</span>
                </span>
                <ActionIcon Icon={Pen} padding={2} size={4} />
              </div>
              <div className="flex justify-between items-center text-xs md:text-base text-neutral-600  dark:text-neutral-200">
                <span>
                  Hindi: <span className="text-xs">Proficiency</span>
                </span>
                <ActionIcon Icon={Pen} padding={2} size={4} />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4 border rounded-3xl flex-col gap-4 ">
          <div className="flex justify-between items-center md:p-6 p-4">
            <div>
              <h1 className="md:text-2xl text-xl">Your title</h1>
              <div className="flex">
                {<h2>your something something title</h2>}
              </div>
            </div>
            <ActionIcon Icon={UserPen}></ActionIcon>
          </div>
          <hr />
          <div className="flex justify-between items-center md:p-6 p-4">
            <div>
              <h1 className="md:text-2xl text-xl">Profile overview</h1>
              <div className="flex">
                {<h2>your something something profile</h2>}
              </div>
            </div>
            <ActionIcon Icon={UserPen}></ActionIcon>
          </div>
        </div>
        <SkillsSection skills={skills} />
        <ProfileSection title="Certification">
          <Certification />
        </ProfileSection>
        <ProfileSection title="Employment History">
          <Experiences />
        </ProfileSection>
        <ProfileSection title="Experience">
          <AddExperience />
        </ProfileSection>
        <ProfileSection title="Portfolio">
          <Portfolios />
        </ProfileSection>
        <ProfileSection title="Projects">
          <Projects />
        </ProfileSection>
      </div>
    </div>
  );
};

const ProfileImageWrapper = () => (
  <div className="md:flex-[0.2] flex-1">
    <ProfileImage />
  </div>
);

const UserInfoWrapper = () => (
  <div className="flex h-20 justify-between md:flex-[1.6] flex-1 pr-8">
    <UserInfo />
    <UserActions />
  </div>
);

const MobileProfileHeader = () => (
  <div className="md:flex-[0.2] flex w-full justify-between flex-1">
    <ProfileImage />
    <UserInfo />
  </div>
);

const ProfileImage = () => (
  <div className="relative w-fit">
    <div className="top-2 left-2 bg-primary w-4 h-4 absolute rounded-full"></div>
    <img
      src="https://www.upwork.com/profile-portraits/c1rR2GIyXNyaR_mmAFSWCei61b6sFHYbqQDJcRGijFpwyjY3RDDa2IsGe5B9vaLfKP"
      alt="Profile"
      className="w-24 h-24 rounded-full"
    />
    <div className="border-primary border bg-white rounded-full w-fit absolute bottom-0 right-0 cursor-pointer">
      <ActionIcon size={4} Icon={UserPen} />
    </div>
  </div>
);

const UserInfo = () => (
  <div className="flex flex-col justify-between">
    <h1 className="md:text-4xl sm:text-2xl text-xl text-gray-700  dark:text-neutral-200 font-medium">
      Azhar K.
    </h1>
    <div className="text-gray-400 text-sm md:text-base flex items-center gap-1">
      <MapPin /> Bhopal, India - 3:08 PM local time
    </div>
  </div>
);

const UserActions = () => (
  <div className="flex md:flex-col gap-4 h-full justify-between">
    <div className="flex justify-between gap-2">
      <Button className="rounded-md" size="sm">
        See public view
      </Button>
      <Button className="rounded-md" size="sm">
        Profile Settings
      </Button>
    </div>
    <div className="flex gap-2 ml-auto">
      <Button className="rounded-md  bg-red-500 hover:bg-red-600 " size="sm">
        <Trash size={15} className="text-white  dark:text-neutral-200 " />
      </Button>
      <Button className="rounded-md bg-primary text-white" size="sm">
        <Upload size={15} />
      </Button>
    </div>
  </div>
);

const SkillsSection = ({ skills }) => {
  const userInfo = jwtDecode(localStorage.getItem("token"));
  console.log(userInfo, "userInfo");
  const [showAllSkills, setShowAllSkills] = useState(false);
  const visibleSkills = showAllSkills ? skills : skills.slice(0, 10);
  const [createSkill, setCreateSkills] = useState("");
  const addSkills = async () => {
    try {
      const res = await axios.post(
        "/api/web/user/" + userInfo.id + "/skill",
        {
          skills: createSkill,
        },
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
      console.log(res);
      setCreateSkills("");
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    try {
      console.log(createSkill);
    } catch (error) {
      console.log(error.message);
    }
  }, [createSkill]);
  return (
    <>
      <div className="mt-4 border rounded-3xl">
        <AlertDialog>
          <div className="flex justify-between items-center md:p-4 p-4">
            <div className="md:text-2xl text-xl">Skills</div>
            <AlertDialogTrigger asChild>
              <Button variant="" className="rounded-full w-10 h-10 p-2">
                <Plus className="w-6 h-6" />
              </Button>
            </AlertDialogTrigger>
          </div>
          <hr />
          <div className="md:p-6 p-4">
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle className="md:text-3xl text-center text-2xl  dark:text-neutral-200">
                  Add your Skills
                </AlertDialogTitle>
                <AlertDialogDescription>
                  <div className="my-4 flex flex-col gap-4 ">
                    <Label className="font-[400] text-sm">Skills</Label>
                    <Input onChange={(e) => setCreateSkills(e.target.value)} />
                  </div>
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction asChild>
                  <Button onClick={addSkills}>Add your Skills</Button>
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
            <div className="flex flex-wrap items-center gap-3 ">
              {visibleSkills.map((skill) => (
                <Button
                  key={skill}
                  variant="outline"
                  size="sm"
                  className="flex justify-between items-center border text-xs md:text-sm text-neutral-600  dark:text-neutral-200 "
                >
                  <span>{skill}</span>
                </Button>
              ))}
              {skills.length > 10 && (
                <div className="text-center flex justify-center w-full">
                  <Button
                    onClick={() => setShowAllSkills(!showAllSkills)}
                    variant="outline"
                    size="sm"
                    className="text-primary"
                  >
                    {showAllSkills ? "Show Less" : "Show More"}
                  </Button>
                </div>
              )}
            </div>
          </div>
        </AlertDialog>
      </div>
    </>
  );
};

const ActionIcon = ({ Icon, padding = 2, size = 4 }) => (
  <div
    className={`p-${padding} rounded-full bg-primary text-white cursor-pointer hover:bg-black/30`}
  >
    <Icon className={`w-${size} h-${size} cursor-pointer`} />
  </div>
);

const ProfileSection = ({ title, children }) => (
  <div className="mt-4 border rounded-3xl">
    <div className="flex justify-between items-center md:p-6 p-4">
      <h2 className="md:text-2xl text-xl">{title}</h2>
    </div>
    <hr />
    <div className="md:p-6 p-4">{children}</div>
  </div>
);

const Certification = () => (
  <div className="space-y-4">
    <div className="flex justify-between items-center text-xs md:text-base text-neutral-600 dark:text-neutral-200">
      <span>Certified Photography Professional</span>
      <ActionIcon Icon={UserPen}></ActionIcon>
    </div>
    <div className="flex justify-between text-xs md:text-base items-center text-neutral-600  dark:text-neutral-200">
      <span>Adobe Photoshop Certification</span>
      <ActionIcon Icon={UserPen}></ActionIcon>
    </div>
    <AlertDialog>
      <div className="flex justify-center">
        <AlertDialogTrigger asChild>
          <Button variant="outline" className="mt-4 mx-auto">
            Add Certification
          </Button>
        </AlertDialogTrigger>
      </div>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="md:text-3xl text-center text-2xl">
            Add your Certicates
          </AlertDialogTitle>
          <AlertDialogDescription>
            <div className="my-4 flex flex-col gap-4 ">
              <Label className="font-[400] text-sm">Subject</Label>
              <Input />
            </div>
            <div className="my-4 flex flex-col gap-4">
              <Label className="font-[400] text-sm">Desc</Label>
              <Textarea />
            </div>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction asChild>
            <Button>Add your Category</Button>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  </div>
);

const Experiences = () => {
  const [employment, setEmployment] = useState({
    company: "",
    city: "",
    country: "",
    title: "",
    from_month: "",
    from_year: "",
    to_month: "",
    to_year: "",
    currently_working: false,
    description: "",
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: employment,
  });

  const onSubmit = async(data) => {
       try {
      setLoading(true);
      // Replace this URL with your actual API endpoint
      const response = await axios.post(
        "/api/web/user/" + user.id + "/employment-history",
        data
      );
      console.log(response.data);
      // Handle success - Call the passed-in handler if needed
      toast.success("Employment history added successfully!");
    } catch (error) {
      // Error handling - Display a toast or an error message
      if (error.response) {
        toast.error(`Error: ${error.response.data.message}`);
      } else {
        toast.error("Something went wrong. Please try again later.");
      }
    } finally {
      setLoading(false);
    }
  };
  const [loading, setLoading] = useState(false);
  const user = jwtDecode(localStorage.getItem("token"));
  console.log(user);
 

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center text-xs md:text-base text-neutral-600  dark:text-neutral-200">
        <span>Frontend Developer at Affy Cloud</span>
        <ActionIcon Icon={UserPen}></ActionIcon>
      </div>
      <div className="flex justify-between items-center text-xs md:text-base text-neutral-600  dark:text-neutral-200">
        <span>Photography Assistant at Local Studio</span>
        <ActionIcon Icon={UserPen}></ActionIcon>
      </div>
    
      <AlertDialog>
        <div className="flex justify-center">
          <AlertDialogTrigger asChild>
            <Button variant="outline" className="mt-4 mx-auto">
              Add your Job History
            </Button>
          </AlertDialogTrigger>
        </div>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className="md:text-3xl text-center text-2xl">
              Add your Certicates
            </AlertDialogTitle>
            <AlertDialogDescription>

  
    <form onSubmit={handleSubmit(onSubmit)} className="employment-form grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="flex flex-col">
        <Label className="font-[400] text-sm">Company</Label>
        <Input {...register("company", { required: true })} />
        {errors.company && <span className="text-red-500">Company is required</span>}
      </div>

      <div className="flex flex-col">
        <Label className="font-[400] text-sm">City</Label>
        <Input {...register("city", { required: true })} />
        {errors.city && <span className="text-red-500">City is required</span>}
      </div>

      <div className="flex flex-col">
        <Label className="font-[400] text-sm">Country</Label>
        <Input {...register("country", { required: true })} />
        {errors.country && <span className="text-red-500">Country is required</span>}
      </div>

      <div className="flex flex-col">
        <Label className="font-[400] text-sm">Title</Label>
        <Input {...register("title", { required: true })} />
        {errors.title && <span className="text-red-500">Title is required</span>}
      </div>

      <div className="flex flex-col">
        <Label className="font-[400] text-sm">From Month</Label>
        <Input type="number" {...register("from_month", { required: true })} />
        {errors.from_month && <span className="text-red-500">From Month is required</span>}
      </div>

      <div className="flex flex-col">
        <Label className="font-[400] text-sm">From Year</Label>
        <Input type="number" {...register("from_year", { required: true })} />
        {errors.from_year && <span className="text-red-500">From Year is required</span>}
      </div>

      <div className="flex flex-col">
        <Label className="font-[400] text-sm">To Month</Label>
        <Input type="number" {...register("to_month")} />
      </div>

      <div className="flex flex-col">
        <Label className="font-[400] text-sm">To Year</Label>
        <Input type="number" {...register("to_year")} />
      </div>

      <div className="flex gap-4 items-center justify-between">
        <Label className="font-[400] text-sm">Currently Working</Label>
        <input type="checkbox" {...register("currently_working")} />
      </div>

      <div className="flex flex-col md:col-span-2">
        <Label className="font-[400] text-sm">Description</Label>
        <Textarea {...register("description")} />
      </div>

      <div className="md:col-span-2">
        <button type="submit" className="btn-primary">
          Add Employment History
        </button>
      </div>
    </form>

            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            {/* <AlertDialogAction asChild> */}
              <Button onClick={handleSubmit} disabled={loading}>
                Add Employment History
              </Button>
            {/* </AlertDialogAction> */}
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

const AddExperience = () => (
  <div className="space-y-4">
    <div className="flex justify-between items-center text-xs md:text-base text-neutral-600  dark:text-neutral-200">
      <span>Freelance Photographer</span>
      <ActionIcon Icon={UserPen}></ActionIcon>
    </div>
    <AlertDialog>
      <div className="flex justify-center">
        <AlertDialogTrigger asChild>
          <Button variant="outline" className="mt-4 mx-auto">
            Add Experience
          </Button>
        </AlertDialogTrigger>
      </div>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="md:text-3xl text-center text-2xl">
            Add your Certicates
          </AlertDialogTitle>
          <AlertDialogDescription>
            <div className=" flex flex-col gap-4 ">
              <Label className="font-[400] text-sm">Subject</Label>
              <Input />
            </div>
            <div className=" flex flex-col gap-4">
              <Label className="font-[400] text-sm">Desc</Label>
              <Textarea />
            </div>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction asChild>
            <Button>Add your Category</Button>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  </div>
);

const Portfolios = () => (
  <div className="space-y-4">
    <div className="flex justify-between items-center text-xs md:text-base text-neutral-600  dark:text-neutral-200">
      <span>Wedding Photography Portfolio</span>
      <ActionIcon Icon={UserPen}></ActionIcon>
    </div>
    <div className="flex justify-between items-center text-xs md:text-base text-neutral-600  dark:text-neutral-200">
      <span>Commercial Photography Portfolio</span>
      <ActionIcon Icon={UserPen}></ActionIcon>
    </div>
    <AlertDialog>
      <div className="flex justify-center">
        <AlertDialogTrigger asChild>
          <Button variant="outline" className="mt-4 mx-auto">
            Add your Portfolios
          </Button>
        </AlertDialogTrigger>
      </div>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="md:text-3xl text-center text-2xl">
            Add your Certicates
          </AlertDialogTitle>
          <AlertDialogDescription>
            <div className="my-4 flex flex-col gap-4 ">
              <Label className="font-[400] text-sm">Subject</Label>
              <Input />
            </div>
            <div className="my-4 flex flex-col gap-4">
              <Label className="font-[400] text-sm">Desc</Label>
              <Textarea />
            </div>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction asChild>
            <Button>Add your Category</Button>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  </div>
);

const Projects = () => (
  <div className="space-y-4">
    <div className="flex justify-between items-center text-xs md:text-base text-neutral-600  dark:text-neutral-200">
      <span>Personal Photography Blog</span>
      <ActionIcon Icon={UserPen}></ActionIcon>
    </div>
    <div className="flex justify-between items-center text-xs md:text-base text-neutral-600  dark:text-neutral-200">
      <span>Online Portfolio Website</span>
      <ActionIcon Icon={UserPen}></ActionIcon>
    </div>
    <AlertDialog>
      <div className="flex justify-center">
        <AlertDialogTrigger asChild>
          <Button variant="outline" className="mt-4 mx-auto">
            Add Your Projects
          </Button>
        </AlertDialogTrigger>
      </div>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="md:text-3xl text-center text-2xl">
            Add your Certicates
          </AlertDialogTitle>
          <AlertDialogDescription>
            <div className="my-4 flex flex-col gap-4 ">
              <Label className="font-[400] text-sm">Subject</Label>
              <Input />
            </div>
            <div className="my-4 flex flex-col gap-4">
              <Label className="font-[400] text-sm">Desc</Label>
              <Textarea />
            </div>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction asChild>
            <Button>Add your Category</Button>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  </div>
);

export default ProfilePage;
