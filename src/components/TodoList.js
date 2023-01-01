import React, { createRef } from "react";

export class TodoList extends React.Component {
    _inputRef = createRef();
    
    state = {
        items: ['Buy bread', 'Milk the cow', 'Water the plants', 'Prepare tuna salad']
    }

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

    handleItemDeletion = (event) => this.setState({items: this.state.items.filter(item => item !== event.target.value)});

    render() {
        const styles = {
            greenBtn: `text-green-600 text-sm bg-gray-100 border-black border-solid 
                border-2 rounded-md p-1 transition ease-in-out m-0 hover:bg-sky-200 hover:text-white`,
            redBtn: `text-red-600 text-sm bg-gray-100 border-black border-solid 
                border-2 h-30 w-16 rounded-md p-1 transition ease-in-out m-0 hover:bg-red-200 hover:text-white`,
            items: 'flex flex-col flex-wrap gap-1 text-white-400 border-black border-solid border-2 w-28 m-4 p-2',
            input: `mt-4 form-control w-full text-base text-gray-500 bg-white bg-clip-padding 
                border border-solid border-gray-400 rounded transition ease-in-out m-0 focus:text-gray-400 focus:bg-white 
                focus:border-blue-600 focus:outline-none`,
            container: 'p-4 bg-green-100 flex flex-col items-center justify-center',
            noTodos: 'mt-4 text-red-600 font-medium',
            itemTxt: 'text-gray-500',
            addRemoveContainer: 'flex flex-row justify-center items-center gap-3'
        }
        
        return (
            <div className={styles.container}>
                <h1 className="font-bold underline">Todo List</h1>
                <input className={styles.input} ref={this._inputRef} placeholder="Example: buy milk." autoComplete="off" />
                <br />
                <div className={styles.addRemoveContainer}>
                    <button className={styles.greenBtn} onClick={this.addTodoItem}>Add todo!</button>
                    <button className={styles.redBtn} onClick={this.handleListReset}>Reset</button>
                </div>
                    {
                        this.props.render(this.state.items, this.handleItemDeletion, styles)
                    }
                    {!!(this.state.items.length === 0)&& <h4 className={styles.noTodos}>No todos found!</h4>}
            </div>
        );
    }
}