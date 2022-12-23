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
        const redButtonStyles = "text-red-600 text-sm bg-gray-100 border-black border-solid border-2 h-30 rounded-md p-1";
        const itemsStyles = "text-white-400 border-black border-solid border-1";
        return (
            <div className="max-w-sm bg-green-100 flex flex-col items-center justify-center ">
                <h1 className="font-bold underline">Todo List</h1>
                <input ref={this._inputRef} placeholder="Example: buy milk." autoComplete="off" />
                <br />
                <div className="flex flex-row justify-center items-center gap-3">
                    <button className="text-green-600 text-sm bg-gray-100 border-black border-solid border-2 h-30 rounded-md p-1" 
                        onClick={this.addTodoItem}>Add todo!</button>
                    <button className={redButtonStyles} onClick={this.handleListReset}>Reset todo</button>
                </div>

                <ul>
                    {
                        this.state.items.map((item, index) => 
                        {return (
                            <li key={item+index} className={itemsStyles}> {item}
                                <button className={redButtonStyles} value={item} onClick={this.handleItemDeletion}>remove</button>
                            </li>
                        );})
                    }
                </ul>
                    {!!(this.state.items.length === 0)&& <h4 className="text-red-600 font-medium">No todos found!</h4>}
            </div>
        );
    }
}