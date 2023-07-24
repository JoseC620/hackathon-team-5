import React from "react";
import { Link } from "react-router-dom";
import ParkDetails from "./ParkDetails";
import { useState } from "react";


function Park({ park }) {


  return (
    <tr className = "parkrow">
      <td><Link to={`/parks/${park.name311}`} className="parkLinks"> {park.name311}</Link></td>
    </tr>
    // <div className="parkrow">
    //       <Link to={`/parks/${park.name311}`} className="parkLinks"> {park.name311}</Link>
    // </div>
  );
}

export default Park;
