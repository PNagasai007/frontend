import React from 'react';
import logo from "../background.png"
import {useNavigate} from "react-router-dom"
import Greetings from './Greetings';
function Login(){
    const navigate=useNavigate();

    


    return (
        
        <div style ={HeaderStyle}> 
        <>
        <Greetings/>
        </>
        <div className='container'>
        
        <div className="btnn" onClick={()=>navigate('/signup')} >SignUp </div>
        <div className="box">
            <div className="login">
             <h1 className="head">Login</h1>
             <input type="text" name="email"  placeholder="Enter your Mobile number"></input>
             <br/>
             <br/>
             <input type="password" name="password"   placeholder="Enter your Password" />
             <br/>
            <br/>
            <div className="button" >Login</div>
             {/* <p className="homepage">forgot password ?</p> */}
             <p  className="link">forgot password</p>
             
            
         </div> 
         </div>
         
         </div>
         </div>
    )

   

}
export default Login;
const HeaderStyle = {
    width: "100%",
    height: "100vh",
    background: `url(${logo})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    // backgroundSize: "auto"
    
  };