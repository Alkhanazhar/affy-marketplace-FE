/* eslint-disable no-unused-vars */

import { Search } from "lucide-react";
import { useMemo, useState } from "react";
import {
  communitiesConstant,
  photographyCommunities,
} from "../../../constants/constatns";
import { Link } from "react-router-dom";
import Card from "../shared/Card";
import { Input } from "../ui/input";

const Community = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const filteredCommunities = useMemo(() => {
    return photographyCommunities.filter((community) =>
      community.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Anonymous");
  const [communities, setCommunities] = useState(communitiesConstant);

  function handleToggle() {
    setIsAnonymous((prev) => !prev);
  }

  return (
    <div className="pt-16 pb-16 min-h-screen ">
      <div className="p-8 flex justify-center items-center flex-col space-y-6 leading-none relative">
        <div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-center bg-clip-text text-transparent leading-none bg-gradient-to-tr from-gray-400 to-primary pb-2">
            Discover communities
          </h1>
          <p className="font-bold text-2xl text-center leading-none">
            or &nbsp;
            <Link
              to="/create-community"
              className="text-primary font-bold hover:border-b border-primary"
            >
              create your own
            </Link>
          </p>
        </div>
        <div className="flex gap-3 items-center bg-white px-6 py-2 rounded-lg shadow-md shadow-[#00000047] lg:w-4/12 w-10/12 border-t ">
          <Search className="text-gray-500" />
          <Input
            type="text"
            className="w-full outline-none border-none"
            placeholder="Search for communities..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>
      <div className="md:max-w-5xl max-w-3xl md:mx-auto grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-3 lg:gap-4 mx-4 gap-4">
        {filteredCommunities.map(({ slug, name, description, images }) => {
          return (
            <Card
              name={name}
              key={slug}
              slug={slug}
              description={description}
              image={images[0]}
            />
          );
        })}
      </div>
    </div>
  );
};

export const AnonymousIcon = ({ visible }) => {
  if (!visible) return null;

  return (
    <div className="rounded-full border">
      <svg
        width={40}
        height={40}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-live="polite"
        aria-hidden="false"
        className="icon_Icon__ptI3R"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16.378 17.797a1.905 1.905 0 1 0 0-3.81 1.905 1.905 0 0 0 0 3.81Zm-8.756 0a1.905 1.905 0 1 0 0-3.81 1.905 1.905 0 0 0 0 3.81Zm12.162-1.905a3.405 3.405 0 1 1-6.811 0 3.405 3.405 0 0 1 6.81 0Zm-8.757 0a3.405 3.405 0 1 1-6.81 0 3.405 3.405 0 0 1 6.81 0Z"
          fill="currentColor"
        />
        <path
          d="M10.542 15.167h2.916v1.5h-2.916v-1.5ZM2.042 10.792a.75.75 0 0 1 .75-.75h18.416a.75.75 0 1 1 0 1.5H2.792a.75.75 0 0 1-.75-.75Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15.583 10.042v-.25a3.583 3.583 0 1 0-7.166 0v.25h7.166ZM12 4.708a5.083 5.083 0 0 0-5.083 5.084v1.75h10.166v-1.75A5.083 5.083 0 0 0 12 4.708Z"
          fill="currentColor"
        />
      </svg>
    </div>
  );
};

export const Posts = () => {
  return <div className="lg:p-4 p-2 "></div>;
};
export default Community;
