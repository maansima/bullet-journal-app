import * as React from "react"
import "./themetwo.css"
import Feed from "../feed/feed"
// import theme from "./prev.png"
class Themetwo extends React.Component {
  render() {
    return (
      <div className="main">
        <div className="grid1 left1">
          <h1>Bullet</h1>
          <Feed />
          {/* <form className="form">
            <input type="text" placeholder="Enter your new task here.." />
          </form>
          <button className="create-task1">Create Task</button> */}
          {/* <button className="create-task">Create Task</button> */}
        </div>
        <div className="grid1 right1">
          <div className="sidebar-one">Accountability Task</div>
        </div>
        <div className="sidebar-two">
          {/* <div className="title">Actual Calendar</div> */}

          <div className="container">
            {/* <img src={theme} alt={theme} /> */}
            <h2>Column 1</h2>
            <p>Some text..</p>
          </div>
          <div className="container">
            <h2>Column 2</h2>
            <p>Some text..</p>
          </div>
          <div className="container">
            <h2>Column 3</h2>
            <p>Some text..</p>
          </div>
          <div className="container">
            <h2>Column 4</h2>
            <p>Some text..</p>
          </div>
          <div className="container">
            <h2>Column 5</h2>
            <p>Some text..</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Themetwo
