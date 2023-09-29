import React from "react";
// import "./../Assets/vendor/bootstrap/js/bootstrap.bundle.min.js";
// import "./../Assets/vendor/aos/aos.js";
// import "./../Assets/vendor/glightbox/js/glightbox.min.js";
// import "./../Assets/vendor/purecounter/purecounter_vanilla.js";
// import "./../Assets/vendor/swiper/swiper-bundle.min.js";
// import "./../Assets/vendor/isotope-layout/isotope.pkgd.min.js";
// import "./../Assets/vendor/php-email-form/validate.js";
// import "./../Assets/js/swiper.min.js";
import {Logo, FooterImg} from "../Utilities/Icons.js";
import {Link} from 'react-router-dom';


function Footer() {
  return (
    <footer id="footer" className="footer">
      <div className="container-fluid">
        <div className="row gy-4">
          <div className="col-lg-3 col-md-12 footer-info">
            <center>
              <Link className="logo align-items-center">
                <img src={Logo.footer_logo} alt=""></img>
              </Link>
            </center>

          </div>
          <div className="col-lg-2 col-6 footer-links">
            <h4>Quick Links</h4>
            <div className="footer-link">
              <ul>
                <li><Link to="/about_us">About Us</Link></li>
                <li><Link to="/visit_visa">Visit Visa</Link></li>
                <li><Link to="/study_permit">Study Permit</Link></li>
                <li><Link to="/work_visa">Work Visa</Link></li>
              </ul>
              <ul>
                <li><Link to="/business_visa">Business Visa</Link></li>
                <li><Link to="/immigrate">Immigration</Link></li>
                <li><Link to="/contactus">Contact Us</Link></li>
                <li><Link to="/blogs">Blog</Link></li>
              </ul>
            </div>
            <div><br />
              <h4>Follow Us</h4>
              <div className="social_links">
                <a href="https://www.facebook.com/GrowingGlobeImmigration/"><i className="fa fa-facebook footer_icon" aria-hidden="true"></i></a>
                <a href="https://twitter.com/growing_globe"><img src={Logo.twitter_logo} className="twitter_img mr-3" alt=""></img></a>
                <a href="https://instagram.com/growingglobeimmigration?igshid=MmIxOGMzMTU="><i className="fa fa-instagram footer_icon" aria-hidden="true"></i></a>
                <a href="https://www.linkedin.com/company/growing-globe-immigration-inc/"><i className="fa fa-linkedin footer_icon" aria-hidden="true"></i></a>
              </div>
            </div>

          </div>
          <div className="col-lg-2 col-6 footer-links">
            <h4>Contact</h4>
            <ul>
              <li><Link to="tel:16477055403">Canada : +16477055403</Link></li>
              <li><Link to="tel:971501328189">UAE : +971501328189</Link></li>
              <li><Link to="tel:18008890542">India : 18008890542</Link></li>
            </ul>
          </div>
          <div className="col-lg-2 col-6 footer-links">
            <h4>Locations</h4>
            <div className="flex_this">
              <ul>
                <li><Link className="footer_subtitle">Canada</Link></li>
                <li><Link to="/contactus">Toronto </Link></li>
                <li><Link to="/contactus">Brampton</Link></li>
                <li><Link to="/contactus">Alberta</Link></li>
                <li><Link className="footer_subtitle">UAE</Link></li>
                <li><Link to="/contactus">Dubai</Link></li>

              </ul>
              <ul>
                <li><Link className="footer_subtitle">India</Link></li>
                <li><Link to="/contactus">New Delhi</Link></li>
                <li><Link to="/contactus">Jalandhar</Link></li>
                <li><Link to="/contactus">Ahmedabad</Link></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 footer-contact text-center text-md-start">
            <div>
              <img src={FooterImg.footer_img4} className="footer_img" alt=""></img>
              <img src={FooterImg.footer_img} className="footer_img" alt=""></img>
              <img src={FooterImg.footer_img2} className="footer_img" alt=""></img>
              <img src={FooterImg.footer_img3} className="footer_img" alt=""></img>
            </div>

          </div>
        </div>
      </div>
      <div className="container-fluid mt-4">
        <div className="copyright">
          &copy; Copyright <strong><span>Growing Globe Immigration</span></strong>. All Rights Reserved | Designed by <a href="https://rajarshisolutions.com/">Rajarshi Solutions</a>
        </div>
      </div>

        <script src='https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js'></script>
      <script src='https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js'></script>
    </footer>
  );
}

export default Footer;
