import { cn } from "@/lib/utils";
import { Activity, CreditCard, DollarSign, Users } from "lucide-react";
import { Bar, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { BarChart as BarGraph } from "recharts";

const Dashboard = () => {
  const cardData = [
    {
      label: "Total Revenue",
      amount: "$45,231.89",
      discription: "+20.1% from last month",
      icon: DollarSign,
    },
    {
      label: "Subscription",
      amount: "+2350",
      discription: "+180.1% from last month",
      icon: Users,
    },
    {
      label: "Sales",
      amount: "+12,234",
      discription: "+19% from last month",
      icon: CreditCard,
    },
    {
      label: "Active Mow",
      amount: "+573",
      discription: "+201 from last month",
      icon: Activity,
    },
  ];
  const userSalesData = [
    {
      name: "Olivia Martin",
      email: "olivia.martin@email.com",
      salesAmount: "+$1,999.00",
    },
    {
      name: "Jackson Lee",
      email: "isabella.nguyen@email.com",
      salesAmount: "+$1,999.00",
    },
    {
      name: "Isabella Nguyen",
      email: "isabella.nguyen@email.com",
      salesAmount: "+$39.00",
    },
    {
      name: "William Kim",
      email: "will@email.com",
      salesAmount: "+$299.00",
    },
    {
      name: "Sofia Davis",
      email: "sofia.davis@email.com",
      salesAmount: "+$39.00",
    },
  ];
  return (
    <div className="flex flex-col gap-5 w-full relative cursive--font">
      <PageTitle title="Dashboard" />

      <section className="grid w-full grid-cols-1 gap-4 gap-x-8 transition-all sm:grid-cols-2 xl:grid-cols-4">
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
      <section className="grid grid-cols-1 gap-4 transition-all lg:grid-cols-2">
        <CardContent className="bg-white">
          <p className="p-4 font-semibold">Overview</p>
          <BarChart />
        </CardContent>
        <CardContent className="flex justify-between gap-4 bg-white">
          <section>
            <p>Recent Sales</p>
            <p className="text-sm text-gray-500">
              You made 265 sales this month.
            </p>
          </section>
          {userSalesData.map((data, index) => (
            <SalesCard
              key={index}
              email={data.email}
              name={data.name}
              salesAmount={data.salesAmount}
            />
          ))}
        </CardContent>
      </section>
    </div>
  );
};

export default Dashboard;
export const ReUsableCards = ({ color, children }) => {
  return (
    <div
      className={`bg-gradient-to-r from-${color}-400 to-${color}-500 p-4 rounded-md`}
    >
      {children}
    </div>
  );
};

const data = [
  {
    name: "Jan",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Feb",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Mar",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Apr",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "May",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Jun",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Jul",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Aug",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Sep",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Oct",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Nov",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Dec",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
];

export function BarChart() {
  return (
    <ResponsiveContainer width={"100%"} height={350}>
      <BarGraph data={data}>
        <XAxis
          dataKey={"name"}
          tickLine={false}
          axisLine={false}
          stroke="#888888"
          fontSize={12}
        />
        <YAxis
          tickLine={false}
          axisLine={false}
          stroke="#888888"
          fontSize={12}
          tickFormatter={(value) => `$${value}`}
        />
        <Bar dataKey={"total"} radius={[4, 4, 0, 0]} />
      </BarGraph>
    </ResponsiveContainer>
  );
}

export function Card(props) {
  return (
    <CardContent className="bg-white">
      <section className="flex justify-between gap-2 ">
        <p className="text-base">{props.label}</p>
        <props.icon className="h-5 w-5 text-gray-500" />
      </section>
      <section className="flex flex-col gap-1">
        <h2 className="text-2xl font-semibold">{props.amount}</h2>
        <p className="text-xs text-gray-500">{props.discription}</p>
      </section>
    </CardContent>
  );
}

export function CardContent(props) {
  return (
    <div
      {...props}
      className={cn(
        "flex w-full flex-col gap-3 rounded-xl border p-5 shadow",
        props.className
      )}
    />
  );
}

export function SalesCard(props) {
  return (
    <div className="flex flex-wrap justify-between gap-3 bg-white">
      <section className="flex justify-between gap-3">
        <div className="h-12 w-12 rounded-full bg-gray-100 p-1">
          <img
            src={`https://api.dicebear.com/7.x/notionists/svg?seed=${props.name}`}
            alt="avatar"
            width={200}
            height={200}
          />
        </div>
        <div className="text-sm">
          <p>{props.name}</p>
          <div className="text-ellipsis overflow-hidden whitespace-nowrap w-[120px] sm:w-auto text-gray-400">
            {props.email}
          </div>
        </div>
      </section>
      <p>{props.salesAmount}</p>
    </div>
  );
}

export function PageTitle({ title, classname }) {
  return (
    <h1
      className={cn(
        "lg:text-3xl md:text-2xl text-2xl font-semibold text-primary",
        classname
      )}
    >
      {title}
    </h1>
  );
}
