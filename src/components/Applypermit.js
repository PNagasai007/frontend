import React from 'react';
import Nav from './Nav';

function Applypermit(){
    return (
      <div>
<><Nav/></>
    <div className='container'>
      
    <h2 >APPLY PERMIT</h2>
    <form>
      <div className="mb-3">
          <label htmlFor="formGroupExampleInput" className="form-label formhead">REGD. OWNER</label>
          <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Example input placeholder"/>
        </div>
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput" className="form-label formhead">VEHICLE NUMBER</label>
          <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Example input placeholder"/>
        </div>


        <div className="mb-3">
          <label htmlFor="formGroupExampleInput" className="form-label formhead">FROM ADDRESS</label>
          <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Example input placeholder"/>
        </div>

        <div className="mb-3">
          <label htmlFor="formGroupExampleInput" className="form-label formhead">TO ADDRESS</label>
          <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Example input placeholder"/>
        </div>

        <div className="mb-3">
          <label htmlFor="formFile" className="form-label formhead">ADHAAR FILE</label>
          <input className="form-control" type="file" id="formFile"/>
        </div>

        <div className="mb-3">
          <label htmlFor="formFile" className="form-label formhead">DATE OF REQUEST</label>
          <input className="form-control" type="file" id="formFile"/>
        </div>

       
        
        

      
      
    </form>
    <center>
        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                          SUBMIT
                        </button>
        </center>
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                      <div className="modal-dialog">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">DATA</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                          </div>
                          <div className="modal-body">
                            ...
                          </div>
                          <div className="modal-footer"> 
                           
                            <button type="button" className="btn btn-danger">CANCEL</button>
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">HOME</button>
                          </div>
                        </div>
                      </div>
                    </div>
        
  </div>
  <br/>
    <br/>   
  </div>    
    )








   

}
export default Applypermit;
