import "./about.css"
import Header from "../../components/Header"
import HeaderImage from '../../images/header_bg_1.jpg'
import StoryImage from '../../images/about1.jpg'
import VisionImage from '../../images/about2.jpg'
import MissionImage from '../../images/about3.jpg'


const About = () => {
  return (
    <>
    <Header title="About Us" image={HeaderImage}></Header>
    <section className="about__story">
      <div className="container about__story-container">
        <div className="about__section-image">
          <img src={StoryImage} alt="Our story Image" />
        </div>
        <div className="about__section-content">
          <h1>Our Story</h1>
          <h3>
          Will's fitness was founded by several college students who love fitness exercise. 
          Some of us have a degree in Exercise Science. We can provides you a professional fitness training guide 
          </h3>

          <h3>
          It is hard to reach out a gym during the covid pandamic. Exercise with us can help you achieve a lifetime of gains 
          </h3>
        </div>
      </div>
    </section>
    <section className="about__Vision">
      <div className="container about__Vision-container">

        <div className="about__section-content">
          <h1>Our Vision</h1>
          <h3>
            Will's fitness will have you getting stronger, growing bigger, and training smarter.
          </h3>
          <h3>
            Once you understand the WHAT, the HOW, and the WHY behind exercise, 
              results are guaranteed.
          </h3>          
          <h3>
            Will's fitness will empower you with the knowledge to easily train at home. 
          </h3>
          <h3>
            Will's Fitness provides professional classes, you can exercise without a gym.
          </h3>
        </div>
        <div className="about__section-image">
          <img src={VisionImage} alt="Our Vision Image" />
        </div>
      </div>
    </section>
    <section className="about__mission">
      <div className="container about__mission-container">
        <div className="about__section-image">
          <img src={MissionImage} alt="Our mission Image" />
        </div>
        <div className="about__section-content">
          <h1>Our Mission</h1>
          <h3>To help our customers turn their fitness visions into seamless reality.</h3>
        </div>
      </div>
    </section>
    </>
  )
}

export default About