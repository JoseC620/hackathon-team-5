import React from "react";
import { Link } from "react-router-dom";
import ParkDetails from "./ParkDetails";
import { useState } from "react";


function Park({ park }) {


  return (
    <div className="parkrow">
      <section className="parkInfo">
          <Link to={`/parks/${park.name311}`} className="parkLinks"> {park.name311}</Link>
          <span className="loc">{park.location}</span>
          <span className="zip">{park.zipcode.substring(0,5)}</span>
          </section>
    </div>
  );
}

export default Park;
