// * Step 4. * Next add`completed` to the`ListItem` components state that defaults to`false` and gets updated to`true` when a user clicks on the`li`.When the state`completed` is`true` it should add a CSS class that adds a strikethrough to the`li`.Similar to our hide and show memes.
//.strikethrough
// * Step 5. * Next add a form with an`input` that when submitted will add an`item` to the`items` array in state.Similar to our add a meme form.

import React, { Component } from "react";

class ListItem extends Component {
  state = {
    completed: false,
    textDecoration: "false" //plz look at App.css
  };

  toggletask = () => {
    console.log("Hello");
    //was true and it shown with strikethroug!!
    if (this.state.completed === false) {
      this.setState({
        completed: true,
        textDecoration: "strikethrough"
      });
    } else {
      this.setState({
        completed: false,
        textDecoration: "false"
      });
    }
  };

  render() {
    //it's just a variable BP

    const itemData = this.props.item;

    return (
      <div className="mt-5">
        <div
          className="btnFontStyle"
          className={this.state.textDecoration}
          onClick={this.toggletask}
        >
          <input className="btnFontStyle" type="checkbox" />
          <span className="text-white"> {itemData} </span>
          <button
            className="delete"
            onClick={() => this.props.removeTask(this.props.index)}
          >
            <img
              src="https://png.pngtree.com/svg/20170814/fy_recycle_bin_358384.png"
              height="20px"
            />
          </button>
        </div>
      </div>
    );
  }
}

export default ListItem;
