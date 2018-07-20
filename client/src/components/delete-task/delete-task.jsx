import * as React from "react"
import gql from "graphql-tag"

import { Mutation } from "react-apollo"
import { SingleDatePicker } from "react-dates"

import moment from "../../utils/moment"

// not finished yet
const DELETE_TASK = gql`
  mutation deleteTask($text: String!) {
    deleteTask(text: $text) {
      text
      dueDate
      author {
        id
        name
        email
      }
    }
  }
`

class DeleteTask extends React.Component {
  state = {
    date: moment(),
    focused: true,
    text: ""
  }
  render() {
    let input

    return (
      <div>
        <Mutation mutation={CREATE_TASK}>
          {(createTask, { data }) => {
            return (
              <div>
                <form
                  onSubmit={async e => {
                    e.preventDefault()
                    await createTask({
                      variables: {
                        text: this.state.text,
                        dueDate: this.state.date.format()
                      }
                    })
                    this.props.refetchFeedTasks()
                  }}
                >
                  <input
                    placeholder="Type your task here!"
                    className="newtaskinput"
                    onChange={e => this.setState({ text: e.target.value })}
                  />
                  <SingleDatePicker
                    date={this.state.date}
                    onDateChange={date => this.setState({ date })}
                    focused={this.state.focused}
                    onFocusChange={({ focused }) => this.setState({ focused })}
                    id="date-picker"
                  />
                  <button type="submit" className="newtaskbutton">
                    Create Task
                  </button>
                </form>
              </div>
            )
          }}
        </Mutation>
      </div>
    )
  }
}

export default CreateTaskForm
