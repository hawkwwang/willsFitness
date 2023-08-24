import { Link } from "react-router-dom"
import Image from '../images/main_header.png'

const MainHeader = () => {
  return (
    <header className='main__header'>
      <div className="container main__header-container">
        <div className="main__header-left">

          <h4>Virtual fitness platform</h4>
          <h1>May the health be with you!</h1>
          <p>
          Will's fitness is a Virtual Group Fitness and Live Personal Training Platform. Our goal is to motivate our members and the community their healthiest and most active life! This can be accomplished by continually eating healthy and exercising! Select a pricing option that fits your need!
          </p>
          <Link to="/plans" className="btn lg">
            Get Started
          </Link>
        </div>
        <div className="main__header-right">
          <div className="main__header-circle"></div>
          <div className="main__header-image">
            <img src={Image} alt="Main Header Image" />
          </div>
        </div>

      </div>
    </header>
  )
}

export default MainHeader