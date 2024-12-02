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
  // Step 1: get all cupcakes
  const cupcakes = useLoaderData() as CupcakeArray;

  // Step 3: get all accessories

  const [cupcakesAccessories, setCupcakesAccessories] =
    useState<AccessoryArray>([]);

  useEffect(() => {
    const fetchCupcakesAccessories = async () => {
      try {
        const response = await fetch("http://localhost:3310/api/accessories");
        const data = await response.json();
        setCupcakesAccessories(data);
        console.info("Cupcakes' accessories fetched:", data);
      } catch (error) {
        console.error("Error fetching cupcakes:", error);
      }
    };

    fetchCupcakesAccessories();
  }, []);

  // Step 5: create filter state

  const [filter, setFilter] = useState<string>("");

  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(event.target.value);
  };

  return (
    <>
      <h1>My cupcakes</h1>
      <form className="center">
        <label htmlFor="cupcake-select">
          {/* Step 5: use a controlled component for select */}
          Filter by{" "}
          <select
            id="cupcake-select"
            value={filter}
            onChange={handleFilterChange}
          >
            <option value="">---</option>
            {/* Step 4: add an option for each accessory */}
            {cupcakesAccessories.map((accessory) => (
              <option key={accessory.id} value={accessory.slug}>
                {accessory.name}
              </option>
            ))}
          </select>
        </label>
      </form>
      <ul className="cupcake-list" id="cupcake-list">
        {/* Step 2: repeat this block for each cupcake */}
        {cupcakes
          .filter((cupcake) => {
            if (!filter) return true;

            return cupcake.accessory === filter;
          })
          .map((cupcake) => (
            <li key={cupcake.id}>
              <Link to={`/cupcakes/${cupcake.id}`}>
                <Cupcake data={cupcake} />
              </Link>
            </li>
          ))}
        {/* Step 5: filter cupcakes before repeating */}
        {/* end of block */}
      </ul>
    </>
  );
}

export default CupcakeList;
