import React, { Component } from 'react';

class Project extends Component {
    render() {
      return (
        <div className="projects">
          <h1 className="projectTitle">{this.props.title}</h1>
            <div className="projectPic">
                <img src={this.props.image} alt="project pic" />
            </div>
          <div className="projectText">{this.props.text}</div>
        </div>
      );
    }
  }

  export default Project;