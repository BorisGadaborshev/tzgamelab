import Board from './components/Board/Board';
import { useDispatch, useSelector } from 'react-redux';

function App() {

  const random = useSelector(store => store.random)
  const start = useSelector(store => store.start)
  console.log('s',start)
  console.log('r',random)
  return (
    <div className="App">
      <Board/>
    </div>
  );
}

export default App;
