import React from 'react'
import FormLogin from './FormLogin'

function Login(props) {  
  
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