
import  React from "react";
import axios from "axios";
import {useState , useEffect} from "react";
import Park from "./Park";

// import the API here from the utils folder, .env file, or wherever you are storing it

const returnFunction = () => {
    // x
}

function Parks({masterParkData, searchParams, language}) {
    console.log("test", masterParkData)
    // Takes array of objects, 
    const returnFunction = () => {
        for (let i = 0; i < masterParkData.length; i++) {
            console.log(masterParkData[i].eApply)
        }
    }
    //returnFunction();
    return (
        <div>
            <Park/>
        </div>
    )

}

export default Parks;

