import { useParams } from "react-router-dom";

import "./Home.css";

import { useEffect, useState } from "react";
import type { CupcakeProps } from "../components/Cupcake";
import Cupcake from "../components/Cupcake";

function CupcakeDetails() {
  const { id } = useParams();
  const [cupcakeDetails, setCupcakeDetails] = useState<CupcakeProps["data"]>();

  useEffect(() => {
    const fetchCupcakeDetails = async () => {
      try {
        const response = await fetch(
          `http://localhost:3310/api/cupcakes/${id}`,
        );
        const data = await response.json();
        setCupcakeDetails(data);
        console.info("Cupcake details fetched:", data);
      } catch (error) {
        console.error("Error fetching cupcake details:", error);
      }
    };

    fetchCupcakeDetails();
  }, [id]);

  return (
    <div>
      <h1>{cupcakeDetails?.name}</h1>
      {cupcakeDetails && <Cupcake data={cupcakeDetails} />}
      <h3>Colors</h3>
      <ul>
        <li>{cupcakeDetails?.color1}</li>
        <li>{cupcakeDetails?.color2}</li>
        <li>{cupcakeDetails?.color3}</li>
      </ul>
      <h3>Accessory</h3>
      <ul>
        <li>{cupcakeDetails?.accessory}</li>
      </ul>
    </div>
  );
}

export default CupcakeDetails;
