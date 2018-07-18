import * as React from "react"
import gql from "graphql-tag"
import { Mutation } from "react-apollo"

const CREATE_TASK = gql`
mutation createTask($text: String!) {
  createTask(text: $text) {
    text
    author {
      id
      name
      email
    }
  }
}
`


class CreateTaskForm extends React.Component {
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
                        text: input.value,
                      }
                    })
                    this.props.refetchFeedTasks()
                    input.value = ""
                  }}
                >
                  <input
                    placeholder="Type your task here!"
                    className="newtaskinput"
                    ref={node => {
                      input = node
                    }}
                  />
                  <button type="submit" className="newtaskbutton">
                  →
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