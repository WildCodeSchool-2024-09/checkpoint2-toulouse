import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Cupcake from "../components/Cupcake";

interface CupcakeProps {
  accessory: string;
  accessory_id: string;
  color1: string;
  color2: string;
  color3: string;
  name: string;
}

export default function CupcakeDetails() {
  const [data, setData] = useState<CupcakeProps>();
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:3310/api/cupcakes/${id}`,
        );
        const json = await response.json();
        setData(json);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [id]);
  return data && <Cupcake data={data} />;
}
