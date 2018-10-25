import React, { Component } from 'react';
import '../App.css';

import Form from './Form';
import List from './List';

class App extends Component {
      
  state = {
      inputValue : '',
      todoElements : []
  }

  handleChange = (e) => {
    this.setState({ inputValue : e.target.value })
  }

  handleClick = (index) => {
    const elementsArray = this.state.todoElements;
    elementsArray[index].done = !elementsArray[index].done;
    this.setState({ todoElements : elementsArray });
  }

  handleClean = (e) => {
    this.setState({ todoElements : [] });
  }

  handleDelete = (index) => {
    const elementsArray = this.state.todoElements;
    elementsArray.splice(index, 1);
    this.setState({ todoElements : elementsArray });
  }

  handleSubmit = (e) => {
    e.preventDefault(); 
    const newElement = {
      value : this.state.inputValue,
      done : false
    };

    const elementsArray = this.state.todoElements; 
    elementsArray.push(newElement);
     this.setState({ todoElements : elementsArray, inputValue : '' });
  }



  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="">
              <div className="row">
                <div className="col-sm-5 title-container">
                  <div> 
                    <h1 className="title-container__title">Todo Helper</h1>
                    <p className="title-container__subtitle">Shouldn't you doing something?</p>
                  </div>
                </div>
                <div className="col-sm-7 form-container">
                  <Form
                    handleChange = { this.handleChange } 
                    inputValue = { this.state.inputValue }
                    handleSubmit = { this.handleSubmit }
                    handleClean = { this.handleClean }
                  />
                  <List 
                    handleClick = { this.handleClick }
                    handleDelete = { this.handleDelete }
                    todoElements = { this.state.todoElements }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
