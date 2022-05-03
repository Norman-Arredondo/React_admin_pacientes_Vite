import Header from "./components/Header"
import Formulario from "./components/Formulario"
import ListadoPacientes from "./components/ListadoPacientes"

function App() {
  //Antes de return - para funciones, validaciones

  return (
    <>
      <Header />
      <Formulario/>
      <ListadoPacientes/>
    </>
  )
}

export default App
