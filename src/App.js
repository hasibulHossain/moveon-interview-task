import { useDispatch, useSelector } from 'react-redux';
import { testOne } from './redux/store/product';
import './App.css';
import ProductDetails from './pages/product_details/ProductDetails';

function App() {
  const dispatch = useDispatch();
  const {test} = useSelector(state => state.product);

  console.log('test: ', test);

  return (
    <main>
      <ProductDetails />
      <h1>this is heading</h1>
      <button onClick={() => dispatch(testOne('hallow world'))}>{test ? test : "Check redux"}</button>
    </main>
  );
}

export default App;
