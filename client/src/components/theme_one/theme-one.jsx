import * as React from "react"
import "./theme_one.css"
import Feed from "../feed/feed"

class Theme_One extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <div className="main-app">
        <style>
          @import url('https://fonts.googleapis.com/css?family=Muli');
        </style>

        {/* <div className="container_for_top"> */}
        <div className="grid left_side">
          <h1>Bullet</h1>

          <Feed />
        </div>
        <div className="grid right_side">
          <div className="sidebar-one">Accountability Tasks</div>
        </div>
        {/* </div> */}
        <div className="sidebar-two">
          {/*  The div class title is actually for the Actual Calendar */}
          <a href="#" className="previous round">
            &#8249;
          </a>

          <div className="column">
            <h2>Date One</h2>
            <p>Some text..</p>
            <div className="checkbox_theme_one">
              <input type="checkbox" name="my-checkbox" id="opt-in" />
              <label for="opt-in">Check me!</label>
            </div>
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
          <a href="#" className="next round">
            &#8250;
          </a>
        </div>
      </div>
    )
  }
}

export default Theme_One
