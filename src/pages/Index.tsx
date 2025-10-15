import { useState } from "react";
import AOIForm from "@/components/AOIForm";
import AOIList from "@/components/AOIList";
import Dashboard from "@/components/Dashboard";

const Index = () => {
  const [refresh, setRefresh] = useState(false);

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <h1 className="text-4xl font-bold text-center mb-8">🌱 ReGreen: Soil Degradation Detector</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        <AOIForm onAOICreated={() => setRefresh(!refresh)} />
        <AOIList refresh={refresh} />
        <Dashboard />
      </div>
    </div>
  );
};

export default Index;
