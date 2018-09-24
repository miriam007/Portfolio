import React, { Component } from 'react';
import './App.css';
import Project from './Components/githubProjects.js';
import Header from './Components/header.js';

class App extends Component {
  state ={
    list: [],
    inputValue: '',
};
handleChange(e){
  this.setState({inputValue: e.target.value})
};
handleSubmit(e){
  e.preventDefault();
  const newList= this.state.list.slice();
  if (this.state.inputValue) {
      newList.push(this.state.inputValue);
      this.setState({list: newList, inputValue: ''})
  }
  };
renderAddButton(){
 if (this.state.inputValue) {
      return <button className="addbutton" type="submit" onClick={this.handleInputSubmit}>Add Review</button>
  }
};
renderList(){
  return this.state.list.map((item, index)=> {
      return <ul>
        <li>{item}</li>
            </ul>
  })
};
render() {
  return (
      <div>
        <div>
        <Header
        title='Welcome to the portfolio of'
        name='Miriam Yazdanpanahi'
        image='https://images.unsplash.com/photo-1438262267532-2db13fcceca2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=018c3ebf19e445bdba1d7dc45055284f&auto=format&fit=crop&w=750&q=80'
        />
        </div>
        <div className='rowOfProjects'>
        <Project 
          title='Curriculum Vitae'
          image='https://cdn.pixabay.com/photo/2017/05/09/00/15/resume-2296951_960_720.png'
          text='This is the description of project 1.'
        />
        <Project 
          title='Github Projects'
          image='https://assets-cdn.github.com/images/modules/logos_page/GitHub-Mark.png'
          text='This is the description of project 2.'
        />
        </div>
        <div className='bottomRow'>
        <div className='contact'></div>
          <form onSubmit={(e)=> this.handleSubmit(e)}>
            <h2>Add a review</h2>
              <div>
                <input 
                  value={this.state.inputValue}
                  type="text" 
                  placeholder="Type to add to your review about how awesome Miriam is"
                  onChange={(e) =>this.handleChange(e)}
                  />
                <button className="addButton" type="submit">Add Review</button>
              </div>
              <div>
                {this.renderList()}
              </div>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
