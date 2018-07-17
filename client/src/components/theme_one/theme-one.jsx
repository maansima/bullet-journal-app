import * as React from "react"

class Theme_One extends React.Component {
  render() {
    return (
      <div className="Main-app">
        MAIN BACKGROUND APP
        {/* this will be white with the bullet and the little input form  */}
        <form className="input-task">
          <input type="text" plaecholder="enter your new task here!" />
        </form>
        <div className="sidebar-one">SIDEBAR TWO</div>
        <div className="sidebar-two">sidebar two</div>
        <div className="sidebar-three">sidebar three</div>
      </div>
    )
  }
}

export default Theme_One
