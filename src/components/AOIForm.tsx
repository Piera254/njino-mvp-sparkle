import { useState } from "react";
import API from "@/lib/api";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";

interface AOIFormProps {
  onAOICreated: () => void;
}

const AOIForm = ({ onAOICreated }: AOIFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    latitude: "",
    longitude: "",
    size_km2: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await API.post("/aoi", null, {
        params: formData,
      });
      toast({
        title: "Success",
        description: "AOI created successfully!",
      });
      onAOICreated();
    } catch (err) {
      console.error(err);
      toast({
        title: "Error",
        description: "Failed to create AOI",
        variant: "destructive",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-6 bg-card rounded-lg border">
      <h2 className="text-2xl font-semibold">Create AOI</h2>
      <Input name="name" placeholder="Name" onChange={handleChange} required />
      <Input name="latitude" placeholder="Latitude" onChange={handleChange} required />
      <Input name="longitude" placeholder="Longitude" onChange={handleChange} required />
      <Input name="size_km2" placeholder="Size (km²)" onChange={handleChange} required />
      <Button type="submit" className="w-full">Save AOI</Button>
    </form>
  );
};

export default AOIForm;
