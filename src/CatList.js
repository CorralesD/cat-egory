import React from "react";

export class CatList extends React.Component {
  render() {
    return (
      <div>
        <p>cat list of images</p>
        <div className="row">
          {this.props.images.map((image, index) => (
            <div key={index} className="col mb-3">
              <img
                src={image}
                style={{ maxWidth: "150px", maxHeight: "150px" }}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}
