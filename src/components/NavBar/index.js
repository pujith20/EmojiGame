import './index.css'

const NavBar = props => {
  const {score, topScore} = props
  return (
    <>
      <div className="navbar-con">
        <div className="logo-con">
          <img
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            alt="emoji logo"
          />
          <p>Emoji Game</p>
        </div>
        <div className="score-con">
          <p>Score: {score}</p>
          <p>Top Score: {topScore}</p>
        </div>
      </div>
      <hr className="seperator" />
    </>
  )
}

export default NavBar
