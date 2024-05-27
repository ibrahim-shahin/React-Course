import "../MainContent.css"

const MainContent = () => {
  return (
    <div class="content">
      <h1 className="title">React Fun Facts</h1>
      <ul className="facts">
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100K stars on GitHub</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
    </div>
  )
}

export default MainContent