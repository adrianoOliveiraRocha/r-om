import React, { useState } from 'react'
import ShowSeccuessMessage from './ShowSuccessMessage';

function FormLogin(props) {

  let [successMessage, setSuccessMessage] = useState({
    state: false,
    message: undefined
  })
  
  let message
  if(successMessage.state) {
    message = <ShowSeccuessMessage message={successMessage.message}/>
  } else {
    message = null;
  }

  let [enteredData, setEnteredData] = useState({
    email: props.data.email,
    pwd: props.data.pwd
  })

  function updateEmail(event) {
    setEnteredData({
      email: event.target.value,
      pwd: enteredData.pwd
    })
    setSuccessMessage({
      state: false,
      message: undefined
    })
  }

  function updatePwd(event) {
    setEnteredData({
      email: enteredData.email,
      pwd: event.target.value
    })
    setSuccessMessage({
      state: false,
      message: undefined
    })
  }

  function sendData() {
    props.onChangeData(enteredData)
    setSuccessMessage({
      state: true,
      message: 'Dados enviados com sucesso!'
    })
  }

  return (
    
    <form className="form">          
      <div className="form-group">
        <div className="row">
          <div className="col col-lg-3">
            <label htmlFor="email">Email address</label>
          </div> 
          <div className="col">
            <input type="email" className="form-control" id="email" 
              required 
              value={enteredData.email}
              onChange={updateEmail}/>            
          </div>
        </div>            
      </div>

      <div className="form-group">
        <div className="row">
          <div className="col col-lg-3">
            <label htmlFor="pwd">Password</label>
          </div> 
          <div className="col">
            <input type="password" className="form-control" id="pwd" 
              required 
              value={enteredData.pwd}
              onChange={updatePwd}
              />
          </div>
        </div>            
      </div>
            
      <button type="button" className="btn btn-primary"
       onClick={sendData}>Send</button>
      
      <div className="form-group">
        <br />       
        {message}        

        </div>          
      
      
    </form>
  )
}

export default FormLogin