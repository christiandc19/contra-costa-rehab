import React, { useRef } from "react";



import './ContactForm.css';
import emailjs from 'emailjs-com'


const ContactForm = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();


        //    Service Id        Template Id                 Public Key (Account Tab) 
        emailjs.sendForm('service_9v2gipl', 'template_rxc8sbg', form.current, 'Rj5e7bWJla-kOEL0H')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        e.target.reset()
    };

    return (
        <>





<div class="container">
    <div class="contact-form-content">

      <div class="left-side">

        <div class="address details">
          <i class="fas fa-map-marker-alt"></i>
          <div class="topic">Address</div><br/>
          <div class="text-one">3700 Sunset Ln, Suite 2</div>
          <div class="text-two">Antioch, CA 94509</div>
        </div>

        <div class="phone details">
          <i class="fas fa-phone-alt"></i>
          <div class="topic">Phone</div><br/>
          <div class="text-one"><a href="tel:3237920502"> +1 (323) 792-0502</a></div>
        </div>

        <div class="email details">
          <i class="fas fa-envelope"></i>
          <div class="topic">Email</div><br/>
          <div class="text-one">info@domainName.com</div>
        </div>
      </div>

      <div class="right-side">
        <div class="topic-text">SEND US A MESSAGE</div> <br/>
        <p className="topic-text-p">Please call our admission department if you have any questions.</p>
      <form ref={form} onSubmit={sendEmail}>
        <div class="input-box">
        <input type="text" name='name' placeholder='Your Name' required />
        </div>
        <div class="input-box">
        <input type="text" name='email' placeholder='Your Email' required />
        </div>
        <div class="input-box">
        <input type="text" name='email' placeholder='Your Phone' required />
        </div>
        <div class="input-box message-box">
        <textarea name="message" rows="4" placeholder="How can we help?" required ></textarea>

        </div>
        <input className="contact-btn" type="submit" value="Submit" />
      </form>
    </div>
    </div>
  </div>

        </>
    )
}

export default ContactForm