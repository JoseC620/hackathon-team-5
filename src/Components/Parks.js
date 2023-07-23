
import  React from "react";
import axios from "axios";
import {useState , useEffect} from "react";
import Park from "./Park";

// import the API here from the utils folder, .env file, or wherever you are storing it

function Parks() {
    return (
        <div>
            <Park/>
        </div>
    )

}

export default Parks;

