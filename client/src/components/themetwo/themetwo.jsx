import * as React from "react"
import "./themetwo.css"

class Themetwo extends React.Component {
  render() {
    return (
      <div className="main">
        <div className="grid left">
          <h1>Bullet</h1>
          <form className="form">
            <input type="text" placeholder="Enter your new task here.." />
          </form>
        </div>
        <div className="grid right">
          <div className="sidebar-one">Accountability Task</div>
        </div>
        <div className="sidebar-two">
          {/* <div className="title">Actual Calendar</div> */}
          <div className="column">
            <h2>Column 1</h2>
            <p>Some text..</p>
          </div>
          <div className="column">
            <h2>Column 2</h2>
            <p>Some text..</p>
          </div>
          <div className="column">
            <h2>Column 3</h2>
            <p>Some text..</p>
          </div>
          <div className="column">
            <h2>Column 4</h2>
            <p>Some text..</p>
          </div>
          <div className="column">
            <h2>Column 5</h2>
            <p>Some text..</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Themetwo
