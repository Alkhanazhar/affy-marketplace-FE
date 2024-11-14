import { Briefcase, ClipboardList, User } from "lucide-react";
import { BarChart, Card, PageTitle } from "./Dashboard";
import { CardContent } from "@/components/ui/card";
import { useContext } from "react";
import { AuthContext } from "@/context/AuthContext";
import { UserInfo } from "./ProfilePage";
import { baseUrl } from "@/App";

const EmployeeDashboard = () => {
  const cardData = [
    {
      label: "Jobs Created",
      // amount: jobsCreated.toString(),
      count: 0,
      description: "Here are the total jobs you have created for the user:",
      icon: Briefcase,
    },
    {
      label: "Job Application",
      count: "7",
      icon: ClipboardList,
      description:
        "Here are the total number of applicants on your created jobs for the user:",
    },
  ];
  const { userInfo } = useContext(AuthContext);
  const image = baseUrl + "uploads/" + userInfo?.avatar;
  return (
    <div className="cursive--font pt-20 md:pt-0">
      <PageTitle title={"Employee Dashboard"} />
      <div className="flex w-full flex-col md:flex-row gap-4 md:pt-5 mt-5 md:mt-0">
        <div className="md:w-1/2 relative overflow-hidden shadow-md rounded-3xl">
          <div className="flex  gap-4 border  rounded-3xl  bg-white w-full ">
            <div className=" flex items-center justify-center p-4">
              <img
                src={image}
                className="w-40 h-40 object-cover rounded-full "
              />
            </div>
            <div className="flex items-center px-4 ">
              <div>
                <UserInfo userInfo={userInfo} />
                <div className="text-sm text-gray-500">{userInfo?.email}</div>
                <div className="text-sm text-gray-500">
                  {new Date(userInfo?.createdAt).toUTCString()}
                </div>
              </div>
            </div>
            <User className="flex absolute top-0 right-[0] text-gray-400/20 w-64 h-64" />
          </div>
        </div>
        <div className="md:w-1/2">
          <div className="flex gap-4 items-center  h-full ">
            {cardData?.map((data, index) => {
              return (
                <Card
                  key={index}
                  amount={data?.count}
                  description={data?.description}
                  icon={data.icon}
                  label={data.label}
                />
              );
            })}
          </div>
        </div>
      </div>
      <section className="grid grid-cols-1 gap-4 transition-all lg:grid-cols-2 rounded-3xl">
        <CardContent className="bg-white dark:bg-slate-900 border mt-8 rounded-xl shadow-lg">
          <p className="p-4 font-semibold">Overview</p>
          <BarChart />
        </CardContent>
      </section>
    </div>
  );
};

export default EmployeeDashboard;
