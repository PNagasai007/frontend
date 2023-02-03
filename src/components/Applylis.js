import React from 'react';
import Nav from './Nav';

function Applylis(){
    return (
      <div>
      <><Nav/></>
        <div className='container'>
          
        <h2 >APPLY LICENSE</h2>
        <form>
          <div className="mb-3">
              <label htmlFor="formGroupExampleInput" className="form-label formhead">FULL NAME</label>
              <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Example input placeholder"/>
            </div>
            <div className="mb-3">
              <label htmlFor="formGroupExampleInput" className="form-label formhead">DATE OF BIRTH</label>
              <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Example input placeholder"/>
            </div>
  
  
            <div className="mb-3">
              <label htmlFor="formGroupExampleInput" className="form-label formhead">SON/DAUGHTHER/WIFE OF:</label>
              <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Example input placeholder"/>
            </div>
  
            <div className="mb-3">
              <label htmlFor="formGroupExampleInput" className="form-label formhead">ADDRESS</label>
              <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Example input placeholder"/>
            </div>
  
            <div className="mb-3">
              <label htmlFor="formFile" className="form-label formhead">ADHAAR FILE</label>
              <input className="form-control" type="file" id="formFile"/>
            </div>
  
            <div className="mb-3">
              <label htmlFor="formFile" className="form-label formhead">IMAGE FILE</label>
              <input className="form-control" type="file" id="formFile"/>
            </div>
  
            <div className="form-floating">
              <select className="form-select" id="floatingSelect" aria-label="Floating label select example">
                <option defaultValue="1">NONE</option>
                <option defaultValue="2">motorcycle without gear</option>
                <option defaultValue="3">motorcycle with gear</option>
                <option defaultValue="4">transport and commercial vehicle</option>
              </select>
              <label htmlFor="floatingSelect" className='formhead'>SELECT CATEGORY</label>
  
            </div>
            <br/>
            {/* <div className="mb-3">
              <label htmlFor ="formGroupExampleInput" className="form-label formhead">DATE OF REQUEST</label>
              <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Example input placeholder"/>
            </div> */}
            <div action="/action_page.php" className='btnleft'>
            <label htmlFor="birthday">DATE OF REQUEST</label>
            <input type="date" id="birthday" name="birthday"/>
           
            
           
            
          </div>
          
    
          
          
        </form>
        <br/><br/>
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
export default Applylis;
