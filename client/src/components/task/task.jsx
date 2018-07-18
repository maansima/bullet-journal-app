import * as React from "react"

class Task extends React.Component {
  render() {
    return (
      <div className="tweet-text">
        {this.props.text}
        <div className="tweet-author">{this.props.author.name}</div>
        <div>
          <hr />
        </div>
      </div>
    )
  }
}

export default Task