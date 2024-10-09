import { Briefcase, ClipboardList, Edit, PlusCircle } from "lucide-react";
import { BarChart, Card, PageTitle } from "./Dashboard";
import { CardContent } from "@/components/ui/card";

const EmployeeDashboard = () => {
  const cardData = [
    {
      label: "Jobs Created",
      // amount: jobsCreated.toString(),
      description: "+5 from last month",
      icon: Briefcase,
    },
    {
      label: "Pending Jobs",
      amount: "7",
      description: "Jobs awaiting approval",
      icon: ClipboardList,
    },
    {
      label: "Jobs Edited",
      amount: "12",
      description: "+3 from last month",
      icon: Edit,
    },
    {
      label: "New Jobs This Month",
      amount: "+8",
      description: "Jobs created this month",
      icon: PlusCircle,
    },
  ];

  return (
    <div className="cursive--font ">
     
      <PageTitle title={"Employee Dashboard"} />
      <div className="mt-8">
        <section className="grid w-full grid-cols-1 gap-4 gap-x-8 transition-all sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 ">
          {cardData.map((data, index) => (
            <Card
              key={index}
              amount={data.amount}
              description={data.description}
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
      </section>
    </div>
  );
};

export default EmployeeDashboard;
