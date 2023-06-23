import './Footer.css';
import { useEffect , useState } from 'react';

function Footer() {

    const [ FooterContent , setFooterContent ] = useState();

    useEffect(()=>{
        setInterval(()=>{
           if(localStorage.getItem("role")=="admin" || localStorage.getItem("role")=="user")
           {
            setFooterContent(<div>
                {/* Footer Start */}
        
            <div class="container-fluid bg-dark bg-light-radial text-white border-top border-primary px-0">
                <div class="d-flex flex-column flex-md-row justify-content-between">
                    <div class="py-4 px-5 text-center text-md-start">
                        <p class="mb-0">&copy; <a class="text-primary" href="#">Tenders</a>. All Rights Reserved.</p>
                    </div>
                    <div class="py-4 px-5 bg-primary footer-shape position-relative text-center text-md-end">
                        <p class="mb-0">Designed by <a class="text-dark" href="">Tenders</a></p>
                    </div>
                </div>
            </div>
            {/* Footer End */}
            </div>);    
           }
           else
           {
            setFooterContent(<div>
                {/* Footer Start */}
                <div class="footer container-fluid position-relative bg-dark bg-light-radial text-white-50 py-6 px-5">
                <div class="row g-5">
                    <div class="col-lg-6 pe-lg-5">
                        <a href="" class="navbar-brand">
                            <h1 class="m-0 display-4 text-uppercase text-white">Tenders</h1>
                        </a>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quo voluptates excepturi iste temporibus reiciendis eveniet vero nesciunt iusto neque, illum deleniti? Aperiam rerum molestiae recusandae odio vitae architecto voluptas officia ipsam.</p>
                        <p><i class="fa fa-map-marker-alt me-2"></i>X Street, Indore , India</p>
                        <p><i class="fa fa-phone-alt me-2"></i>XXX XXX XXXX</p>
                        <p><i class="fa fa-envelope me-2"></i>info@example.com</p>
                        <div class="d-flex justify-content-start mt-4">
                            <a class="btn btn-lg btn-primary btn-lg-square rounded-0 me-2" href="#"><i class="fab fa-twitter"></i></a>
                            <a class="btn btn-lg btn-primary btn-lg-square rounded-0 me-2" href="#"><i class="fab fa-facebook-f"></i></a>
                            <a class="btn btn-lg btn-primary btn-lg-square rounded-0 me-2" href="#"><i class="fab fa-linkedin-in"></i></a>
                            <a class="btn btn-lg btn-primary btn-lg-square rounded-0" href="#"><i class="fab fa-instagram"></i></a>
                        </div>
                    </div>
                    <div class="col-lg-6 ps-lg-5">
                        <div class="row g-5">
                            <div class="col-sm-6">
                                <h4 class="text-white text-uppercase mb-4">Quick Links</h4>
                                <div class="d-flex flex-column justify-content-start">
                                    <a class="text-white-50 mb-2" href="#"><i class="fa fa-angle-right me-2"></i>Home</a>
                                    <a class="text-white-50 mb-2" href="#"><i class="fa fa-angle-right me-2"></i>About Us</a>
                                    <a class="text-white-50 mb-2" href="#"><i class="fa fa-angle-right me-2"></i>Our Services</a>
                                    <a class="text-white-50 mb-2" href="#"><i class="fa fa-angle-right me-2"></i>Meet The Team</a>
                                    <a class="text-white-50" href="#"><i class="fa fa-angle-right me-2"></i>Contact Us</a>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <h4 class="text-white text-uppercase mb-4">Popular Links</h4>
                                <div class="d-flex flex-column justify-content-start">
                                    <a class="text-white-50 mb-2" href="#"><i class="fa fa-angle-right me-2"></i>Home</a>
                                    <a class="text-white-50 mb-2" href="#"><i class="fa fa-angle-right me-2"></i>About Us</a>
                                    <a class="text-white-50 mb-2" href="#"><i class="fa fa-angle-right me-2"></i>Our Services</a>
                                    <a class="text-white-50 mb-2" href="#"><i class="fa fa-angle-right me-2"></i>Meet The Team</a>
                                    <a class="text-white-50" href="#"><i class="fa fa-angle-right me-2"></i>Contact Us</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
        
            <div class="container-fluid bg-dark bg-light-radial text-white border-top border-primary px-0">
                <div class="d-flex flex-column flex-md-row justify-content-between">
                    <div class="py-4 px-5 text-center text-md-start">
                        <p class="mb-0">&copy; <a class="text-primary" href="#">Tenders</a>. All Rights Reserved.</p>
                    </div>
                    <div class="py-4 px-5 bg-primary footer-shape position-relative text-center text-md-end">
                        <p class="mb-0">Designed by <a class="text-dark" href="">Tenders</a></p>
                    </div>
                </div>
            </div>
            {/* Footer End */}
            </div>);
           }
        },2000);  
       },[]);        

  return(<div>
      {FooterContent}
  </div>);
}

export default Footer;
