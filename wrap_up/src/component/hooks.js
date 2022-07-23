import React, { useState } from "react";
import ReactDOM from "react-dom/client";

function Ourteam() {
  const [Member, setMember] = useState(" _______ ");

  return (
    <>
    <div className="App">
      <h1>My favorite Team member is {Member}!</h1>
      <button
        type="button"
        onClick={() => setMember("Anas")}><h2>1</h2></button>&nbsp;
      <button
        type="button"
        onClick={() => setMember("Saja")}><h2>2</h2></button>&nbsp;
      <button
        type="button"
        onClick={() => setMember("Sara")}><h2>3</h2></button>&nbsp;
      <button
        type="button"
        onClick={() => setMember("Tamara")}><h2>4</h2></button>&nbsp;
    </div>
    </>
  );
}

export default Ourteam;