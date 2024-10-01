import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const useCommunities = () => {
    const [community, setCommunity] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate()

    const fetchCommunities = async () => {
        try {
            const response = await axios.get("api/admin/community/display", {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            });
            console.log(response)
            setCommunity(response?.data?.meta);
            setLoading(false);
        } catch (err) {
            if (!err?.response?.data?.ok) {
                localStorage.removeItem("token");
                navigate("/auth")
            }
            setError(err.message);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCommunities();
    }, []);

    return { community, loading, error, fetchCommunities };
};

export default useCommunities;
