import React, { Component } from 'react';

import Task from './Task';

class List extends Component {

    render() {
        return (
            <div className="List">
                { this.props.todoElements.map(( todo, index ) => {
                    return ( <Task key ={  index } todo = { todo } handleDelete = { this.props.handleDelete } handleClick = { this.props.handleClick } index = { index } /> )
                 })  
                }
            </div>
        );
    }

}

export default List;