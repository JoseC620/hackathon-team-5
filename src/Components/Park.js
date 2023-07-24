import React from "react";
import { Link } from "react-router-dom";

function Park({ park }) {

  return (
    <tr className = "parkrow">
      <td className = "parkInfo"><Link to={`/parks/${park.globalid}`} className="parkLinks"> {park.name311}</Link></td>
      <td className = "loc">{park.location}</td>
      <td className = "zip">{park.zipcode.substring(0,5)}</td>
    </tr>

    /*
    2023 Jul 23 21:59 - James
    
    <Link> and <span> should not work as <td> elements either.  Updated above.
    */

    // <div className="parkrow">
    //       <Link to={`/parks/${park.name311}`} className="parkLinks"> {park.name311}</Link>
    // </div>

    // <tr className="parkrow">
    //   <td className="parkInfo">
    //       <Link to={`/parks/${park.globalid}`} className="parkLinks"> {park.name311}</Link>
    //       <span className="loc">{park.location}</span>
    //       <span className="zip">{park.zipcode.substring(0,5)}</span>
    //       </td>
    // </tr>
  );
}

export default Park;
