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
        const redButtonStyles = `text-red-600 text-sm bg-gray-100 border-black border-solid 
            border-2 h-30 w-16 rounded-md p-1 transition ease-in-out m-0 hover:bg-red-200 hover:text-white`;
        const itemsStyles = "flex flex-col flex-wrap gap-1 text-white-400 border-black border-solid border-2 w-28 m-4 p-2";
        
        const inputStyle = `form-control w-full text-base text-gray-500 bg-white bg-clip-padding 
            border border-solid border-gray-400 rounded transition ease-in-out m-0 focus:text-gray-400 focus:bg-white 
            focus:border-blue-600 focus:outline-none`;

        const greenButtonStyle = `text-green-600 text-sm bg-gray-100 border-black border-solid 
            border-2 rounded-md p-1 transition ease-in-out m-0 hover:bg-sky-200 hover:text-white`;
        return (
            <div className="p-4 bg-green-100 flex flex-col items-center justify-center">
                <h1 className="font-bold underline">Todo List</h1>
                <input className={inputStyle} ref={this._inputRef} placeholder="Example: buy milk." autoComplete="off" />
                <br />
                <div className="flex flex-row justify-center items-center gap-3">
                    <button className={greenButtonStyle} onClick={this.addTodoItem}>Add todo!</button>
                    <button className={redButtonStyles} onClick={this.handleListReset}>Reset</button>
                </div>

                <ul>
                    {
                        this.state.items.map((item, index) => 
                        {
                            return (
                                <li key={item+index} className={itemsStyles}>
                                    <span className="text-gray-500">{item}</span>
                                    <button className={redButtonStyles} value={item} onClick={this.handleItemDeletion}>Done</button>
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