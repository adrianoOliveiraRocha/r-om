import React from 'react'

function ShowSeccuessMessage(props) {
  return (
    <div className="alert alert-warning alert-dismissible fade show" role="alert">
      <strong>Ok!</strong> {props.message}
      <button type="button" className="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  )
}

export default ShowSeccuessMessage