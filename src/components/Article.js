import React, { Component } from "react";
import "./article.css";
import { Button } from "semantic-ui-react";

class Article extends Component {
  render() {
    return (
      <div className="article">
        <h1>{this.props.title}</h1>
        <img style={{ padding: "3%" }} src={this.props.image} width="50%" />
        <div style={{ padding: "3%" }}>{this.props.description}</div>
        <div style={{ padding: "3%" }}>
          <Button className="ui teal basic button" role="button">
            Plus de détails
          </Button>
        </div>
      </div>
    );
  }
}
export default Article;
