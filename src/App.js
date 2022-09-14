import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'

const App = () => {
  return (
    <div>
      <NavBar />
      <ItemListContainer mensaje={'Bienvenidos a la web'} />
      <ItemDetailContainer />
    </div>
  );
}

export default App;
