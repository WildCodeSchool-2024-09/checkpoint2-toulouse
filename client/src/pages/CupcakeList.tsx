import { type FormEvent, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Cupcake from "../components/Cupcake";
import {
  type AccessoryProps,
  type CupcakeProps,
  getAllAccessories,
} from "../services/CupcakesApi";

/* you can use sampleCupcakes if you're stucked on step 1 */
/* if you're fine with step 1, just ignore this ;) */
/* ************************************************************************* */

function CupcakeList() {
  // Step 1: get all cupcakes
  const cupcakes = useLoaderData() as CupcakeProps[];

  // Step 3: get all accessories
  const [accessories, setAccessories] = useState<AccessoryProps[]>(
    Array<AccessoryProps>(0),
  );

  // Step 5: create filter state
  const [selectedAccessoryName, setSelectedAccessoryName] =
    useState<string>("");

  useEffect(() => {
    getAllAccessories().then((accessories) => setAccessories(accessories));
  }, []);

  const handleChange = (event: FormEvent<HTMLSelectElement>) => {
    const option =
      event?.currentTarget?.options[event?.currentTarget?.selectedIndex];

    setSelectedAccessoryName(option?.getAttribute("slug-name") ?? "");
  };

  return (
    <>
      <h1>My cupcakes</h1>
      <form className="center">
        <label htmlFor="cupcake-select">
          {/* Step 5: use a controlled component for select */}
          Filter by{" "}
          <select id="cupcake-select" onChange={handleChange}>
            {/* Step 4: add an option for each accessory */}
            {accessories.map((item) => {
              return (
                <option value={item.id} key={item.id} slug-name={item.slug}>
                  {item.name}
                </option>
              );
            })}
          </select>
        </label>
      </form>
      <ul className="cupcake-list" id="cupcake-list">
        {/* Step 2: repeat this block for each cupcake */}
        {selectedAccessoryName !== ""
          ? cupcakes
              .filter((item) => item.accessory === selectedAccessoryName)
              .map((item) => {
                return (
                  <li className="cupcake-item" key={item.id}>
                    <Cupcake
                      id={item.id}
                      accessory={item.accessory}
                      accessory_id={item.accessory_id}
                      color1={item.color1}
                      color2={item.color2}
                      color3={item.color3}
                      name={item.name}
                    />
                  </li>
                );
              })
          : cupcakes.map((item) => {
              return (
                <li className="cupcake-item" key={item.id}>
                  <Cupcake
                    id={item.id}
                    accessory={item.accessory}
                    accessory_id={item.accessory_id}
                    color1={item.color1}
                    color2={item.color2}
                    color3={item.color3}
                    name={item.name}
                  />
                </li>
              );
            })}
        {/* Step 5: filter cupcakes before repeating */}

        {/* end of block */}
      </ul>
    </>
  );
}

export default CupcakeList;
