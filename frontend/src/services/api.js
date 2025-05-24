import axios from "axios";
import { toast } from "react-toastify";

const api = {
  ships: {
    getAll: async () => {
      try {
        const response = await axios.get("/ships");
        return response.data;
      } catch (error) {
        console.error("Error fetching ships:", error);
        toast.error(error.response?.data?.error || "Failed to fetch ships");
        throw error;
      }
    },

    getByName: async (name) => {
      try {
        const response = await axios.get(`/ships/details?name=${name}`);
        return response.data;
      } catch (error) {
        console.error("Error fetching ship details:", error);
        toast.error(
          error.response?.data?.error || "Failed to fetch ship details"
        );
        throw error;
      }
    },

    create: async (shipData) => {
      try {
        const response = await axios.post("/ships", shipData);
        toast.success("Ship created successfully");
        return response.data;
      } catch (error) {
        console.error("Error creating ship:", error);
        toast.error(error.response?.data?.error || "Failed to create ship");
        throw error;
      }
    },
  },

  user: {
    getCurrent: async () => {
      try {
        const response = await axios.get("/auth/me");
        return response.data;
      } catch (error) {
        console.error("Error fetching user:", error);
        toast.error(error.response?.data?.error || "Failed to fetch user");
        throw error;
      }
    },
  },
};

export default api;
