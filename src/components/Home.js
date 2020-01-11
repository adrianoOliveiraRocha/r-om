import React from 'react'
import { NavLink } from 'react-router-dom'

function Home() {
  return (
    <div className="container">
      <br />
      <div className="card text-center">
        <div className="card-header">
          Todas as Categorias
        </div>
        <div className="card-body">
          
          <div className="container">
            <div className="row">
              <div className="col col-lg-3">
                
                <div className="btn-group-vertical" role="group" aria-label="Button group with nested dropdown">
                  <NavLink to="/category?id=1" className="btn">Category 1</NavLink>
                  <NavLink to="/category?id=2" className="btn">Category 2</NavLink>
                  <NavLink to="/category?id=3" className="btn">Category 3</NavLink> 
                  <NavLink to="/category?id=4" className="btn">Category Large Name</NavLink>                  

                </div>

              </div>
              <div className="col">                

                <div className="row row-cols-1 row-cols-md-3">
                  <div className="col mb-4">
                    <div className="card">
                      <img src="..." className="card-img-top" alt="..." />
                      <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col mb-4">
                    <div className="card">
                      <img src="..." className="card-img-top" alt="..." />
                      <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col mb-4">
                    <div className="card">
                      <img src="..." className="card-img-top" alt="..." />
                      <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col mb-4">
                    <div className="card">
                      <img src="..." className="card-img-top" alt="..." />
                      <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>          
          </div>

        </div>
        <div className="card-footer text-muted">
          Something
        </div>
      </div>
    </div>
  )
}

export default Home