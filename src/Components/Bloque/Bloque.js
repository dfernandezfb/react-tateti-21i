import { useState } from "react";
import './Bloque.css'

const Bloque = ({player,onClick}) => {
  return ( 
    <button className="square" onClick={onClick}>{player}</button>
  );
}
 
export default Bloque;