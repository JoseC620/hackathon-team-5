import React from "react";
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";


function ParkDetails() {
    const { parkName } = useParams();


    
    // return (
    //     <div>
    //     <h1>{park.name311}</h1>
    //     <h2>{park.location}</h2>
    //     <p>{park.url}</p>
    //     <Link to="/">Back to Home</Link>
    //     </div>
    // );
    }


export default ParkDetails;
