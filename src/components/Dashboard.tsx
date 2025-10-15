import { useEffect, useState } from "react";
import API from "@/lib/api";

interface Stats {
  total_aois: number;
  average_size_km2: number;
  avg_degraded_pct: number;
  status: string;
}

const Dashboard = () => {
  const [stats, setStats] = useState<Stats | null>(null);

  useEffect(() => {
    API.get("/dashboard/stats")
      .then((res) => setStats(res.data))
      .catch((err) => console.error(err));
  }, []);

  if (!stats) return <p className="text-center p-6">Loading dashboard...</p>;

  return (
    <div className="p-6 bg-card rounded-lg border">
      <h2 className="text-2xl font-semibold mb-4">ReGreen System Overview</h2>
      <div className="space-y-2">
        <p className="text-lg">Total AOIs: <span className="font-semibold">{stats.total_aois}</span></p>
        <p className="text-lg">Average Size: <span className="font-semibold">{stats.average_size_km2} km²</span></p>
        <p className="text-lg">Degraded Area: <span className="font-semibold">{stats.avg_degraded_pct}%</span></p>
        <p className="text-lg">Status: <span className="font-semibold">{stats.status}</span></p>
      </div>
    </div>
  );
};

export default Dashboard;
