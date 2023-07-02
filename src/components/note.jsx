import React from "react";
import Profile from "./profile"
function note({Title,Desc,Sr}) {
  return (
    <div className="note">
        <Profile Sr={Sr}/> 
      <h2 className="title">{Title}</h2>
      <p className="desc">
        {Desc}
      </p>
    </div>
  );
}

export default note;
