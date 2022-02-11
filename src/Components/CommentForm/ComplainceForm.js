import { useState } from "react";


const ComplainceForm = () => {
  const [complaince,setComplaince] = useState({
    name:'',
    complaince:'',
  })

  const handleForm = (e) =>{
    setComplaince({
      ...complaince,
      [e.target.name]:e.target.value
    })
  }

  return (
    <form>
      <label htmlFor="name">Nombre:</label>
      <input onKeyUp={(e)=>handleForm(e)} type="text" id="name" name="name"/>
      <br />
      <label htmlFor="complaince">Queja</label>
      <input onKeyUp={(e)=>handleForm(e)} type="text" id="complaince" name="complaince"/>
    </form> 
   );
}
 
export default ComplainceForm;