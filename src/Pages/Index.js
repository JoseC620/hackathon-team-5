import React from "react";
import Parks from "../Components/Parks";

function Index({searchParams, language}) {
  return (
    <div>
      <Parks searchParams = {searchParams} language = {language}/>
    </div>
  );
}

export default Index;

