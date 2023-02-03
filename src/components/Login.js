import React,{useState}from 'react';
import axios from 'axios'
import logo from "../background.png"
import {useNavigate} from "react-router-dom"
import Greetings from './Greetings';
function Login(){
   
    const [input,setInput]=useState({
        title: '',
        password: ''
    })

    function handleChange(event){
        const {name,value}=event.target;
        setInput(prevInput=>{
            return{
                ...prevInput,
                [name]:value
            }
        })

    }
    function handleClick(event){
        
        axios.post("http://localhost:3000",input)
    }
    

    const navigate=useNavigate();
    return (
        
        <div className='full' style ={HeaderStyle}> 
        <>
        <Greetings/>
        </>
        <div className='container'>
        
        <div className="btnn" onClick={()=>navigate('/signup')} >SignUp </div>
        <div className="box">
            <div className="login">
             <h1 className="head">Login</h1>
             <input onChange={handleChange} type="text" name="title"  value={input.title} placeholder="Enter your Mobile number"></input>
             <br/>
             <br/>
             <input onChange={handleChange} type="password" name="password" value={input.password}  placeholder="Enter your Password" />
             <br/>
            <br/>
            <div onClick={handleClick} className="button" >Login</div>
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