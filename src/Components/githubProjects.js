import React, { Component } from 'react';

class Project extends Component {
    render() {
      return (
        <div className="projects">
          <h1 className="projectTitle">{this.props.title}</h1>
            <div className="projectPic">
                <img alt="project" src={this.props.image}></img>
            </div>
          <div className="projectText">{this.props.text}</div>
          <div>{this.props.link}</div>
        </div>
      );
    }
  }

  export default Project;