import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer'
import Cart from './components/Cart'

const App = () => {
  return (
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
  );
}

export default App;
