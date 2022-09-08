import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'

const App = () => {
  return (
    <div>
      <NavBar />
      <ItemListContainer mensaje={'Bienvenidos a la web'} />
    </div>
  );
}

export default App;
