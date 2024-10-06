import React from 'react';
import '../css/Contact.css';
import '../css/FontAwesomeAll.css';
import imagesContact from './imagesContact';

const submitForm = () => {
  alert('Message sent..!')
}

function Contact() {
  
  return (
    <>
      <section className="pc-banner">
        <img src={imagesContact[0].urlc} alt={imagesContact[0].altc}
          className="pc-banner-img"
        />
        <div className="pc-banner-content">Leave us a message</div>
      </section>

      <main className="pc-main">

        <section className="pc-group pc-contact">
          <h2 className="pc-group-title">Contact us</h2>
          <div className="pc-container pc-container-flex">
            <div className="pc-contact-information pc-column pc-column-50">
              <h3 className="pc-column-title">Contact information</h3>
              <p className="pc-column-txt">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatem eligendi nam suscipit temporibus hic quae saepe.
              </p>
              <p className="pc-column-txt">
                <i className="fas fa-phone pc-icon-phone"></i>
                  &nbsp;Phone 1: 999-999-999
              </p>
              <p className="pc-column-txt">
                <i className="fas fa-phone pc-icon-phone"></i>
                  &nbsp;Phone 2: 555-555-555
              </p>
              <p className="pc-column-txt">
                <i className="fas fa-map-marker-alt"></i> 
                  &nbsp;&nbsp;&nbsp;&nbsp;Caracas - Venezuela
              </p>
              <p className="pc-column-txt">
                <i className="far fa-envelope pc-letter"></i>
                  &nbsp;&nbsp;&nbsp;&nbsp;your@restaurant.com
              </p>
              <div className="pc-social-icon">
                <a href="https://facebook.com/" className="pc-social-icon-link">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://x.com/" className="pc-social-icon-link">
                  <svg xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 512 512"
                    style={{ 
                      width: "18px",
                      fill: "white"
                    }}
                  >
                    <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 
                      106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 
                      48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/>
                  </svg>
                </a>
                <a href="https://gmail.com/" className="pc-social-icon-link">
                  <i className="far fa-envelope"></i>
                </a>
              </div>
            </div>
            <form className="pc-formulario pc-column pc-column-50">
              <label htmlFor="name" className="pc-formulario-label">Name:</label>
              <input
                type="text" 
                className="pc-formulario-input-txt" 
                name="name"
                id="name"
                required
              />
              <label htmlFor="email" className="pc-formulario-label">Email:</label>
              <input 
                type="text" 
                className="pc-formulario-input-txt" 
                name="email"
                id="email"
                required  
              />
              <label htmlFor="phone" className="pc-formulario-label">Phone:</label>
              <input 
                type="text" 
                className="pc-formulario-input-txt" 
                name="phone"
                id="phone"
                required  
              />
              <label htmlFor="message" className="pc-formulario-label">Message:</label>
              <textarea name="message"
                id="message"
                cols="30"
                rows="10"
                className="pc-formulario-textarea"
                required
              >
              </textarea>
              <input type="submit" 
                className="pc-btn pc-formulario-btn" 
                value="Send"
                onClick={submitForm}
              />
            </form>
          </div>
        </section>
      </main>
    </>
  )
}

export default Contact;