import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import api from "../../services/api";
import StatsCard from "./StatsCard";
import ShipActivityChart from "./charts/ShipActivityChart";
import VesselTypeChart from "./charts/VesselTypeChart";
import ShipStatusCard from "./ShipStatusCard";

const Dashboard = () => {
  const { user } = useAuth();
  const [ships, setShips] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchShips = async () => {
      try {
        const response = await api.ships.getAll();
        setShips(response.data);
      } catch (error) {
        console.error("Error fetching ships:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchShips();
  }, []);

  const stats = [
    {
      title: "Total Ships",
      value: ships.length,
      change: "+5%",
      changeType: "increase",
      // icon: "ship",
      color: "bg-primary-500",
    },
    {
      title: "Active Vessels",
      value: ships.filter((ship) => ship.status === "Active").length,
      change: "+2%",
      changeType: "increase",
      icon: "activity",
      color: "bg-success-500",
    },
    {
      title: "Total Tonnage",
      value: ships
        .reduce((sum, ship) => sum + ship.grossTonnage, 0)
        .toLocaleString(),
      change: "+8%",
      changeType: "increase",
      icon: "weight",
      color: "bg-secondary-600",
    },
    {
      title: "Average Age",
      value: Math.round(
        2025 -
          ships.reduce((sum, ship) => sum + ship.yearBuilt, 0) /
            (ships.length || 1)
      ),
      change: "-1",
      changeType: "decrease",
      icon: "calendar",
      color: "bg-warning-500",
    },
  ];

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-500"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-primary-700 to-primary-900 rounded-lg shadow-md p-6 text-white">
        <h1 className="text-2xl font-bold text-white mb-1">
          Welcome, {user?.name || "User"}
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {stats.map((stat, index) => (
          <StatsCard key={index} {...stat} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div className="card p-5">
          <h3 className="text-lg font-semibold mb-4">Activity</h3>
          <div className="h-64">
            <ShipActivityChart />
          </div>
        </div>

        <div className="card p-5">
          <h3 className="text-lg font-semibold mb-4">Types</h3>
          <div className="h-64">
            <VesselTypeChart ships={ships} />
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Recent</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {ships.slice(0, 3).map((ship) => (
            <ShipStatusCard key={ship.imo} ship={ship} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
