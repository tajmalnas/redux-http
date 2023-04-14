import { useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useEffect } from 'react';

function App() {

  const showCart = useSelector(state => state.ui.cartIsvisible);
  const cart = useSelector((state)=>state.cart);
  
  useEffect(()=>{
    fetch('https://react-http-7c9e4-default-rtdb.firebaseio.com/cart.json',{
      method:'PUT',  //OverWrite Existing Data
      body:JSON.stringify(cart),
    });
  },[cart]);
  
  return (
    <Layout>
      {showCart && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
