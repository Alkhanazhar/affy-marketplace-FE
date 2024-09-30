import { Briefcase, ClipboardList, Edit, PlusCircle } from "lucide-react"; // Existing imports
import { BarChart, Card, PageTitle } from "./Dashboard";
import { CardContent } from "@/components/ui/card";

const EmployeeDashboard = () => {
  const cardData = [
    {
      label: "Jobs Created",
      amount: "25",
      discription: "+5 from last month",
      icon: Briefcase, // Represents created jobs
    },
    {
      label: "Pending Jobs",
      amount: "7",
      discription: "Jobs awaiting approval",
      icon: ClipboardList, // Represents jobs awaiting approval
    },
    {
      label: "Jobs Edited",
      amount: "12",
      discription: "+3 from last month",
      icon: Edit, // Represents jobs that have been edited
    },
    {
      label: "New Jobs This Month",
      amount: "+8",
      discription: "Jobs created this month",
      icon: PlusCircle, // Represents new jobs being added
    },
  ];

  return (
    <div>
      <PageTitle title={"Employee Dashboard"} />
      <div className="mt-8">
        <section className="grid w-full grid-cols-1 gap-4 gap-x-8 transition-all sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 ">
          {cardData.map((data, index) => (
            <Card
              key={index}
              amount={data.amount}
              discription={data.discription}
              icon={data.icon}
              label={data.label}
            />
          ))}
        </section>
      </div>
      <section className="grid grid-cols-1 gap-4 transition-all lg:grid-cols-2 rounded-md">
        <CardContent className="bg-white dark:bg-slate-900 border mt-8 rounded-xl shadow-lg">
          <p className="p-4 font-semibold">Overview</p>
          <BarChart />
        </CardContent>
        <CardContent className="bg-white dark:bg-slate-900 border overflow-scroll mt-8 rounded-xl shadow-lg">
            all created jobs list
            pending
        </CardContent>
      </section>
    </div>
  );
};

export default EmployeeDashboard;
