import { useState } from "react";
import { countries } from "../utils/country";

const Grocery = () => {
  const [country, setCountry] = useState({ name: "", value: "", cities: [] });
  console.log(country, "country");
  return (
    <>
      <div>
        <select
          onChange={(e) => {
            console.log(e.target.value);
            setCountry(e.target.value);
          }}
        >
          <option value="">Select Country</option>
          {countries.map((item, index) => {
            return (
              <option key={index} value={index}>
                {item.name}
              </option>
            );
          })}
        </select>
        <select>
          {countries[country]?.cities.map((item, index) => {
            return (
              <option key={index} value={index}>
                {item}
              </option>
            );
          })}
        </select>
      </div>
    </>
  );
};
export default Grocery;
