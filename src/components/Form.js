import React, { Component } from 'react';

class Form extends Component {
    render() {
        return (
                <div>
                    <form onSubmit = { (e) => this.props.handleSubmit(e) }>
                        <input type="text" onChange = { (e) => this.props.handleChange(e) } value = { this.props.inputValue } placeholder="Add your todo" />
                    </form>
                    <button onClick = { (e) => this.props.handleClean(e) }>Clean list</button>
                </div>
                
        );
    }
}

export default Form;