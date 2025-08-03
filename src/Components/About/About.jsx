import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/abc.jpg'

const About = () => {
  return (
    <div id='about' className='about'>
<div className="about-title">
    <h1>About Me</h1>
    <img src={theme_pattern} alt="" />
</div>
<div className="about-sections">
<div className="about-left">
    <img src={profile_img} alt="" />
</div>
<div className="about-right">
    <div className="about-para">
<p>I’m Manik Kaushik, a dedicated Software Developer with a strong grasp of Java, HTML, CSS, JavaScript, and React.js. <br />
With every project, I focus on writing efficient code, building reusable components, and ensuring that applications perform smoothly across devices. I enjoy transforming design concepts into interactive and functional websites. <br />
My aim is to provide quality and innovation with every line of code.</p>
    
    </div>
    <div className="about-skills">
        <div className="about-skill">
            <p>JAVA</p> <hr style={{width:"80%"}}/>
        </div>
        <div className="about-skill">
            <p>HTML & CSS</p> <hr style={{width:"50%"}}/>
        </div>
        <div className="about-skill">
            <p>React Js</p> <hr style={{width:"70%"}}/>
        </div>
        <div className="about-skill">
            <p>JavaScript</p> <hr style={{width:"60%"}}/>
        </div>
        <div className="about-skill">
            <p>Nextjs</p> <hr style={{width:"50%"}}/>
        </div>
    </div>
</div>
</div>
<div className="about-achievements">
    <div className="about-achievement">
        <h1>2+</h1>
        <p>Years of Experience</p>
    </div>
    <hr />
    <div className="about-achievement">
        <h1>10+</h1>
        <p>Project Completed</p>
    </div>
    <hr />
    <div className="about-achievement">
        <h1>10+</h1>
        <p>Happy Clients</p>
    </div>
</div>
    </div>
  )
}

export default About