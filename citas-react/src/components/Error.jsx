const Error = ({mensaje}) => {
    return (
        
        <div className="bg-red-800 text-center text-white uppercase font-bold mb-3 p-3 rounded-md">
              <p>{mensaje}</p>
        </div>
          
    )
}

export default Error