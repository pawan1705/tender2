import './Nav.css';
import React , { useState , useEffect } from 'react';
import { Link } from 'react-router-dom';

function Nav() {

    const [ NavContent , setNavContent ] = useState();

    useEffect(()=>{
        setInterval(()=>{
           if(localStorage.getItem("role")=="admin")
           {
            setNavContent(<div>
                {/* Navbar Start */}
                <div class="container-fluid sticky-top bg-dark bg-light-radial shadow-sm px-5 pe-lg-0">
                      <nav class="navbar navbar-expand-lg bg-dark bg-light-radial navbar-dark py-3 py-lg-0">
                          <a href="" class="navbar-brand">
                              <h1 class="m-0 display-4 text-uppercase text-white">Tenders</h1>
                          </a>
                          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                              <span class="navbar-toggler-icon"></span>
                          </button>
                          <div class="collapse navbar-collapse" id="navbarCollapse">
                              <div class="navbar-nav ms-auto py-0">
                                  <a class="nav-item nav-link active"><Link to="/admin" >Admin Home</Link></a>
                                  <a class="nav-item nav-link active"><Link to="/manageusers" >Manage Users</Link></a>
                                  <div class="nav-item dropdown">
                                      <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Category</a>
                                      <div class="dropdown-menu m-0">
                                          <a  class="dropdown-item"><Link to="/addcategory" >Add Category</Link></a>
                                          <a  class="dropdown-item"><Link to="/addsubcategory" >Add SubCategory</Link></a>
                                      </div>
                                  </div>
                                  <a class="nav-item nav-link bg-primary text-white px-5 ms-3 d-none d-lg-block"><Link style={{"color":"white"}} to="/logout" >Logout</Link><i class="bi bi-arrow-right"></i></a>
                              </div>
                          </div>
                      </nav>
                  </div>
                  {/* Navbar End */}    
                  </div>);    
           }
           else if(localStorage.getItem("role")=="user")
           {
            setNavContent(<div>
                {/* Navbar Start */}
                <div class="container-fluid sticky-top bg-dark bg-light-radial shadow-sm px-5 pe-lg-0">
                      <nav class="navbar navbar-expand-lg bg-dark bg-light-radial navbar-dark py-3 py-lg-0">
                          <a href="" class="navbar-brand">
                              <h1 class="m-0 display-4 text-uppercase text-white">Tenders</h1>
                          </a>
                          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                              <span class="navbar-toggler-icon"></span>
                          </button>
                          <div class="collapse navbar-collapse" id="navbarCollapse">
                              <div class="navbar-nav ms-auto py-0">
                                  <a class="nav-item nav-link active"><Link to="/user" >User Home</Link></a>
                                  <a class="nav-item nav-link active"><Link to="/searchtenders" >Search Tenders</Link></a>
                                  <a class="nav-item nav-link bg-primary text-white px-5 ms-3 d-none d-lg-block"><Link style={{"color":"white"}} to="/logout" >Logout</Link><i class="bi bi-arrow-right"></i></a>
                              </div>
                          </div>
                      </nav>
                  </div>
                  {/* Navbar End */}    
                  </div>);    
           }                     
           else
           {
            setNavContent(<div>
                {/* Navbar Start */}
                <div class="container-fluid sticky-top bg-dark bg-light-radial shadow-sm px-5 pe-lg-0">
                      <nav class="navbar navbar-expand-lg bg-dark bg-light-radial navbar-dark py-3 py-lg-0">
                          <a href="" class="navbar-brand">
                              <h1 class="m-0 display-4 text-uppercase text-white">Tenders</h1>
                          </a>
                          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                              <span class="navbar-toggler-icon"></span>
                          </button>
                          <div class="collapse navbar-collapse" id="navbarCollapse">
                              <div class="navbar-nav ms-auto py-0">
                                  <a class="nav-item nav-link active"><Link to="/" >Home</Link></a>
                                  <a class="nav-item nav-link"><Link to="/about" >About</Link></a>
                                  <a class="nav-item nav-link"><Link to="/contact" >Contact</Link></a>
                                  {/*<div class="nav-item dropdown">
                                      <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                                      <div class="dropdown-menu m-0">
                                          <a href="project.html" class="dropdown-item">Our Project</a>
                                          <a href="team.html" class="dropdown-item">The Team</a>
                                          <a href="testimonial.html" class="dropdown-item">Testimonial</a>
                                          <a href="blog.html" class="dropdown-item">Blog Grid</a>
                                          <a href="detail.html" class="dropdown-item">Blog Detail</a>
                                      </div>
                                  </div>*/}
                                  <a class="nav-item nav-link"><Link to="/service" >Service</Link></a>
                                  <a class="nav-item nav-link"><Link to="/register" >Register</Link></a>
                                  <a class="nav-item nav-link bg-primary text-white px-5 ms-3 d-none d-lg-block"><Link style={{"color":"white"}} to="/login" >Login</Link><i class="bi bi-arrow-right"></i></a>
                              </div>
                          </div>
                      </nav>
                  </div>
                  {/* Navbar End */}    
                  </div>);
           }
        },2000);  
       },[]);  


  return(<div>
{ NavContent }
  </div>);
}

export default Nav;
