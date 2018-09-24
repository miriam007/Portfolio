import React, { Component } from 'react';

class Header extends Component {
    render() {
      return (
        <div className='headerFlexContainer'>
          <h1 className='headerTitle'>{this.props.title}</h1>
          <div className="myName">{this.props.name}</div> 
          <img className="headerPic" alt="computer" src={this.props.image}>
          </img>       
        </div>
      );
    }
  }

  export default Header;