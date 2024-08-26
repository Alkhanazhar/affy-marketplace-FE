/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { skills } from "../../constants/constatns";
import { MapPin, Pencil, Trash, Upload } from "lucide-react";
import { useState } from "react";

const ProfilePage = () => {
  return (
    <div className="py-32 px-4 md:px-0">
      <Header />
      <div className="max-w-7xl mx-auto rounded-2xl w-full h-full border overflow-hidden md:p-6 p-4 md:pb-12 pb-4 bg-white shadow-md">
        <div className="hidden md:flex md:flex-row flex-col gap-4">
          <ProfileImageWrapper />
          <UserInfoWrapper />
        </div>
        <div className="flex md:hidden flex-col gap-4">
          <MobileProfileHeader />
          <UserActions />
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
  <div className="flex justify-between md:flex-[1.6] flex-1">
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
    <div className="border-primary border p-2 bg-white rounded-full w-fit absolute bottom-0 right-0 cursor-pointer">
      <Pencil className="text-primary w-3 h-3" />
    </div>
  </div>
);

const UserInfo = () => (
  <div className="flex flex-col justify-between">
    <h1 className="md:text-4xl sm:text-2xl text-xl text-gray-700 font-medium">
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
    <div className="text-primary flex gap-2 font-medium ml-auto cursor-pointer w-fit items-center">
      Share <Upload className="w-5 h-5" />
    </div>
  </div>
);

const Certification = () => (
  <div className="flex flex-col items-center">
    <img
      src="https://img.freepik.com/free-vector/realistic-illustration-gold-cup-with-red-ribbon-winner-leader-champion_1262-13474.jpg"
      className="md:w-32 md:h-32 h-24 w-24"
      alt="Certification"
    />
    <div className="mt-8 text-center max-w-[30rem]">
      <p className="text-base font-[400] leading-6">
        Listing your certifications can help prove your specific knowledge or
        abilities. (+10%) You can add them manually or import them from Credly.
      </p>
      <Button variant="outline" className="mt-4">
        Add Certification
      </Button>
    </div>
  </div>
);

const Experiences = () => (
  <div className="flex flex-col gap-4 items-center w-full">
    {["Company A", "Company B"].map((company, index) => (
      <ExperienceItem key={index} company={company} />
    ))}
  </div>
);

const ExperienceItem = ({ company }) => (
  <div className="flex justify-between w-full items-center">
    <div>
      <h1 className="text-2xl">{company}</h1>
      <p className="my-2 text-sm text-gray-400 font-[400]">
        January - December
      </p>
    </div>
    <div className="flex gap-1">
      <ActionIcon Icon={Pencil} />
      <ActionIcon Icon={Trash} />
    </div>
  </div>
);

const ActionIcon = ({ Icon }) => (
  <div className="border-primary p-2 bg-white rounded-full w-fit border-2 cursor-pointer">
    <Icon className="text-primary w-4 h-4" />
  </div>
);

const SkillsSection = ({ skills }) => {
  const [showMore, setShowMore] = useState(false);

  const displayedSkills = showMore ? skills : skills?.slice(0, 10);

  return (
    <div className="md:p-5 p-4 flex flex-col justify-between mt-8">
      <div className="flex justify-between w-full items-center">
        <h1 className="md:text-2xl text-xl text-neutral-700 font-medium">
          Skills
        </h1>
        <Button className="rounded-full text-xl w-10 h-10">+</Button>
      </div>
      <div className="flex flex-wrap gap-2 my-4">
        {displayedSkills?.map((item, index) => (
          <Button
            size="sm"
            variant="outline"
            key={index}
            className="font-[400]"
          >
            {item}
          </Button>
        ))}
        <h1>{!showMore ? "..." : ""}</h1>
      </div>
      {skills?.length > 10 && (
        <Button
          variant="outline"
          className="mt-4"
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? "Show Less" : "Show More"}
        </Button>
      )}
    </div>
  );
};

const AddExperience = () => (
  <div className="flex flex-col items-center">
    <img
      src="https://static.vecteezy.com/system/resources/previews/008/290/612/non_2x/experience-writing-design-on-white-background-free-vector.jpg"
      className="md:h-32 h-24 mix-blend-darken w-auto"
      alt="Experience"
    />
    <div className="mt-8 text-center max-w-[30rem]">
      <p className="text-base font-[400] leading-6">
        Add any other experiences that help you stand out
      </p>
      <Button variant="outline" className="mt-4">
        Add Experience
      </Button>
    </div>
  </div>
);

const ProfileSection = ({ title, subTitle, children }) => (
  <div className="flex mt-8 border rounded-3xl flex-col">
    <div className="border-b md:p-5 p-4 flex justify-between">
      <div>
        <h1 className="md:text-3xl text-2xl text-neutral-700 font-medium">
          {title}
        </h1>
        {subTitle && <p className="text-gray-500">{subTitle}</p>}
      </div>
    </div>
    <div className="p-8">{children}</div>
  </div>
);

export default ProfilePage;
