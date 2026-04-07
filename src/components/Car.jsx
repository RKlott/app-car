import React from "react";
import Wrapper from "./Wrapper"

const Car = ({ children, color, year }) => {
  const colorInfo = color ? color : <span>Néant</span>;



  
    return children ? (
      <Wrapper>
        <p>Marque: {children}</p>
        <p>Année: {year}</p>
        <p>Couleur: <span style={{color: colorInfo}}>{colorInfo}</span></p>
      </Wrapper>
    ) : <p>Pas de marque.</p>;
  } 
    

export default Car;
