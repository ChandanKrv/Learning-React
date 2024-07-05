import './Hero.css'
import profile_img from '../../assets/profile_img.svg'

const Hero = () => {
  return (
    <div className='hero'>
          <img src={profile_img} alt="Profile Image" />
          <h1> <span>I&apos;m Chandan Kumar,</span> full-stack developer</h1>
          <p>I am frontend developer from Kolkata, India with 2 Years of Experience</p>
          <div className="hero-action">
              <div className="hero-connect">Connect with me</div>
              <div className="hero-resume">My Resume</div>
    </div>
      
      </div>
  )
}

export default Hero
