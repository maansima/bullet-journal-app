import * as React from "react"
import gql from "graphql-tag"
import { Query } from "react-apollo"
import CreateTaskForm from "../create-task-form/create-task-form"
import DeleteTask from "../delete-task/delete-task"
import Task from "../task/task"

const GET_TASKS = gql`
  query {
    taskFeed(orderBy: "createdAt_DESC") {
      text
      author {
        name
      }
    }
  }
`

// interface Data {
//   tweets: Array<Tweet>
// }

// interface Tweet {
//   id: string
//   text: string
//   author: User
// }

// interface User {
//   id: string
//   name: string
//   email: string
// }

class Feed extends React.Component {
  render() {
    const raw_user = localStorage.getItem("user")
    const user = JSON.parse(raw_user)

    console.log(user)
    // console.log(tasks.text)

    return (
      <div className="feed">
        <Query query={GET_TASKS}>
          {({ loading, error, data, refetch }) => {
            if (loading) {
              return "LOading..."
            }
            if (error) {
              console.log(error)
              return "OOps, somehing blew up."
            }
            return (
              <div className="form">
                <CreateTaskForm refetchFeedTasks={refetch} class="form" />

                {/* {data.taskFeed.map(task => {
                  return <Task key={this.props.id} {...task} />
                })} */}
              </div>
            )
          }}
        </Query>
      </div>
    )
  }
}

export default Feed
