import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { type CupcakeProps, getAllCupcakes } from "../services/CupcakesApi";

function CupcakeDetails() {
  const { id } = useParams();

  let cupId = 0;
  if (id) {
    cupId = Number.parseInt(id);
    if (Number.isNaN(cupId)) {
      cupId = 9999;
    }
  } else {
    cupId = 9999;
  }

  const cupcakeOrigin = {
    id: 0,
    accessory_id: "",
    accessory: "",
    color1: "",
    color2: "",
    color3: "",
    name: "",
  } as CupcakeProps;

  const [data, setData] = useState(cupcakeOrigin);

  useEffect(() => {
    getAllCupcakes().then((cupcakes) => {
      const cupcake = cupcakes.find((item) => item.id === cupId);
      if (cupcake) {
        setData(cupcake);
      }
    });
  }, [cupId]);

  return (
    <>
      {" "}
      <h1>{data.name}</h1>
      <div className="cupcake-container-alone">
        <div className="cupcake">
          <div className={`accessory ${data.accessory}`} />
          <div className="cream">
            <div
              className="cream-1"
              style={{
                backgroundColor: data.color1,
              }}
            />
            <div
              className="cream-2"
              style={{
                backgroundColor: data.color2,
              }}
            />
            <div
              className="cream-3"
              style={{
                backgroundColor: data.color3,
              }}
            />
          </div>
          <div className="bottom">
            <div className="bottom-in">
              <div className="face">
                <div className="eyes">
                  <div className="left-eye" />
                  <div className="right-eye" />
                </div>
                <div className="mouth" />
              </div>
            </div>
          </div>
        </div>

        <div className="cupcake-name" />
      </div>
    </>
  );
}

export default CupcakeDetails;
