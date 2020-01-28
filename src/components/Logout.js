// import React from 'react'

function Logout() {
  localStorage.setItem('loged', undefined)
  window.location.href = "/"
  return null
}

export default Logout