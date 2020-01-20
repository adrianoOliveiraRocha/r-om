import React from 'react'
import FormLogin from './FormLogin'
import HomeAdmin from './HomeAdmin'

function Login(props) {  
  
  if(localStorage.getItem('loged')) {
    console.log("It's loged")
  } else {
    console.log('Not loged')
  }

  return (
    <div className="card">
      <div className="card-header">
        Login
      </div>
      <div className="card-body">
        <FormLogin data={props.data} onChangeData={props.onChangeData}/>        
      </div>
      <div className="card-footer text-muted">
        Some message
      </div>
    </div>
  )

}

export default Login