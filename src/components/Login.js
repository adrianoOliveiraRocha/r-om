import React from 'react'
import FormLogin from './FormLogin'
import HomeAdmin from './HomeAdmin'

function Login(props) {  
  console.log(localStorage.getItem('loged') !== 'undefined')
  console.log(localStorage.getItem('loged'))
  return (
    <div className="card">
      <div className="card-header">
        Login
      </div>
      <div className="card-body">
        {localStorage.getItem('loged') !== 'undefined' ? <HomeAdmin /> : <FormLogin data={props.data} onChangeData={props.onChangeData}/>}
                
      </div>
      <div className="card-footer text-muted">
        Some message
      </div>
    </div>
  )

}

export default Login