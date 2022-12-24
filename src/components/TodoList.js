import React, { createRef } from "react";

export class TodoList extends React.Component {
    _inputRef = createRef();
    
    state = {
        items: ['Buy bread', 'Milk the cow', 'Water the plants', 'Prepare tuna salad']
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
        const redButtonStyles = "hover:bg-red-200 hover:text-white text-red-600 text-sm bg-gray-100 border-black border-solid border-2 h-30 w-16 rounded-md p-1";
        const itemsStyles = "flex flex-col flex-wrap gap-1 text-white-400 border-black border-solid border-2 w-28 m-4 p-2";
        return (
            <div className="p-4 bg-green-100 flex flex-col items-center justify-center ">
                <h1 className="font-bold underline">Todo List</h1>
                <input ref={this._inputRef} placeholder="Example: buy milk." autoComplete="off" />
                <br />
                <div className="flex flex-row justify-center items-center gap-3">
                    <button className="hover:bg-sky-200 hover:text-white text-green-600 text-sm bg-gray-100 border-black border-solid border-2 h-30 rounded-md p-1" 
                        onClick={this.addTodoItem}>Add todo!</button>
                    <button className={redButtonStyles} onClick={this.handleListReset}>Reset</button>
                </div>

                <ul>
                    {
                        this.state.items.map((item, index) => 
                        {
                            return (
                                <li key={item+index} className={itemsStyles}>
                                    <span className="text-gray-500">{item}</span>
                                    <button className={redButtonStyles} value={item} onClick={this.handleItemDeletion}>remove</button>
                                </li>
                            );
                        })
                    }
                </ul>
                    {!!(this.state.items.length === 0)&& <h4 className="text-red-600 font-medium">No todos found!</h4>}
            </div>
        );
    }
}