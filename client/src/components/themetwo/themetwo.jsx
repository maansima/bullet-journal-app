import * as React from "react"
import "./themetwo.css"
import Feed from "../feed/feed"
import moment from "../../utils/moment"
import { eachOfLimit } from "async"

class Themetwo extends React.Component {
  state = {
    days: null
  }

  componentDidMount() {
    const fromDate = moment()
    const toDate = moment().add(5, "days")
    var range = moment().range(fromDate, toDate)
    const diff = Array.from(range.by("days"))
    const days = diff.map(moment => {
      return {
        momentDate: moment
      }
    })
    this.setState({ days })
  }
  render() {
    return (
      <div className="main">
        <div className="grid1 left1">
          <h1>Bullet</h1>
          <form className="form">
            <input type="text" placeholder="Enter your new task here.." />
          </form>
          <button className="create-task1">Create Task</button>
          {/* <button className="create-task">Create Task</button> */}
        </div>
        <div className="grid1 right1">
          <div className="sidebar-one">Accountability Task</div>
        </div>
        <div className="sidebar-two">
          {/* <div className="title">Actual Calendar</div> */}

          {this.state.days &&
            this.state.days.map((day, index) => {
              return (
                <div className="container" key={index}>
                  <h2> {day.momentDate.format("dddd, MMMM Do YYYY")}</h2>
                  <p>Some text..</p>
                </div>
              )
            })}
        </div>
        <Feed />
      </div>
    )
  }
}

export default Themetwo
