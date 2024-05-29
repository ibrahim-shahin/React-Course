import "../Card.css"
import Image from "../images/image.png"
import FacebookIcon from "../images/icon-facebook.png"
import TwitterIcon from "../images/icon-twitter.png"
import InstagramIcon from "../images/icon-instagram.png"
import LinkedInIcon from "../images/icon-linkedin.png"
import GithubIcon from "../images/icon-github.png"
import EmailIcon from "../images/icon-email.png"

const Card = () => {
  return (
    <div className="card flex flex-col">
      <img className="" src={Image} alt="react logo" />
      <div className="header w-full p-2 flex flex-col align-middle justify-center content-center">
        <h1 className="text-3xl">Laura Smith</h1>
        <h3 className="text-xl">Frontend Developer</h3>
        <p className="text-base">laurasmith.website</p>
        <button className="flex justify-center bg-white text-black w-3/5"><img src={EmailIcon} alt="" />Email</button>
      </div>
      <div className="content p-2">
        <h2 className="text-xl">About</h2>
        <p className="text-base text-start">I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
        <h2 className="text-xl">Interests</h2>
        <p className="text-base text-start">Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
      </div>
      <div className="social flex justify-evenly w-full h-16 p-2">
        <img src={FacebookIcon} alt="" />
        <img src={TwitterIcon} alt="" />
        <img src={InstagramIcon} alt="" />
        <img src={LinkedInIcon} alt="" />
        <img src={GithubIcon} alt="" />
      </div>
    </div>
  )
}

export default Card