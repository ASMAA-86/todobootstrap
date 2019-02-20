// Make To Do List responsive
// Save data to localstorage or API

//-------
// Use 3rd party API with Axios
// Use a 3rd party library

import React, { Component } from "react";
import ListItem from "./Listitem";
import "./App.css";
import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";

class App extends Component {
  state = {
    formData: {
      task: ""
    },
    items: []
  };

  updateForm = event => {
    //get the value the user typed
    const newData = event.target.value;
    //get the original state
    const originalState = this.state.formData;
    //make a copy of the original state
    const copy = Object.assign({}, originalState);
    //get key from name of input
    const key = event.target.name;
    //update the copy with tha data the user typed
    copy[key] = newData;
    //update the state with the new copy override the original
    this.setState({
      formData: copy
    });
  };

  submitForm = event => {
    //prevent the form from refreshing the page
    event.preventDefault();
    //make a copy of the memes array
    const copy = this.state.items.slice(0);
    //add the new meme data to the array
    copy.push(this.state.formData.task);
    //updata the state with our new copy
    this.setState({
      items: copy,
      //to reset the value of the input failed
      formData: {
        task: ""
      }
    });
  };

  deleteAll = event => {
    this.setState({
      items: []
    });
  };
  removeTask = index => {
    console.log(index);
    //  copy our items array
    //  remove item based on the index
    //  set state with the updated array
    const copy = this.state.items.slice(0);
    copy.pop(this.state.formData.task);
    this.setState({
      items: copy
    });
  };

  render() {
    const tasksList = this.state.items.map((item, index) => {
      return (
        //item and index to know what the fn must applay to
        <ListItem item={item} index={index} removeTask={this.removeTask} />
      );
    });
    //Form must keep it for submit only

    return (
      <div>
        <nav>
          <ul>
            <li>
              <a href="#">React </a>
            </li>
            <li>
              <a href="#">My ToDo </a>
            </li>
          </ul>
        </nav>

        <div className="container">
          <div>
            <h3 className="fontStyle ">My ToDo </h3>
          </div>
          <form onSubmit={this.submitForm}>
            <input
              type="text"
              name="task"
              className="divContainer"
              onChange={this.updateForm}
              value={this.state.formData.task}
            />
            <button type="submit" className="btnStyle btnFontStyle">
              New Task
            </button>
          </form>
          <button onClick={this.deleteAll} className="btnStyle btnFontStyle">
            Clear all
          </button>
          <footer className="Operaquotes">
            <h1>"Any thing you can imagine, you can create!"</h1>
            <p>Opera Winfrey</p>
          </footer>

          {tasksList}
        </div>
      </div>
    );
  }
}

export default App;
