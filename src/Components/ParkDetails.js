import { useParams } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { getOnePark } from "../api/fetch";
import { Link } from "react-router-dom";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

function ParkDetails() {
  const { parkId } = useParams();
  const [park, setPark] = useState([]);
  const mapRef = useRef(null);

  useEffect(() => {
    getOnePark(parkId).then((response) => {
      setPark(response[0]);
    });
  }, [parkId]);

  useEffect(() => {
    if (Object.keys(park).length > 0) {
      if (!mapRef.current) {
        const map = L.map("map").setView([40.640799880363616, -74.08140685797821], 15);
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);
        mapRef.current = map;
      }
      const map = mapRef.current;
      const geoJSONLayer = L.geoJSON(park.multipolygon, {
        style: {
          fillColor: "green",
          fillOpacity: 0.5,
          color: "black",
          weight: 1,
        },
      }).addTo(map);
      map.fitBounds(geoJSONLayer.getBounds());
    }
  }, [park]);

  if (Object.keys(park).length === 0) {
    return <div>Loading...</div>;
  }

  let parkImgOb = {
    1: "https://www.nycgovparks.org/photo_gallery/full_size/19873.jpg",
    2: "https://www.nycgovparks.org/photo_gallery/full_size/25291.jpg",
    3: "https://www.nymetroparents.com/columnpic2/nyc-virtual-parks.jpg",
    4: "https://planning-org-uploaded-media.s3.amazonaws.com/image/NYCParks-davidoff-2020-Van-Alst-Playground-before.jpg",
    5: "https://i0.wp.com/thecitylife.org/wp-content/uploads/2022/07/DA4_3356_071922-Bartlett.jpg?fit=1536%2C1022&ssl=1",
    6: "https://planning-org-uploaded-media.s3.amazonaws.com/image/NYCParks-davidoff-2020-Van-Alst-Playground-after.jpg",
    7: "https://planning-org-uploaded-media.s3.amazonaws.com/image/Planning-2020-05-image28.jpg",
    8: "https://freight.cargo.site/t/original/i/e74d5fc17fd35eed679d0c267c00df143cd5b02c0a9bcd3c54188c6a459f7a6f/Arrochar_design.jpg",
    9: "https://images.squarespace-cdn.com/content/v1/5d01a7efbf4ae50001f78eaf/1579476844987-OBW1NCVF71QB3A8IOH1H/Fig%2B4%2BNYC%2BParks%252C%2BBennerson%2BRenovation%2B2018.jpg?format=1000w",
    10: "https://res.cloudinary.com/mommy-nearest/image/upload/c_fill,h_450,w_800/kvahlxrg5wddyzyd1mtz.jpg"
  }

  function getRandomImg() {
    const keys = Object.keys(parkImgOb);
    const randomIndex = Math.floor(Math.random() * keys.length);
    const randomKey = keys[randomIndex];
    return parkImgOb[randomKey];
  }


  let parkImage
  function determineParkImage() {
    if(park.name311 === "Bryant Hill Garden"){
      parkImage = "https://ioby.org/sites/default/files/garden2.jpg"
    } else if(park.name311 === "Hunts Point Playground") {
      parkImage = "https://www.nycgovparks.org/photo_gallery/full_size/24270.jpg"
    } else if (park.name311 === "Sunset Cove Park") {
      parkImage = "https://www.nycgovparks.org/photo_gallery/full_size/24598.jpg"
    } else if (park.name311 === "Grand Central Parkway Extension") {
      parkImage = "http://www.nycroads.com/roads/grand-central/img1.gif"
    } else if (park.name311 === "Challenge Playground") {
      parkImage = "https://www.nycgovparks.org/photo_gallery/full_size/25291.jpg"
    } else {
      parkImage = getRandomImg()
    }
  }

  determineParkImage()

  return (
  <div className="parkDetails">
  <ul className="parkStuff">
  <h2>Park: {park.name311}</h2>
  <span><b>Address:</b> {park.location}</span>
  <br></br>
  <span><b>Zipcode:</b> {park.zipcode}</span>
  <br></br>
  <a href={park.url}>NYC Parks website</a>
  <br></br>
  <img src={parkImage} className="parkImg" alt="park"/>
  <Link to="/parks" className="goBack">Go Back</Link>
  </ul>
  <div id="map" className="theMap"></div>
  </div>
  )
}

export default ParkDetails;

