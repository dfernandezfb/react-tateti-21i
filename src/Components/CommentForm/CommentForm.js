import { useState } from "react";


const CommentForm = () => {
  const [comment,setComment] = useState({
    name:'',
    comment:''
  })

  const handleChange = (e) =>{
    console.log(e.target);
    setComment({
      ...comment,
      [e.target.name]:e.target.value
    })
  }
  return ( 
    <form>
      <label htmlFor="name">Nombre</label>
      <input
      type="text" 
      id="name" 
      name="name" 
      onKeyUp={handleChange}/>
      <br />
      <label htmlFor="comment">Comentario</label>
      <input
      type="text" 
      id="comment" 
      name="comment" 
      onKeyUp={handleChange}/>
    </form>
   );
}
 
export default CommentForm;