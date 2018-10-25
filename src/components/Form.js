import React, { Component } from 'react';

class Form extends Component {
    render() {
        return (
                <form onSubmit = { (e) => this.props.handleSubmit(e) }>
                    <span className="textInput"><input type="text" onChange = { (e) => this.props.handleChange(e) } value = { this.props.inputValue } placeholder="Add your todo" /></span>
                </form>
        );
    }
}

export default Form;