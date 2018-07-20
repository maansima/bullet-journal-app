import * as React from "react"
import gql from "graphql-tag"

import { Mutation } from "react-apollo"
import "./delete-task.css"
import { SingleDatePicker } from "react-dates"

import moment from "../../utils/moment"

const DELETE_TASK = gql`
  mutation deleteTask($id: String!) {
    deleteTask(id: $id) {
      text
    }
  }
`

class DeleteTask extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasDeleted: false }
  }
  render() {
    let input

    return (
      <div>
        <Mutation mutation={DELETE_TASK}>
          {(deleteTask, { data, refetch }) => {
            return (
              <div>
                {/* <form
                  onSubmit={async e => {
                    e.preventDefault()
                    await deleteTask({
                      variables: {
                        //   text: this.state.text,
                        //   dueDate: this.state.date.format()
                      }
                    })
                    this.props.refetchFeedTasks()
                  }}
                /> */}

                <button
                  className="delete-task"
                  onClick={async () => {
                    await deleteTask({
                      variables: {
                        id: this.props.id
                      }
                    })
                    this.setState({ hasDeleted: true })
                    this.props.refetchDeleteTask()
                  }}
                >
                  {this.state.hasDeleted ? <i>Deleted</i> : "Delete"}
                </button>
              </div>
            )
          }}
        </Mutation>
      </div>
    )
  }
}

export default DeleteTask
