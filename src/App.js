import React, { Component } from "react";
import "./App.css";
import { CatLoader } from "./CatLoader";
import { Categories } from "./Categories";
import { CatList } from "./CatList";

class App extends Component {
  render() {
    return (
      <div className="container row">
        <div className="category_container col-3">
          <Categories />
          <CatList />
        </div>
        <div className="cat_image_container col">
          <h2>Cat-egory</h2>
          <CatLoader />
          <div className="input-group mt-3">
            <input type="text" className="" placeholder="Add a Category" />
            <div className="input-group-append">
              <button className="btn btn-outline-secondary" type="button">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
