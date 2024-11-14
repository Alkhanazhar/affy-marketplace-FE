import axios from "axios";
import { useEffect, useState } from "react";

export const useGetCommunity = (communityId) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchCommunity = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        "/api/admin/community/display/" + communityId
      );
      setData(() => response.data.meta);
    } catch (error) {
      console.log(error, "Error fetching community");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchCommunity();
  }, [communityId]);

  return { data, loading };
};
