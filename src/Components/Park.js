import React from "react";
import { Link } from "react-router-dom";
import ParkDetails from "./ParkDetails";
import { useState } from "react";


function Park({ park }) {


  return (
    <tr className="parkrow">
      <td className="parkInfo">
          <Link to={`/parks/${park.name311.replace(/\s/g, '')}`} className="parkLinks"> {park.name311}</Link>
          <span className="loc">{park.location}</span>
          <span className="zip">{park.zipcode.substring(0,5)}</span>
          </td>
    </tr>
  );
}

export default Park;
