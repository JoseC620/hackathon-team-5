
import  React from "react";
import { Link } from "react-router-dom";
import {useState , useEffect} from "react";
import { getParkData } from "../api/fetch"
import Park from "./Park";

// import the API here from the utils folder, .env file, or wherever you are storing it

function Parks() {

    const [parks,setParks] = useState([])

    useEffect(() => {
        getParkData().then((response) => {
          setParks(response)
        })
      }, [])

// function Parks({masterParkData, searchParams, language}) {
//     console.log("test", masterParkData)
    // Takes array of objects, 
    // const returnFunction = () => {
    //     for (let i = 0; i < masterParkData.length; i++) {
    //         console.log(masterParkData[i].eApply)
    //     }
    // }
    //returnFunction();
    return (
        <div>
            <table class="table">
                <thead>
                    
           {parks.map((park) => {
            return <Park key={park.globalid} park={park}/>
           })}
                </thead>
            </table>
        </div>
    )

}

export default Parks;

