import React from 'react';
import './App.css';
import { TodoList } from './components/TodoList';

export class App extends React.Component {
  render() {
    return (
      <div className='flex flex-row justify-center items-center'>
        <TodoList render={(items, handleItemDeletion, styles) => {
          return (
            <ul>
              {
                items.map((item) => 
                {
                  return (
                      <li key={crypto.randomUUID()} className={styles.items}>
                          <span className={styles.itemTxt}>{item}</span>
                          <button className={styles.redBtn} value={item} onClick={handleItemDeletion}>Done</button>
                      </li>
                  );
                })
              }
            </ul>
          )

        }}/>
      </div>
    );
  }


}

export default App;
