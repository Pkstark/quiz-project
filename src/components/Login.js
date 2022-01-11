import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const Login = ({setName, onQues1, setEmail}) =>{

const detect = useRef('');

useEffect(()=>{
  detect.current.focus();
},[]);


const reset = (e) => {
  e.preventDefault();
  detect.current.focus();

  const a = document.getElementById("x")
  a.value=""
  const b =document.getElementById("y")
  b.value=""

}
const fadeLeft = {
  hidden:{opacity : 0, x:-100},
  visible : { opacity: 1, x: 0}
}

return (
<motion.div
variants = {fadeLeft}
initial = 'hidden'
animate = 'visible'
transition = {{duration : 1}}
>
<form className="des" onSubmit={reset}>
  <div className="form-group">
    <motion.h3 className="des1">Login Form</motion.h3><br/><hr className='des3'/>
    <label for="exampleInputEmail1" className="des2" >User Name</label><br/>
    <motion.input 
    whileHover={{ scale: 1.05}}

    type="email" className="form-control" id="exampleInputEmail1"  aria-describedby="emailHelp" placeholder="Enter a UserName" onChange={(e)=>setName(e.target.value)} ref={detect} required/>
  </div>
  <div class="form-group"><br/>
    <label for="exampleInputPassword1" className="des2">Email</label><br/>
    <motion.input
    whileHover={{ scale: 1.05}}

    type="email" className="form-control" id="exampleInputPassword1 x" placeholder="Enter a Mail Id" required onChange={(e)=>setEmail(e.target.value)}/>
  </div><br/><hr className='des3'/><br/>
  <motion.button
  whileHover={{ scale: 1.05}}
  whileTap={{scale : 0.95, backgroundColor: 'grey', border: 'none', color : 'blue'}}
  initial={{opacity: 0}}
  animate={{opacity: 1, transition : { duration: 1.5}}}

  type="submit" className="des4" onClick={onQues1}>SUBMIT</motion.button>
</form>
</motion.div>

)};

export default Login;
