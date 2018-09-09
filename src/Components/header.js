import React, { Component } from 'react';

class Header extends Component {
    render() {
      return (
        <div>
          <h1>{this.props.title}</h1>
          <div className="myName">{this.props.name}
          <img className="headerPic" alt="girl at computer" src={this.props.image}></img>
          </div>        
        </div>
      );
    }
  }

  export default Header;