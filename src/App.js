import { useDispatch, useSelector } from 'react-redux';
import { testOne } from './redux/store/product';
import ProductDetails from './pages/product_details/ProductDetails';
import './App.css'

function App() {
  const dispatch = useDispatch();
  // const {test} = useSelector(state => state.product);

  return (
    <main>
      <ProductDetails />
    </main>
  );
}

export default App;
