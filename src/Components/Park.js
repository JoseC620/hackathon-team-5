import React from "react";
import { Link } from "react-router-dom";


function Park({ park }) {


  return (
    <tr className="parkrow">
      <td className="parkInfo">
          <Link to={`/parks/${park.globalid}`} className="parkLinks"> {park.name311}</Link>
          <span className="loc">{park.location}</span>
          <span className="zip">{park.zipcode.substring(0,5)}</span>
          </td>
    </tr>
  );
}

export default Park;
