const Paciente = () => {
  return (
    <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className="font-bold mb-3 text-gray-700 uppercase ">
        Nombre: {""}
        <span className="font-normal normal-case">Hooks</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase ">
        Propietario: {""}
        <span className="font-normal normal-case">Norman</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase ">
        Email: {""}
        <span className="font-normal normal-case">
          arredondo03norman@gmail.com
        </span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase ">
        Fecha de Alta: {""}
        <span className="font-normal normal-case">Diciembre 10, 2021</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase ">
        Síntomas: {""}
        <span className="font-normal normal-case">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum alias
          in ex dicta sunt eligendi pariatur officiis deserunt temporibus
          recusandae? Porro quas eos rerum rem at. Ut vitae totam error.
        </span>
      </p>
    </div>
  );
};

export default Paciente;
