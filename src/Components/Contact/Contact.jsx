import React from 'react'
import './Contact.css'
import openEmail from '../../assets/open-email.png'
import emailLogo from '../../assets/email-logo.png'
import phoneLogo from '../../assets/phone-logo.png'
import locationLogo from '../../assets/location-logo.png'

const Contact = () => {
  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Connect With Us <img src={openEmail} alt="" /></h3>
            <p>Feel free to reach out to Tombak Technology Sdn Bhd. Our team will respond to your message during an office hour (9:00am-6:00pm).</p>
            <ul>
                <li><img src={emailLogo} alt="" /> info@tombak.net</li>
                <li><img src={phoneLogo} alt="" /> +60 133924933</li>
                <li><img src={locationLogo} alt="" /> No.6A, Jalan Emas 1, Bandar Sungai Emas, 42700 Banting, Selangor MALAYSIA</li>
            </ul>

        </div>
        <div className="contact-col">
            <h3>Send Us a Message</h3>
            <form>
                <input type="text" placeholder='Your Name' required />
                <input type="email" placeholder='Your Email' required />
                <textarea name="" id="" cols="30" rows="10" placeholder='Your Message' required></textarea>
                <button type="submit" className='btn dark-btn'>Send Message</button>
            </form>
        </div>
    </div>
  )
}

export default Contact
