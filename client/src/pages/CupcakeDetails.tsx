import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Cupcake from "../components/Cupcake";

interface CupcakeType {
  id: number;
  accessory_id: string;
  accessory: string;
  color1: string;
  color2: string;
  color3: string;
  name: string;
}

export default function CupcakeDetails() {
  const { id } = useParams();
  const [cupcake, setCupcake] = useState<CupcakeType>();

  useEffect(() => {
    const getCupcake = async () => {
      const response = await fetch(`http://localhost:3310/api/cupcakes/${id}`);
      const data = await response.json();
      setCupcake(data);
    };
    getCupcake();
  }, [id]);

  return (
    <div>
      <h1>{cupcake?.name}</h1>
      {cupcake && <Cupcake data={cupcake} />}
    </div>
  );
}
