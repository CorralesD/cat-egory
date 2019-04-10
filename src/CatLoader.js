import React from "react";
import { fetchRandomCat } from "./catApi";

export class CatLoader extends React.Component {
  state = {
    imgUrl: []
  };

  async componentDidMount() {
    const { data } = await fetchRandomCat();
    const imgUrl = data.file;

    this.setState({ imgUrl });
  }

  // TODO, fetchRandomCat
  render() {
    const image = this.state.imgUrl;

    return (
      <div>
        <img
          src={image}
          style={{ maxHeight: "300px" }}
          alt="random-cat-image"
        />
      </div>
    );
  }
}
