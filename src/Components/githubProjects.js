import React, { Component } from 'react';

class Project extends Component {
    render() {
      return (
        <div>
          <h1>{this.props.title}</h1>
            <div className="projectPic">
                <img alt="project" src={this.props.image}></img>
            </div>
          <div className="projectText">{this.props.text}</div>
        </div>
      );
    }
  }

  export default Project;