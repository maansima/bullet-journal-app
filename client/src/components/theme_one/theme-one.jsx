import * as React from "react"
import "./theme_one.css"

class Theme_One extends React.Component {
  render() {
    return (
      <div className="Main-app">
        MAIN BACKGROUND APP
        {/* this will be white with the bullet and the little input form  */}
        <form className="input-task">
          Bullet
          <input type="text" placeholder="enter your new task here!" />
          <button>Create Task</button>
        </form>
        <div className="sidebar-one">Accountability Task</div>
        <div className="sidebar-two">Actual Calendar</div>
      </div>
    )
  }
}

export default Theme_One
