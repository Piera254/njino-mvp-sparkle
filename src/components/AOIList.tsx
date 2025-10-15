import { useEffect, useState } from "react";
import API from "@/lib/api";

interface AOI {
  id: number;
  name: string;
  latitude: string;
  longitude: string;
  size_km2: string;
}

interface AOIListProps {
  refresh?: boolean;
}

const AOIList = ({ refresh }: AOIListProps) => {
  const [aois, setAois] = useState<AOI[]>([]);

  useEffect(() => {
    API.get("/aoi")
      .then((res) => setAois(res.data.data))
      .catch((err) => console.error(err));
  }, [refresh]);

  return (
    <div className="p-6 bg-card rounded-lg border">
      <h2 className="text-2xl font-semibold mb-4">Saved AOIs</h2>
      {aois.length === 0 ? (
        <p className="text-muted-foreground">No AOIs saved yet.</p>
      ) : (
        <ul className="space-y-2">
          {aois.map((aoi) => (
            <li key={aoi.id} className="p-3 bg-secondary/50 rounded">
              <strong>{aoi.name}</strong> — {aoi.latitude}, {aoi.longitude} ({aoi.size_km2} km²)
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AOIList;
