import NavBar from "../components/NavBar";
import IdeaModal from "../components/Idea";
import React, { useState } from "react";


function IdeaBank() {

  const [modalShow, setModalShow] = useState(false);

    return (
        <>
        <NavBar/>
          <h1>Idea Bank</h1>
          <IdeaModal show ={modalShow} onHide={() => setModalShow(false)}/>
          
        </>
          );
  }
  export default IdeaBank