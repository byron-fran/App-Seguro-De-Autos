
import useCotizador from "../hooks/useCotizador"

const Error = () => {
    const {error} = useCotizador()
  return (
    <div>
        <p className="text-center text-red-500 font-bold uppercase" >{error}</p>
    </div>
  )
}

export default Error