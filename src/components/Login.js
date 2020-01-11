import React from 'react'

function Login() {
  return (
    <div className="card">
      <div className="card-header">
        Login
      </div>
      <div className="card-body">
        
        <form>
          <div className="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" id="email" aria-describedby="emailHelp" />
            <small id="emailHelp" className="form-text text-muted">Digite seu email.</small>
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" className="form-control" id="pwd" />
          </div>          
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        
      </div>
      <div className="card-footer text-muted">
        2 days ago
      </div>
    </div>
  )
}

export default Login