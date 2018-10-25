import React, { Component } from 'react';

class Task extends Component {

    render() {
        return (
            <div className="singleTask">
                <p><span className="weather__value" style = {{ textDecoration : this.props.todo.done ? 'line-through' : '' }}>{ this.props.todo.value }</span> 
                <button className="buttonRound" onClick = { () => this.props.handleClick( this.props.index ) }> { this.props.todo.done ? 'Undo' : 'Done' } </button>
                <button className="buttonDelete" onClick = { () => this.props.handleDelete( this.props.index ) }> Delete </button></p>
            </div>
        );
    }

}

export default Task;