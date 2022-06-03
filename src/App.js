import { useDispatch, useSelector } from 'react-redux';
import { testOne } from './redux/store/product';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const {test} = useSelector(state => state.product);

  console.log('test: ', test);

  return (
    <div className="App">
      <h1>this is heading</h1>
      <button onClick={() => dispatch(testOne('hallow world'))}>{test ? test : "Check redux"}</button>
    </div>
  );
}

export default App;
