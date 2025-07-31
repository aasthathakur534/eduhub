import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="" className='about-img' />
        <img src={play_icon} alt="" className='play-icon' onClick={()=>{setPlayState(true)}} />
      </div>
      
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomorrow's Leaders Today</h2>
        <p>
            Founded with a vision to foster academic excellence and innovation, [University Name] has established itself as a premier institution dedicated to shaping future leaders. Our mission is to provide a transformative educational experience that blends rigorous academics with practical skills, nurturing students to become responsible global citizens. With a commitment to integrity, inclusivity, and excellence, we aim to inspire curiosity, critical thinking, and lifelong learning.
        </p>
        <p>
            At [University Name], we offer a diverse array of undergraduate, postgraduate, and doctoral programs across disciplines such as engineering, sciences, humanities, business, and technology. Our faculty comprises experienced educators and industry experts who are actively engaged in cutting-edge research and innovation. The university's state-of-the-art laboratories, research centers, and collaborative industry partnerships empower students and researchers to push the boundaries of knowledge and address real-world challenges.
        </p>
        <p>
            Beyond academics, [University Name] provides a vibrant campus life enriched with cultural events, sports, clubs, and student-led initiatives. We emphasize holistic development through opportunities in leadership, entrepreneurship, and community service. With a strong network of alumni and career support services, our graduates are well-prepared to thrive in their chosen fields and make meaningful contributions to society.


        </p>
      </div>
    </div>
  )
}

export default About
