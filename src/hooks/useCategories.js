import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const useCategories = () => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate()

    const fetchCategories = async () => {
        try {
            const response = await axios.get("/api/admin/category/display", {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            });
            console.log(response)
            setCategories(response?.data?.meta);
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
        fetchCategories();
    }, []);

    return { categories, loading, error, fetchCategories };
};

export default useCategories;
