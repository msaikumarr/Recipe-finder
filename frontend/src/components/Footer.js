import React from 'react'
import './Footer.css';

const Footer = () => {
  return (
    <div>
      <div class="follow-us-section pt-5 pb-5" id="followUsSection">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h1 class="follow-us-section-heading">Follow Us</h1>
          </div>
          <div class="col-12">
            <div class="d-flex flex-row justify-content-center">
              <div class="follow-us-icon-container">
                <i class="fab fa-twitter icon"></i>
              </div>
              <div class="follow-us-icon-container">
                <i class="fab fa-instagram icon"></i>
              </div>
              <div class="follow-us-icon-container">
                <i class="fab fa-facebook icon"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-section pt-5 pb-5">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center">
            <img
              src="https://i.imgur.com/raLQH6o.jpeg"
              class="spice-scoop-logo"
            />
            <h1 class="footer-section-mail-id">spicescoop@gmail.com</h1>
            <p class="footer-section-address">
              SRKR ENGINEERING COLLEGE, BHIMAVARAM
            </p>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Footer
