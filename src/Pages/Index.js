import React from "react";
import Parks from "../Components/Parks";



function Index({masterParkData, searchParams, language}) {
  return (
    <div>
      <Parks masterParkData = {masterParkData} searchParams = {searchParams} language = {language}/>
    </div>
  );
}

export default Index;

