import React, { Component } from 'react';
import './App.css';
import Project from './Components/githubProjects.js';
import Header from './Components/header.js';

class App extends Component {
  render() {
    return (
      <div>
        <Header
        title='Welcome to the portfolio of'
        name='Miriam Yazdanpanahi'
        image='https://cdn.pixabay.com/photo/2018/08/15/09/52/programmer-3607627_960_720.png'
        />
        <Project 
        title='Project 1'
        image='https://cdn.pixabay.com/photo/2016/03/26/13/09/cup-of-coffee-1280537_960_720.jpg'
        text='This is the description of project 1.'
        //link=''//
        />
        <Project 
        title='Project 2'
        image='https://assets-cdn.github.com/images/modules/logos_page/GitHub-Mark.png'
        text='This is the decription of project 2.'
        //link=''//
        />
        <div className='contact'>Contact Me</div>
      </div>
    );
  }
}

export default App;
