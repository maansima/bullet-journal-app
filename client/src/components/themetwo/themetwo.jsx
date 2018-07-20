import * as React from "react"
import gql from "graphql-tag"
import { Query } from "react-apollo"
import { groupBy } from "lodash"
import "./themetwo.css"
import Feed from "../feed/feed"
import moment from "../../utils/moment"
import CreateTaskForm from "../create-task-form/create-task-form"
import Navigation from "../navigation/navigation"
import DeleteTask from "../delete-task/delete-task"


// import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from "react-dates"
// import "react-dates/initialize"

const GET_TASKS_WITHIN_DATES = gql`
  query tasks($where: TaskWhereInput) {
    taskFeed(orderBy: "dueDate_ASC", where: $where) {
      text
      id
      dueDate
      createdAt
      updatedAt
      author {
        name
      }
    }
  }
`

class Themetwo extends React.Component {
  render() {
    return (
      <div className="main">
        <Navigation />
        <div className="grid1 left1">
          <Feed />
          {/* <form className="form">
            <input type="text" placeholder="Enter your new task here.." />
          </form>
          <button className="create-task1">Create Task</button>
          {/* <button className="create-task">Create Task</button> */}
        </div>
        {/* <div className="grid1 right1">
          <div className="sidebar-one">Accountability Task</div>
        </div> */}
        <div className="sidebar-two">
          {/* <div className="title">Actual Calendar</div> */}
          <Query
            query={GET_TASKS_WITHIN_DATES}
            pollInterval={5000}
            variables={{
              where: {
                dueDate_gte: "2018-07-18T22:10:41.237Z",
                dueDate_lte: "2018-09-26T22:10:41.237Z"
              }
            }}
          >
            {({ data, loading, error, refetch }) => {
              if (loading) return "kloading..."
              if (error) return "ooops"
              const tasks = groupBy(data.taskFeed, task => {
                console.log(task.dueDate)
                return moment(task.dueDate).format("L")
              })

              console.log({ tasks })

              return (
                <div className="feed-wrapper">
                  {Object.keys(tasks).map(key => {
                    console.log({ key })
                    return (
                      <div className="container">
                        <h2 className="date">
                          {moment(key).format("dddd, MMMM Do YYYY")}
                        </h2>

                        {tasks[key] &&
                          tasks[key].map(task => {
                            return (
                              <div>
                                <div className="text">{task.text}</div>
                                <br />
                                <center>
                                  <DeleteTask
                                    id={task.id}
                                    refetchDeleteTask={refetch}
                                  />
                                </center>
                              </div>
                            )
                          })}
                      </div>
                    )
                  })}
                </div>
              )
            }}
          </Query>
        </div>
      </div>
    )
  }
}

export default Themetwo
