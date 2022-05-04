//Componentes van nombrados con la primer letra en mayúsculas
//Un componente es una función
//Function declaration
function Header() {
  return (
    <>
      <h1 className="font-black text-5xl text-center md:w-2/3 mx-auto">
        Seguimiento Pacientes {''}
        <span className="text-indigo-600">Veterinarias</span>
      </h1>
    </>
  );
}

export default Header;
