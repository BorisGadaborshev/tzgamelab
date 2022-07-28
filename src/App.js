import Board from './components/Board/Board';
import {  useSelector } from 'react-redux';

function App() {

  const random = useSelector(store => store.random)
  const start = useSelector(store => store.start)
  const nav = useSelector(store => store.nav)
  console.log('s',start)
  console.log('r',random)
  
  return (
    <div className="App">
      <h1 style={{textAlign:"center"}}>Лабиринт</h1>
      <Board/>
    </div>
  );
}

export default App;
