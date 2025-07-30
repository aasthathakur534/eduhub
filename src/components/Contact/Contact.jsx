import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'





const Contact = () => {
  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Send us a message <img src={msg_icon} alt="" /></h3>
            <p>Feel free to reach out to us anytime!
            We’re always here to help and answer any questions you may have. Whether you need support, want to give feedback, or just want to say hello, don’t hesitate to get in touch. Your satisfaction is our priority, and we look forward to connecting with you soon!</p>
            <ul>
                <li><img src={mail_icon} alt="" />xyz@gmail.com</li>
                <li><img src={phone_icon} alt="" />8580XXXX</li>
                <li><img src={location_icon} alt="" />77 Massachusettes Ave,Cambridge<br/> MA 02139, United States</li>
            </ul>

        </div>
        <div className="contact-col">
            <form>
                <label>Your name</label>
                <input type="text" name='name' placeholder='Enter your name' required/>
                <label>Phone Number</label>
                <input type="tel" name='phone' placeholder='Enter Your mobile number' required/>
                <label>Write your message here</label>
                <textarea name="message"  rows="6" placeholder='Enter your message' required></textarea>
                <button type='Submit' className='btn dark-btn'>Submit now</button>

            </form>
        </div>


      
    </div>
  )
}

export default Contact
