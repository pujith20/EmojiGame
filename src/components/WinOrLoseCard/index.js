import './index.css'

const WinOrLoseCard = props => {
  const {score, onAgainPlay} = props
  const congratulateText = score === 12 ? 'Won' : 'Lose'
  const imageUrl =
    score === 12
      ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
  const onPlayAgain = () => {
    onAgainPlay()
  }
  return (
    <div className="score-card">
      <div className="score-text-card">
        <img src={imageUrl} alt="win or lose" className="mobile-img" />
        <h1>You {congratulateText}</h1>
        <div className="score-details-card">
          <p>Best Score</p>
          <h1>{score} / 12</h1>
        </div>
        <button type="button" onClick={onPlayAgain}>
          Play Again
        </button>
      </div>
      <img src={imageUrl} alt="win or lose" className="desktop-img" />
    </div>
  )
}

export default WinOrLoseCard
