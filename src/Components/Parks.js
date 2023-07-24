
import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getParkData } from "../api/fetch"
import Park from "./Park";

// import the API here from the utils folder, .env file, or wherever you are storing it

function Parks({ searchParams, language }) {
    //console.log("Parks: searchParams", searchParams)

    const [parks, setParks] = useState([])

    useEffect(() => {

        if (searchParams === null) {
            console.log("Parks, searchParams null", searchParams)
            getParkData().then((response) => {
                setParks(response);
            })
        } else {
            console.log("Parks, searchParams not null", searchParams)
            getParkData().then((response) => {
                const responseFiltered = response.filter(park => {
                    return park[searchParams.keyIn] === searchParams.valueIn
                });
                setParks(responseFiltered);
            })
        }

        //     getParkData().then((response) => {
        //       setParks(response)
        //       console.log(response)
        //     })
        //   }, [])


    }, [searchParams])

    // function Parks({masterParkData, searchParams, language}) {
    //     console.log("test", masterParkData)
    // Takes array of objects, 
    // const returnFunction = () => {
    //     for (let i = 0; i < masterParkData.length; i++) {
    //         console.log(masterParkData[i].eApply)
    //     }
    // }
    //returnFunction();

    /*
    In <table>, <thead> references the table head.  Normally, you would not put parks.map
    in the table head; you would put labels such as "Park Name", "Zip Code", and such.

    Created <tbody> and moved map inside.  Removed optional <thead>.
    */


    /*
    2023 Jul 23 22:08 - James

    Including commented field in the return generates an error, so copied and pasted below.

    <table className="table">
          <thead>
            <tr className="parkInfo">
              <td><b>Park Name</b></td>
              <td className="loc"><b>Address</b></td>
              <td className="zip"><b>Zipcode</b></td>
            </tr>
          </thead>
          <tbody>
            {parks.map((park) => {
              return <Park key={park.globalid} park={park} />;
            })}
          </tbody>
        </table>
      </div>
   */

    return (
        <div>
            <table className="table">
                <thead>
                    <tr className="parkInfo">
                        <td><b>Park Name</b></td>
                        <td className="loc"><b>Address</b></td>
                        <td className="zip"><b>Zipcode</b></td>
                    </tr>
                </thead>
                <tbody>
                    {parks.map((park) => {
                        return <Park key={park.globalid} park={park} />
                    })}
                </tbody>
            </table>
        </div >
    )

}

export default Parks;

