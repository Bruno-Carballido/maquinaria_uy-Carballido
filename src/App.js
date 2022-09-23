import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer'
import Cart from './components/Cart'
import CartContext from './context/CartContext'

const App = () => {
  return (
    <CartContext>
      <div className='pb-5'>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/category/:idCategory' element={<ItemListContainer />} />
            <Route path='/item/:idItem' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </div>
    </CartContext>
  );
}

export default App;
