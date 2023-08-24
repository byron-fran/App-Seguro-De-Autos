import Formulario from "./Formulario"
import useCotizador from "../hooks/useCotizador"
import Spinner from "./Spinner"
import Resultado from "./Resultado"
const AppSeguro = () => {
    const{cargando} = useCotizador();

  return (
    <>  
        <header className="text-center text-white font-bold m-5">
            <h1 className="text-center uppercase text-3xl">Seguros de autos</h1>
        </header>
        <main className="bg-white md:w-3/4 lg:w-4/5 mx-auto p-10 rounded-md">
            <Formulario/>
            {cargando ? <Spinner/> : <Resultado/>}
        </main>
      
    </>
  )
}

export default AppSeguro