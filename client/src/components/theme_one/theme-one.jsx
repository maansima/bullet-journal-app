import * as React from "react"
import "./theme_one.css"

class Theme_One extends React.Component {
  render() {
    return (
      <div className="main-app">
        <style>
          @import url('https://fonts.googleapis.com/css?family=Muli');
        </style>
        {/* <div className="container_for_top"> */}
        <div className="grid left">
          <h1>Bullet</h1>
          <form className="form">
            <input type="text" placeholder="enter your new task here!" />
          </form>
        </div>
        <div className="grid right">
          <div className="sidebar-one">Accountability Tasks</div>
        </div>
        {/* </div> */}
        <div className="sidebar-two">
          {/*  The div class title is actually for the Actual Calendar */}

          <div className="column">
            <h2>Date One</h2>
            <p>Some text..</p>
            <label htmlFor className="container">
              Enter your task:
              <input type="checkbox" checked="checked" />
              <span className="checkmark" />
            </label>
          </div>
          <div className="column">
            <h2>Date Two</h2>
            <p>Some text..</p>
          </div>
          <div className="column">
            <h2>Date Three</h2>
            <p>Some text..</p>
          </div>
          <div className="column">
            <h2>Date Four</h2>
            <p>Some text..</p>
          </div>
          <div className="column">
            <h2>Date Five</h2>
            <p>Some text..</p>
          </div>
        </div>
      </div>

      // <div className="Main-app">
      //   MAIN BACKGROUND APP
      //   {/* this will be white with the bullet and the little input form  */}
      //   <form className="input-task">
      //     <style>
      //       @import url('https://fonts.googleapis.com/css?family=Knewave');
      //     </style>
      //     Bullet
      //     <input type="text" placeholder="enter your new task here!" />
      //     <button>Create Task</button>
      //   </form>
      //   <div className="sidebar-one">Accountability Task</div>
      //   <div className="sidebar-two">
      //     Actual Calendar
      //     <div className="row">
      //       <div className="column">
      //         <h2>Column 1</h2>
      //         <p>Some text..</p>
      //       </div>
      //       <div className="column">
      //         <h2>Column 2</h2>
      //         <p>Some text..</p>
      //       </div>
      //       <div className="column">
      //         <h2>Column 3</h2>
      //         <p>Some text..</p>
      //       </div>
      //       <div className="column">
      //         <h2>Column 4</h2>
      //         <p>Some text..</p>
      //       </div>
      //     </div>
      //   </div>
      // </div>
    )
  }
}

export default Theme_One
