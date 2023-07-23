
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
        <table className="table">
          <thead>
            <tr className="parkInfo">
              <span><b>Park Name</b></span>
              <span className="loc"><b>Address</b></span>
              <span className="zip"><b>Zipcode</b></span>
            </tr>
          </thead>
          <tbody>
            {parks.map((park) => {
              return <Park key={park.globalid} park={park} />;
            })}
          </tbody>
        </table>
      </div>
  
    )

}

export default Parks;

