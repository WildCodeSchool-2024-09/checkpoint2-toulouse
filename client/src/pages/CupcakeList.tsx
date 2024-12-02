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
interface AccessoriesCupCake {
  id: number;
  name: string;
  slug: string;
}

/* you can use sampleCupcakes if you're stucked on step 1 */
/* if you're fine with step 1, just ignore this ;) */
/* ************************************************************************* */

function CupcakeList() {
  // Step 1: get all cupcakes
  console.info(useLoaderData() as CupcakeArray);
  const allCupCake = useLoaderData() as CupcakeArray;
  const [accessories, setAccessories] = useState([]);

  // Step 3: get all accessories

  useEffect(() => {
    const getAllAccesories = async () => {
      const response = await fetch("http://localhost:3310/api/accessories");
      const data = await response.json();
      setAccessories(data);
      console.info(data);
    };
    getAllAccesories();
  }, []);

  // Step 5: create filter state

  const [filterState, setFilterSate] = useState("");

  return (
    <>
      <h1>My cupcakes</h1>
      <form className="center">
        <label htmlFor="cupcake-select">
          {/* Step 5: use a controlled component for select */}
          Filter by{" "}
          <select
            id="cupcake-select"
            onChange={(event) => {
              setFilterSate(event.target.value);
            }}
          >
            <option value="">---</option>
            {accessories.map((elem: AccessoriesCupCake) => (
              <option value={elem.id} key={elem.id}>
                {elem.name}
              </option>
            ))}
          </select>
        </label>
      </form>
      <ul className="cupcake-list" id="cupcake-list">
        {allCupCake
          .filter((elem) => {
            if (filterState === "") {
              return true;
            }
            return elem.accessory_id === filterState;
          })
          .map((elem) => {
            return (
              <Link to={`/cupcakes/${elem.id}`} key={elem.id}>
                <Cupcake data={elem} />
              </Link>
            );
          })}
        {/* Step 5: filter cupcakes before repeating */}
        {/* end of block */}
      </ul>
    </>
  );
}

export default CupcakeList;
