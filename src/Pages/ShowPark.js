import React from "react";
import Park from "../Components/Park.js";
import { useParams, useLocation } from "react-router-dom";

function ShowPark() {

    const { parkId } = useParams();

    return (
        <div>
        <Park parkId={parkId} />
        </div>
    );
    }

export default ShowPark;