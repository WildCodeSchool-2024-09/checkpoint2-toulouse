import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import Cupcake from "../components/Cupcake";

// Typage des cupcakes pour TypeScript
type CupcakeProps = {
  id: number;
  accessory_id: string;
  accessory: string;
  color1: string;
  color2: string;
  color3: string;
  name: string;
};

function CupcakeList() {
  const cupcakes = useLoaderData() as CupcakeProps[];

  useEffect(() => {
    console.info(cupcakes);
  }, [cupcakes]);

  return (
    <>
      <h1>My Cupcakes</h1>
      <ul>
        {cupcakes.map((cupcake) => (
          <li key={cupcake.id}>
            <Cupcake data={cupcake} />
          </li>
        ))}
      </ul>
    </>
  );
}

export default CupcakeList;
