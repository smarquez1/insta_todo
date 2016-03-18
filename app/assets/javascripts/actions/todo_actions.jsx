(() => {
  class TodoActions {
    fetchTasks(id) {
      return (dispatch) => {
        dispatch()
        TodoSource.fetchTasks(id)
          .then((tasks) => {
            this.updateTasks(tasks)
          })
          .catch((errorMessage) => {
            this.tasksFailed(errorMessage)
          })
      }
    }

    updateTasks(tasks) {
      return tasks
    }

    tasksFailed(errorMessage) {
      return errorMessage
    }

    submitTask(task) {
      App.todo.createTask(task)
      return task
    }

    destroyTask(id) {
      App.todo.destroyTask(id)
      return id
    }

  }
  this.TodoActions = alt.createActions(TodoActions)
})()
