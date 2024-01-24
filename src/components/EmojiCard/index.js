import './index.css'

const EmojiCard = props => {
  const {details, clickEmoji} = props
  const {id, emojiName, emojiUrl} = details
  const onClickEmoji = () => {
    clickEmoji(id)
  }
  return (
    <li key={id} onClick={onClickEmoji}>
      <img src={emojiUrl} alt={emojiName} />
    </li>
  )
}

export default EmojiCard
