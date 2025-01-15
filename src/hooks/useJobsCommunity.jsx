import axios from "axios";
import { useEffect, useState } from "react";

export function useJobsCommunity(communityId) {
  const [jobs, setJobs] = useState([]);
  const getFetchJobs = async () => {
    try {
      const response = await axios.get(
        "api/job/community-jobs/" + communityId,
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
      console.log(response);
      setJobs(response.data.meta);
    } catch (error) {
      console.log(error, "Error getting jobs");
    }
  };
  useEffect(() => {
    getFetchJobs();
  }, [communityId]);
  return { jobs };
}
