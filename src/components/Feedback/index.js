// Write your React code here.
import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {isFeedBack: false}

  onClickEmoji = () => {
    console.log('emoji buttons Clicked')
    this.setState({isFeedBack: true})
  }

  givingFeedBack = () => {
    const {resources} = this.props
    const {emojis} = resources
    return (
      <div className="FeedBackContainer">
        <h1 className="heading">
          How satisfied are you with our customer support performance
        </h1>
        <ul className="emoji-list">
          {emojis.map(eachEmoji => (
            <li key={eachEmoji.id}>
              <button
                className="button"
                type="button"
                onClick={this.onClickEmoji}
              >
                <img
                  src={eachEmoji.imageUrl}
                  alt={eachEmoji.name}
                  className="emoji-size"
                />
                <br />
                <span className="emojiName">{eachEmoji.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  submittedFeedback = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources

    return (
      <div className="ThankyouContainer">
        <img src={loveEmojiUrl} alt="love emoji" />
        <h1 className="thankyou-text">Thank you!</h1>
        <p className="description">
          We will use your feed back to improve our customer service performance
        </p>
      </div>
    )
  }

  render() {
    const {isFeedBack} = this.state
    return (
      <div className="bgContainer">
        <div className="card-container">
          {isFeedBack ? this.submittedFeedback() : this.givingFeedBack()}
        </div>
      </div>
    )
  }
}

export default Feedback
