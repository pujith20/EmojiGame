import {useState} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'
import './index.css'

const EmojiGame = props => {
  const {emojisList} = props
  const [clickedEmojis, setClickedEmojis] = useState([])
  const [score, setScore] = useState(0)
  const [topScore, setTopScore] = useState(0)
  const [toShow, setShow] = useState(false)
  const shuffledEmojisList = () => {
    emojisList.sort(() => Math.random() - 0.5)
  }
  const clickEmoji = id => {
    if (!clickedEmojis.includes(id)) {
      setClickedEmojis(prevEmojis => [...prevEmojis, id])
      setScore(prevScore => prevScore + 1)
      setTopScore(prevTopScore =>
        score + 1 >= prevTopScore ? score + 1 : prevTopScore,
      )
    } else {
      setShow(!toShow)
    }
  }
  const onAgainPlay = () => {
    setClickedEmojis([])
    setScore(0)
    setShow(false)
  }
  return (
    <>
      <NavBar score={score} topScore={topScore} />
      <div className="app-con">
        <div className="res-con">
          {toShow || score === 12 ? (
            <WinOrLoseCard score={score} onAgainPlay={onAgainPlay} />
          ) : (
            <ul className="emojis-list-con">
              {shuffledEmojisList().map(item => (
                <EmojiCard
                  key={item.id}
                  details={item}
                  clickEmoji={clickEmoji}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  )
}

export default EmojiGame
