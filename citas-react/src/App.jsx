import {useState} from 'react'
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import ListadoPacientes from "./components/ListadoPacientes";

function App() {
  //Antes de return - para funciones, validaciones

  const [pacientes, setPacientes] = useState([]);
  const toma1Valor = (valor) => {
    console.log(valor)
  }

  return (
    <div className="container mx-auto mt-20">
      <Header
        toma1Valor={toma1Valor}  
      />

      <div className="mt-12 md:flex">
          <Formulario />
          <ListadoPacientes />
      </div>
    </div>
  );
}

export default App;
