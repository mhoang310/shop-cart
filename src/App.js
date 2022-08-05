
import { Routes, Route } from 'react-router-dom';

import Home from './modules/Home/Home';
import HomeTemplate from './templates/HomeTemplate/HomeTemplate';
import ProductDetail from './modules/ProductDetail/ProductDetail';
import NotFound from './modules/NotFound/NotFound';
import Cart from './components/Cart';


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<HomeTemplate />} >
          <Route index element={<Home />} />
          {/* <Route path="/products/:productType" element={<Telephone />} />  */}
          <Route path="/products/:productId" element={<ProductDetail />} />
          <Route path="/carts" element={<Cart />} />          

        </Route>

        {/* Khi không có bất kì path nào khớp với url sẽ render ra component NotFound, path="*" khớp với mọi url  */}
        <Route path="*" element={<NotFound />} />         
      </Routes>
    </>
  );
}

export default App;
