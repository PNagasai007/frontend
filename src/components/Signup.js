import React from 'react';
import logo from "../background.png"
import Greetings from './Greetings';
function Signup(){
    return (
        <div  style ={HeaderStyle}>
             <>
        <Greetings/>
        </>
                    <div className="btnn" onClick={'/greetings'}>Home</div>

        <div className="box">
        <div className="register">
          
            <h1  className="head">Register</h1>
            <input type="text" name="name"  placeholder="Your mobile number" ></input>
            <br/><br/>
            <input type="password" name="password"  placeholder="Enter Password" ></input>
            <br/><br/>
            <input type="password" name="reEnterPassword"  placeholder="Re-enter Password" ></input>
            <br/><br/>
            <div className="button"  >Register</div>
           
            
        </div>
        </div>
        </div>
    )

   

}
export default Signup;


const HeaderStyle = {
    width: "100%",
    height: "100vh",
    background: `url(${logo})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    
  };
