import * as React from "react"
import gql from "graphql-tag"
import { Query } from "react-apollo"
import { groupBy } from "lodash"
import "./themetwo.css"
import Feed from "../feed/feed"
<<<<<<< HEAD
// import theme from "./prev.png"
=======
import moment from "../../utils/moment"
// import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from "react-dates"
// import "react-dates/initialize"



const GET_TASKS_WITHIN_DATES = gql`
  query tasks($where: TaskWhereInput) {
    taskFeed(orderBy: "createdAt_DESC", where: $where) {
      text
      dueDate
      createdAt
      updatedAt
      author {
        name
      }
    }
  }
`

>>>>>>> bcabeefd43079af6f8ed24c74a04812736368912
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
<<<<<<< HEAD
          <button className="create-task1">Create Task</button> */}
=======
          <button className="create-task1">Create Task</button>
>>>>>>> bcabeefd43079af6f8ed24c74a04812736368912
          {/* <button className="create-task">Create Task</button> */}
        </div>
        <div className="grid1 right1">
          <div className="sidebar-one">Accountability Task</div>
        </div>
        <div className="sidebar-two">
          {/* <div className="title">Actual Calendar</div> */}
          <Query
            query={GET_TASKS_WITHIN_DATES}
            variables={{
              where: {
                dueDate_gte: "2018-07-19T22:10:41.237Z",
                dueDate_lte: "2018-09-26T22:10:41.237Z"
              }
            }}
          >
            {({ data, loading, error }) => {
              if (loading) return "kloading..."
              if (error) return "ooops"
              const tasks = groupBy(data.taskFeed, task => {
                return task.dueDate
              })

              console.log({ tasks })

<<<<<<< HEAD
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
=======
              return (
                <div>
                  {Object.keys(tasks).map(key => {
                    console.log({ key })
                    return (
                      <div className="container">
                        <h2> {moment(key).format("dddd, MMMM Do YYYY")}</h2>
                        {tasks[key] &&
                          tasks[key].map(task => {
                            return (
                              <div>
                                {task.text}
                                author: {task.author.name}
                              </div>
                            )
                          })}
                        <p>Some text..</p>
                      </div>
                    )
                  })}
                </div>
              )
            }}
          </Query>
>>>>>>> bcabeefd43079af6f8ed24c74a04812736368912
        </div>
        <Feed />
      </div>
    )
  }
}

export default Themetwo
