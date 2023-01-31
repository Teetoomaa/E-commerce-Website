import Navbar from "./Navbar"

const Header = () => {
    return (
      <header className="header-container">
      <Navbar />
  
      <div className="content">
          <h1>A Cup Of Coffee For Everyone</h1>
          <p>We Don't Make Your Coffee, We Make Your Day</p>
          <div className="btn">
          <button>View Menu</button>
          </div>
      </div>
   </header>
    )
  }
  
  export default Header