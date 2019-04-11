import React from "react";

export class Categories extends React.Component {
  state = {
    count: 0
  };

  handleClick = () => {
    const clickCount = this.props;
    console.log(clickCount);
    this.setState({ count: clickCount });
  };

  render() {
    return (
      <div>
        <p>categories and counts</p>
        {this.props.categories.map((category, index) => (
          <div onClick={this.handleClick} key={index}>
            {category.text} {category.count}
          </div>
        ))}
      </div>
    );
  }
}
