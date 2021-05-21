import React, { Component } from 'react';



class App extends Component {
  constructor() {
    super()
    this.state = {
      tasks: [
        { id: 1, name: "Sacar la ropa", done: false },
        { id: 2, name: "Hacer la cama", done: true },
        { id: 3, name: "Leer un rato", done: false }
      ],
      newTask: ''
    }
  }

  updateName(event) {
    this.setState({
      newTask: event.target.value
    });
  }

  sendName(event) {
    event.preventDefault();
    this.setState({
      tasks: this.state.tasks.concat({id:this.state.tasks.length + 1,name:this.state.newTask,done: false})
    });
    this.state.newTask = ""
  }

  done(value,index){
    this.setState((tasks) => {
      tasks.tasks[index].done = value
      return {...tasks,...tasks.tasks[index].done}; // return new object jasper object
    });
  }

  render() {
    return (
      <div className="wrapper">
        <div className="list">
          <h3>Por hacer:</h3>
          <ul className="todo">
            {this.state.tasks.map((task, index) => <li onClick={(e) => this.done(!task.done,index)} className={task.done===true ? "done" : "" } key={task.id} data-letter={task.id}>{task.name}</li>)}
          </ul>
          <form onSubmit={this.sendName.bind(this)}>
            <input required className={this.state.newTask ? "": "error"} type="text" id="new-task" placeholder="Ingresa una tarea y oprime Enter" value={this.state.newTask} onChange={this.updateName.bind(this)} />
          </form>
        </div>
      </div>
    )
  }
}

export default App;
