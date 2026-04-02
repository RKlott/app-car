import React from "react";
import Wrapper from "./Wrapper"

const Car = ({ children, color }) => {
  const colorInfo = color ? color : <span>Néant</span>;

  
    return children ? (
      <Wrapper >
        <p>Marque: {children} </p>
        <p>Couleur: {colorInfo} </p>
      </Wrapper>
    ) : <p>Pas de marque.</p>;
  } 
    

export default Car;
