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
  //declare local storage
  // componentDidMount() {
  //   if (!localStorage.getItem("itemKey")) {
  //     localStorage.setItem("itemKey", this.state.items);
  //   }

  //   localStorage.getItem("itemKey") &&
  //     this.setState({ items: JSON.parse(localStorage.getItem("itemKey")) });
  //   //dealing with  web server have to use json
  // }

  submitForm = event => {
    //prevent the form from refreshing the page
    event.preventDefault();
    //make a copy of the memes array
    const copy = this.state.items.slice(0);
//test to prevent pushing until be sure the array is empty
    if(this.state.formData.task !== ""){
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
  }
    //localStorage.setItem("itemKey", copy);
  };

  deleteAll = event => {
    this.setState({
      items: []
    });
  };
  removeTask = index => {
    //  copy our items array
    //  remove item based on the index
    //  set state with the updated array
    const copy = this.state.items;
    copy.splice(index, 1);
    // copy.splice(copy.indexof(this.state.formData.task), 1);
    this.setState({
      items: copy
    });
  };

  render() {
    //map fn iterate the array and return item and index by default
    const tasksList = this.state.items.map((item, index) => {
      return (
        //item and index to know what the fn must applay to
        //to manipulat item in child have to pass an arguments to it and here we pass item and index
        //RemoveTask function where task deleted by index
        <ListItem item={item} index={index} removeTask={this.removeTask} />
      );
    });
    //Form must keep it for submit only

    return (
      <div className="container mt-5">
        <div className="container todo">
          <div>
            <h3 className="fontStyle ">My ToDo </h3>
          </div>
          <form onSubmit={this.submitForm}>
            <div className="row">
              <input
                type="text"
                name="task"
                className="col-8"
                onChange={this.updateForm}
                value={this.state.formData.task}
              />
              <button type="submit" className="btnStyle btnFontStyle col-2">
                New Task
              </button>

              <button
                onClick={this.deleteAll}
                className="btnStyle btnFontStyle col-2"
              >
                Clear all
              </button>
            </div>
          </form>
          <footer className="Operaquotes">
            <h1>"Any thing you can imagine, you can create!"</h1>
            <p>Opera Winfrey</p>
          </footer>

          { console.log( this.state.items)}
            
            
            { this.state.items.length === 0 ? "" : tasksList}
        </div>
      </div>
    );
  }
}

export default App;
//test if the length of the array is 0 if T type "" if not type my list
//{ this.state.items.length === 0 ? "" : tasksList}