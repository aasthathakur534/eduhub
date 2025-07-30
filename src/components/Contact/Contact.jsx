import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'
const Contact = () => {
 const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "2f8e5436-6e36-4828-909c-76e385b89303");

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    }).then((res) => res.json());

    const data = await res.json();

    if (res.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
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
            <form onSubmit={onSubmit}>
                <label>Your name</label>
                <input type="text" name='name' placeholder='Enter your name' required/>
                <label>Phone Number</label>
                <input type="tel" name='phone' placeholder='Enter Your mobile number' required/>
                <label>Write your message here</label>
                <textarea name="message"  rows="6" placeholder='Enter your message' required></textarea>
                <button type='Submit' className='btn dark-btn'>Submit now <img src={white_arrow} alt="" /></button>

            </form>
            <span>{result}</span>
        </div>


      
    </div>
  )
}

export default Contact
