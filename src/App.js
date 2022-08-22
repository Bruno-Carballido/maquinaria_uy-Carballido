const personas = [
  {
    "nombre": "Juan",
    "edad": 39
  },
  {
    "nombre": "Laura",
    "edad": 89
  }
]

function App() {
  return (
    <div className="App">
      <p>El amor es lo mas</p>
      {
        personas.map(persona => (
          <div className="box">
            <p>Nombre: {persona.nombre}</p>
            <p>Edad: {persona.edad}</p>
            <hr />
          </div>
        ))
      }
    </div>
  );
}

export default App;
