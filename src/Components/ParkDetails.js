import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getOnePark } from "../api/fetch";


function ParkDetails() {
    const { parkId } = useParams();
    const [park,setPark] = useState([])

    useEffect(() => {
        getOnePark(parkId).then((response) => {
          setPark(response[0])
        })
      }, [])

      if (Object.keys(park).length === 0) {
        return <div>Loading...</div>; // You can display a loading message or a spinner here
      }

      console.log(park)

    
    return (
        <div>
        <h1>{park.name311}</h1>
        <h2>{park.location}</h2>
        <h2>{park.zipcode.substring(0,5)}</h2>
        <a href={`${park.url}`}>{park.url}</a>
        <Link to="/">Back to Home</Link>
        </div>
    );
    }


export default ParkDetails;
