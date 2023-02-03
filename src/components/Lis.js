import React from 'react';
// import "bootstrap/dist/css/bootstrap.min.css";
import Table from 'react-bootstrap/Table';
import logo from '../../src/logo512.png'
import Nav from './Nav';

// import logo1 from "../background.png"

function Lis(){
    return(
      // <div style={image}>
      <div>
        <><Nav/></>
        <div className='container'>
          
            <center>
              <h1>LICENSE</h1>
                <img className='picinuser' src={logo} alt="img loading..."></img>
            </center>
        

        <Table striped bordered hover >
      
      <tbody>
        <tr>
          <th className='tbh'>LICENSE NO:</th>
          <td>details</td>
         
        </tr>
        <tr>
          <th>FULL NAME:</th>
          <td>details</td>
         
        </tr>
        <tr>
          <th>SON/DAUGHTHER/WIFE OF:</th>
          <td>details</td>
         
        </tr>
        <tr>
          <th>D.O.B:</th>
          <td>details</td>
         
        </tr>
        <tr>
          <th>ADDRESS::</th>
          <td>details</td>
         
        </tr>
        <tr>
          <th>CATEGORY:</th>
          <td>details</td>
         
        </tr>
        <tr>
          <th>approved in (mandal,district)</th>
          <td>details</td>
         
        </tr>
        <tr>
          <th>VALIDITY</th>
          <td>details</td>
         
        </tr>
        
        
      </tbody>
    </Table>
    <center>
        <a className="btn btn-primary"  href="ntg" role="button">DOWNLOAD</a>
        
      </center>
    </div>
    </div>
    // </div>
          );
        
        
        

    

   

}
export default Lis;
// const image={
//   width: "100%",
//     height: "100vh",
//     background: `url(${logo1})`,
//     backgroundPosition: "center",
//     backgroundRepeat: "no-repeat",
//     backgroundSize: "cover",
// }
