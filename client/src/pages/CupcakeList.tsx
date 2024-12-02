import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Cupcake from "../components/Cupcake";

/* ************************************************************************* */
const sampleCupcakes = [
  {
    id: 10,
    accessory_id: "4",
    accessory: "wcs",
    color1: "blue",
    color2: "white",
    color3: "red",
    name: "France",
  },
  {
    id: 11,
    accessory_id: "4",
    accessory: "wcs",
    color1: "yellow",
    color2: "red",
    color3: "black",
    name: "Germany",
  },
  {
    id: 27,
    accessory_id: "5",
    accessory: "christmas-candy",
    color1: "yellow",
    color2: "blue",
    color3: "blue",
    name: "Sweden",
  },
];

type CupcakeArray = typeof sampleCupcakes;
type AccessoryArray = { id: number; name: string; slug: string }[];

/* you can use sampleCupcakes if you're stucked on step 1 */
/* if you're fine with step 1, just ignore this ;) */
/* ************************************************************************* */

function CupcakeList() {
  // Step 1: get all cupcakes*
  const data = useLoaderData() as CupcakeArray;
  console.info(data);
  // Step 3: get all accessories
  const [accessories, setAccessories] = useState<AccessoryArray>([]);
  const [inputValue, setInputValue] = useState<string>("");

  useEffect(() => {
    const fetchAccessories = async () => {
      try {
        const response = await fetch("http://localhost:3310/api/accessories");
        const json = await response.json();
        setAccessories(json);
      } catch (error) {
        console.error(error);
      }
    };
    fetchAccessories();
  }, []);

  // Step 5: create filter state

  return (
    <>
      <h1>My cupcakes</h1>
      <form className="center">
        <label htmlFor="cupcake-select">
          {/* Step 5: use a controlled component for select */}
          Filter by{" "}
          <select
            onChange={(event) => setInputValue(event.target.value)}
            id="cupcake-select"
          >
            <option value="">---</option>
            {/* Step 4: add an option for each accessory */}
            {accessories?.map((acc) => (
              <option key={acc.id} value={acc.id}>
                {acc.name}
              </option>
            ))}
          </select>
        </label>
      </form>
      <ul className="cupcake-list" id="cupcake-list">
        {/* Step 2: repeat this block for each cupcake */}
        {/* Step 5: filter cupcakes before repeating */}
        {data
          .filter((cupcake) =>
            inputValue === "" ? true : inputValue === cupcake.accessory_id,
          )
          .map((cupcake) => (
            <Link key={cupcake.id} to={`${cupcake.id}`}>
              <li className="cupcake-item">
                <Cupcake data={cupcake} />
              </li>
            </Link>
          ))}
        {/* <li className="cupcake-item">
          <Cupcake data={sampleCupcakes[0]} />
        </li> */}
        {/* end of block */}
      </ul>
    </>
  );
}

export default CupcakeList;
