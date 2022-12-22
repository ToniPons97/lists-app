import React, { createRef } from "react";

export class TodoList extends React.Component {
    _inputRef = createRef();
    
    state = {
        items: ['Bread', 'Milk', 'Water', 'Tuna']
    };

    addTodoItem = () => {
        const input = this._inputRef.current;
        this.setState({items: [...this.state.items, input.value]});
        
        input.focus();
        setTimeout(() => input.value = '', 100);
    }


    render() {
        return (
            <div>
                <h1>Todo List</h1>
                <input ref={this._inputRef} placeholder="Example: buy milk." autoComplete="off" />
                <br />
                <button onClick={this.addTodoItem}>Add todo!</button>

                <ul>
                    {this.state.items.map((item, index) => <li key={item+index}>{item}</li>)}
                </ul>
            </div>
        );
    }
}