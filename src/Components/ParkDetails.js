import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";


function ParkDetails() {
    
    return (
        <div>
        <h1>{park.fullName}</h1>
        <h2>{park.location}</h2>
        <p>{park.description}</p>
        <Link to="/">Back to Home</Link>
        <button onClick={() => navigate(-1)}>Back to Home</button>
        </div>
    );
    }


export default ParkDetails;