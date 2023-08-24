import { Fragment } from "react"
import { MARCAS, YEAR, PLAN } from "../constants";
import useCotizador from "../hooks/useCotizador";
import Error from "./Error";

const Formulario = () => {
    const {datos, handleOnChange,error, setError, handleCotizar} = useCotizador();


    const handleSubmit = e => {
       
        e.preventDefault();
        if(Object.values(datos).includes('')){
            setError('Todos los campos son obligatorios');
            return;
        }
        setError('');
        handleCotizar()
    }
  return (
    <div>
        <form>
            {error && <Error/>}
            <div>
                <label htmlFor="marca" className="text-gray-400 font-bold uppercase">Marca</label>
                <select name="marca" className="w-full" onChange={(e) => handleOnChange(e)} value={datos.marca}>
                    <option value="">--Seleccione</option>{
                        MARCAS.map(marca => (
                    <option key={marca.id} value={marca.id}>{marca.nombre}</option>
                        ))
                    }
                </select>
            </div>
            <div>
                <label htmlFor="marca" className="text-gray-400 font-bold uppercase">Año</label>
                <select name="year" className="w-full"  onChange={(e) => handleOnChange(e)} value={datos.year} >
                    <option value="">--Seleccione</option>{
                        YEAR.map(year => (
                    <option key={year} value={year}>{year}</option>
                        ))
                    }
                </select>
            </div>
            <div>
                <label htmlFor="marca" className="text-gray-400 font-bold uppercase">Marca</label>
                    <div className="flex items-center">
                      {PLAN.map(plan => (
                        <Fragment key={plan.id}>
                            <label>{plan.nombre}</label>
                            <input type="radio" value={plan.id} name='plan'  onChange={(e) => handleOnChange(e)} />
                        </Fragment>
                      ))}
                    </div>
            </div>
            <input onClick={(e) => handleSubmit(e)} type="submit" value='Cotizar' className="bg-indigo-500 hover:bg-indigo-800 w-full text-white uppercase font-bold rounded-sm mt-5" />
        </form>
    </div>
  )
}

export default Formulario