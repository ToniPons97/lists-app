import React, { createRef } from "react";

export class TodoList extends React.Component {
    _inputRef = createRef();
    
    state = {
        items: ['Bread', 'Milk', 'Water', 'Tuna']
    };

    addTodoItem = () => {
        const input = this._inputRef.current;
        const value = input.value;

        if (value !== '') {
            this.setState({items: [...this.state.items, value]});
            input.focus();
            setTimeout(() => input.value = '', 50);
        }
        
    }

    handleListReset = () => {
        const input = this._inputRef.current;
        const value = input.value;
        
        if (this.state.items.length > 0) {
            this.setState({items: []});
            input.focus();
    
            if (value !== '')
                input.value = '';
        }
    }

    handleItemDeletion = (event) => {
        this.setState({items: this.state.items.filter(item => item !== event.target.value)});
    }


    render() {
        return (
            <div>
                <h1>Todo List</h1>
                <input ref={this._inputRef} placeholder="Example: buy milk." autoComplete="off" />
                <br />
                <button onClick={this.addTodoItem}>Add todo!</button>
                <button onClick={this.handleListReset}>Reset todo</button>

                <ul>
                    {
                        this.state.items.map((item, index) => <li key={item+index}>{item}
                            <button value={item} onClick={this.handleItemDeletion}>remove</button></li>)
                    }
                </ul>
                    {!!(this.state.items.length === 0)&& <h4>No todos found!</h4>}
            </div>
        );
    }
}