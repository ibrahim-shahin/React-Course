import "../Header.css"
import reactLogo from "../images/reactjs-icon.png"

const Header = () => {
  return (
    <div class="header">
      <div className="logo">
        <img src={reactLogo} alt="React Logo" />
        <h3>React Facts</h3>
      </div>
      
      <h3>React course - project 1</h3>
    </div>
  )
}

export default Header