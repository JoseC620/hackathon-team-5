import React from "react";
import { Link } from "react-router-dom";
import ParkDetails from "./ParkDetails";
import { useState } from "react";


function Park({ park }) {


  return (
    <div className="parkrow">
          <Link to={`/parks/${park.name311}`} className="parkLinks"> {park.name311}</Link>
    </div>
  );
}

export default Park;
