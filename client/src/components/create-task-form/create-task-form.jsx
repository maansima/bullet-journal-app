import * as React from "react"
import gql from "graphql-tag"

import { Mutation } from "react-apollo"
import { SingleDatePicker } from "react-dates"

import moment from "../../utils/moment"

const CREATE_TASK = gql`
  mutation createTask($text: String!, $dueDate: DateTime!) {
    createTask(text: $text, dueDate: $dueDate) {
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

class CreateTaskForm extends React.Component {
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
                    type="newtaskinput"
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
