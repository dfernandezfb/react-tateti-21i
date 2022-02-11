import './Bloque.css'
import Proptypes from 'prop-types'

const Bloque = ({onClick}) => {
  return ( 
    <button className="square m-1" onClick={onClick}></button>
  );
}
 
export default Bloque;

//DOCUMENTACIÓN

Bloque.propTypes = {
  player: Proptypes.string.isRequired
}