import './App.css';
import { Colors } from './components/Colors';

function App() {

  const colors = [
    {id: 1, name: 'Red'},
    {id: 2, name: 'Green'},
    {id: 3, name: 'Blue'},
    {id: 4, name: 'Yellow'},
    {id: 5, name: 'Orange'},
    {id: 6, name: 'Black'},
    {id: 7, name: 'White'},
    {id: 8, name: 'Grey'},
    {id: 9, name: 'Purple'}
  ];

  return <Colors items={colors} />
}

export default App;
