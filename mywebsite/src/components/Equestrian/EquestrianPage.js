
import {connect} from 'react-redux'
import { Nav, Navbar,} from 'react-bootstrap'
import React, { Component } from 'react';
import { Link } from "react-router-dom";
import EquestrianNav from './EquestrianNav'

import about from '../../images/about-image.jpg'
import work1 from '../../images/work-1.jpg'
import work2 from '../../images/work-2.jpg'
import work3 from '../../images/work-3.jpg'
import work4 from '../../images/work-4.jpg'
import sweetie from '../../images/sweetie.jpg'

class EquestrianPage extends Component {
 



    render() {

        return (
            <div >

                <EquestrianNav />
               
                <div id="equestrian-bg">
                     <div class="text-eq">
                    <h1 id="comming">Coming Soon...</h1>
                    <button type="button" class="btn btn-light button-back" onClick={()=> this.props.history.push('/')}>Back to Welcome Page</button>
                    </div>
                </div>


          

{/*    



<div class="container">
     <div class="row">
          <section id="home" class="parallax-section">

               <div class="col-md-offset-1 col-md-10 col-sm-12">
                    <div class="home-wrapper">
                         <h3 class="wow fadeInUp" data-wow-delay="0.4s">Being an artist</h3>
                         <h1 class="wow fadeInUp" data-wow-delay="0.6s">Art Studio from Asia passionated in creativity since 2018</h1>
                         <a href="#about" class="wow fadeInUp smoothScroll arrow-btn" data-wow-delay="1s"><i class="fa fa-angle-double-down"></i></a>
                    </div>
               </div>

          </section>
     </div>
</div>



<section id="about" class="parallax-section">
     <div class="container">
          <div class="row">

               <div class="col-md-4 col-sm-8">
                    <img src={about} class="wow fadeInUp img-responsive" data-wow-delay="0.2s" alt="about image"/>
                    <div class="wow fadeInUp" data-wow-delay="0.4s">
                         <h4>Interested to Work?</h4>
                         <p>Sed varius augue nec pharetra scelerisque. Maecenas sapien ex, rutrum sit amet dapibus eu, tincidunt vitae nulla.</p>
                         <a href="#">hello@company.com</a>
                    </div>
               </div>

               <div class="col-md-8 col-sm-12">
                    <div class="about-thumb">
                         <div class="wow fadeInUp section-title" data-wow-delay="0.6s">
                              <h3>we make things better</h3>
                              <h2>Curabitur tristique ante non malesuada dignissim</h2>
                         </div>
                         <div class="wow fadeInUp" data-wow-delay="0.8s">
                              <p>Credit goes to <a href="#"><b>Unsplash</b></a> for images used in this artist web page. Please tell your friends about Tooplate website. You can feel free to use this template as you wish. Fusce quis fermentum enim, at rutrum enim. Sed tellus metus, laoreet eu turpis vel, sollicitudin feugiat libero. Ut ligula augue, condimentum a purus hendrerit, suscipit vehicula dui. Sed non purus purus. Mauris nunc lectus, porta pellentesque nisl nec, porttitor ultricies purus.</p>
                         </div>
                    </div>
               </div>

          </div>
     </div>
</section>



<section id="work" class="parallax-section">
     <div class="container">
          <div class="row">

               <div class="col-md-12 col-sm-12">
           
                    <div class="wow fadeInUp section-title" data-wow-delay="0.2s">
                         <h2>Work Collection</h2>
                         <p>Morbi sit amet erat ullamcorper, varius erat at, vehicula massa. Phasellus vel vestibulum purus. Sed id sollicitudin ex, id eleifend purus. Nulla id fermentum nisl, vel tincidunt orci. Curabitur tristique ante non malesuada dignissim. Pellentesque id odio vitae enim efficitur ornare a non metus.</p>
                    </div>
               </div>

               <div class="wow fadeInUp col-md-3 col-sm-6" data-wow-delay="0.4s">
                
                    <div class="work-thumb">
                         <a href='#' class="image-popup">
                              <img src={work1}class="img-responsive" alt="Fine Arts"/>
                         </a>
                    </div>
                    <h4>Fine Arts</h4>
               </div>

               <div class="wow fadeInUp col-md-3 col-sm-6" data-wow-delay="0.6s">
                   
                    <div class="work-thumb">
                         <a href='#' class="image-popup">
                              <img src={work2} class="img-responsive" alt="Logo Design"/>
                         </a>
                    </div>
                    <h4>Logo Design</h4>
               </div>

               <div class="wow fadeInUp col-md-3 col-sm-6" data-wow-delay="0.8s">
                   
                    <div class="work-thumb">
                         <a href="#" class="image-popup">
                              <img src={work3} class="img-responsive" alt="Photography"/>
                         </a>
                    </div>
                    <h4>Photography</h4>
               </div>

               <div class="wow fadeInUp col-md-3 col-sm-6" data-wow-delay="0.8s">
                 
                    <div class="work-thumb">
                         <a href="#" class="image-popup">
                              <img src={work4} class="img-responsive" alt="Cinematography"/>
                         </a>
                    </div>
                    <h4>Cinematography</h4>
               </div>

          </div>
     </div>
</section>



<section id="contact" class="parallax-section">
     <div class="container">
          <div class="row">

               <div class="col-md-12 col-sm-12">
                    
                    <div class="wow fadeInUp section-title" data-wow-delay="0.2s">
                         <h2>Get in touch</h2>
                         <p>Quisque lobortis nibh eu nisi sodales gravida. Sed vehicula mauris in orci vehicula, at luctus mauris hendrerit. Fusce aliquet quis ante ac pretium. Donec quis nibh sed elit rhoncus condimentum.</p>
                    </div>
               </div>

               <div class="col-md-12 col-sm-12">
                  
                    <div class="wow fadeInUp" data-wow-delay="0.6s">
                        <form action="#" method="post" id="contact-form">
                              <div class="col-md-6 col-sm-6">
                                   <input type="text" class="form-control" name="name" placeholder="Name"/>
                              </div>
                              <div class="col-md-6 col-sm-6">
                                   <input type="email" class="form-control" name="email" placeholder="Email"/>
                              </div>
                              <div class="col-md-12 col-sm-12">
                                   <textarea class="form-control" rows="5" name="message" placeholder="Message"></textarea>
                              </div>
                              <div class="col-md-offset-3 col-md-6 col-sm-offset-3 col-sm-6">
                                   <button id="submit" type="submit" class="form-control" value="send-mail" name="submit">Send Message</button>
                              </div>
                        </form>
                    </div>
               </div>

          </div>
     </div>
</section>



<footer id="footer" class="parallax-section">
    <div class="container">
        <div class="row">

               <div class="wow fadeInUp col-md-4 col-sm-4" data-wow-delay="0.2s">
                    <h4>Artist Digital Studio</h4>
                    <p>Curabitur quis volutpat elit. Proin sed sagittis arcu, non tristique libero. Quisque lobortis nibh eu nisi sodales gravida.</p>
               </div>

               <div class="wow fadeInUp col-md-4 col-sm-4" data-wow-delay="0.4s">
                    <div class="support-cus">
                         <h4>Reach Out</h4>
                         <p>456 Old Street, New City, ASIA</p>
                    </div>
                    <div class="support-cus">
                         <h4>Contact Info</h4>
                         <p><a href="#">hello@company.com</a></p>
                         <p>Tel: 010-020-0890</p>
                    </div>
               </div>

               <div class="wow fadeInUp col-md-4 col-sm-4" data-wow-delay="0.6s">
                    <h4>Newsletter</h4>
                    <form class="newsletter" action="#" method="get">
                         <input name="email" type="email" class="form-control" id="email" placeholder="Your Email Address"/>
                         <button name="submit" value="sign-up" class='form-control'>Sign Up</button>
                    </form>
               </div>

               <div class="col-md-12 col-sm-12 clearfix">
                    <div class="dash-line"></div>
               </div>

               <div class="wow fadeInUp col-md-6 col-sm-6" data-wow-delay="0.8s">
                    <p class="copyright-text">Copyright © 2018 Company Name 
                    
                    . Design: Tooplate</p>
               </div>

               <div class="wow fadeInUp col-md-6 col-sm-6" data-wow-delay="1s">
                    <ul class="social-icon">
                         <li><a href="#" class="fa fa-facebook"></a></li>
                         <li><a href="#" class="fa fa-twitter"></a></li>
                         <li><a href="#" class="fa fa-instagram"></a></li>
                         <li><a href="#" class="fa fa-behance"></a></li>
                         <li><a href="#" class="fa fa-github"></a></li>
                    </ul>
               </div>

          </div>
     </div>
</footer> */}
            </div>
        );
    }

}

export default EquestrianPage;


 
  

