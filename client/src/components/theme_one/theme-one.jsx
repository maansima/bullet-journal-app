import * as React from "react"
import "./theme_one.css"
import Feed from "../feed/feed"

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
        <Feed />

      </div>

    )
  }
}

export default Theme_One
