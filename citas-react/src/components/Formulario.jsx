/**State o Estado en React
 * Cuál es el estado de nuestra aplicación
 * El estado es una variable con información relevante en nuestra aplicación de React, algunas veces el state pertenece
 * a un componente en específico o algunas veces deseas compartirlo a lo largo de diferentes componentes
 * Tiene que ser declarado antes del return
 */
import { useState, useEffect } from "react";
import Error from './Error'

const Formulario = ({pacientes, setPacientes}) => {
  //Const [nombre de la variable, función que modifica la variable] = useState(Valor Inicial);
  const [nombre, setNombre] = useState("");
  const [propietario, setPropietario] = useState("");
  const [email, setEmail] = useState("");
  const [fecha, setFecha] = useState("");
  const [sintomas, setSintomas] = useState("");

  const [error , setError] = useState(false)
  
  const handleSubmit = (e) =>{
    e.preventDefault();

    //Validación del Formulario
    if([nombre, propietario, email, fecha, sintomas].includes('') ){
      console.log('Hay al menos un campo vacío')

      setError(true)
      return;
    }
    setError(false)

      //Construir objeto de Paciente
    const objetoPaciente = {
      nombre,
      propietario,
      email,
      fecha,
      sintomas
    }
      //console.log(objetoPaciente)
      setPacientes([...pacientes,objetoPaciente])

      //Reiniciar el form
      setNombre('')
      setPropietario('')
      setEmail('')
      setFecha('')
      setSintomas('')
  }

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center">
        Seguimiento de Pacientes
      </h2>

      <p className="text-lg mt-5 text-center mb-10">
        Añade Pacientes y {""}
        <span className="text-indigo-600 font-bold ">Administralos</span>
      </p>

      <form 
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">

          {error && <Error/>}

        <div className="mb-5">
          {/** con block va a hacer que sea un display block y tome todo el espacio disponible*/}
          <label
            htmlFor="mascota"
            className=" block text-gray-700 uppercase font-bold"
          >
            Nombre Mascota
          </label>

          <input
            id="mascota"
            type="text"
            placeholder="Nombre de la mascota"
            //border-2 para que aplique un borde en las 4 direcciones y w-full para que ocupe todo el ancho disponible
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)} //Callback
          />
        </div>

        <div className="mb-5">
          {/** con block va a hacer que sea un display block y tome todo el espacio disponible*/}
          <label
            htmlFor="propietario"
            className=" block text-gray-700 uppercase font-bold"
          >
            Nombre Propietario
          </label>

          <input
            id="propietario"
            type="text"
            placeholder="Nombre del propietario"
            //border-2 para que aplique un borde en las 4 direcciones y w-full para que ocupe todo el ancho disponible
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)} //Callback
          />
        </div>

        <div className="mb-5">
          {/** con block va a hacer que sea un display block y tome todo el espacio disponible*/}
          <label
            htmlFor="email"
            className=" block text-gray-700 uppercase font-bold"
          >
            Email
          </label>

          <input
            id="email"
            type="email"
            placeholder="Email Contacto Propietario"
            //border-2 para que aplique un borde en las 4 direcciones y w-full para que ocupe todo el ancho disponible
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)} //Callback
          />
        </div>

        <div className="mb-5">
          {/** con block va a hacer que sea un display block y tome todo el espacio disponible*/}
          <label
            htmlFor="alta"
            className=" block text-gray-700 uppercase font-bold"
          >
            Alta
          </label>

          <input
            id="alta"
            type="date"
            //border-2 para que aplique un borde en las 4 direcciones y w-full para que ocupe todo el ancho disponible
            className="border-2 w-full p-2 mt-2 rounded-md"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)} //Callback
          />
        </div>

        <div className="mb-5">
          {/** con block va a hacer que sea un display block y tome todo el espacio disponible*/}
          <label
            htmlFor="sintomas"
            className=" block text-gray-700 uppercase font-bold"
          >
            Síntomas
          </label>
          <textarea
            id="sintomas"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder="Describe los síntomas"
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)} //Callback
          />
        </div>

        <input
          type="submit"
          className="bg-indigo-600 w-full text-white uppercase font-bold 
              hover:bg-indigo-700 cursor-pointer transition-all p-3"
          value="Agregar Paciente"
        />
      </form>
    </div>
  );
};

export default Formulario;
