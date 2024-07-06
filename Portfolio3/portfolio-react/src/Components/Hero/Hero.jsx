import './Hero.css'
import profile_img from '../../assets/profile_img.svg'
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={profile_img} alt="Profile Image" />
      <h1>
        {" "}
        <span>I&apos;m Chandan Kumar,</span> full-stack developer
      </h1>
      <p>
        I am frontend developer from Kolkata, India with 2 Years of Experience
      </p>
      <div className="hero-action">
        <AnchorLink className="anchor-link" offset={50} href="#contact">
          <div className="hero-connect">Connect with me</div>
        </AnchorLink>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  );
};

export default Hero
