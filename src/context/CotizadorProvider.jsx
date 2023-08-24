import { createContext, useState } from "react";
import { restarYear, calcularMarca, calculaPlan, formaterDinero} from "../helpers";
export const CotizadorContext = createContext();


const CotizarProvider  =({children}) => {

    const [datos, setDatos] = useState({
        marca : '',
        year : '',
        plan : ''
    });
    const [result,setResult] = useState(0);
    const [error, setError] = useState('');
    const [cargando, setCargando] = useState(false);
    const handleOnChange = e => {
        setDatos({
            ...datos,
           [ e.target.name] : e.target.value
        })
    };
    
    const handleCotizar = () => {
        //base
        setCargando(true)
        let resultado = 2000
        //Obtenen diferencia de años
        const diferencia = restarYear(datos.year);
       
        //15%

        resultado -= ((diferencia * 3)) * resultado / 100
        //30%
        // 5%
        resultado *= calcularMarca(datos.marca);

        //basico 20%
        resultado *= calculaPlan(datos.plan)

        resultado = formaterDinero(resultado);
        //completo 50%
        setTimeout(() => {
            setCargando(false);
             setResult(resultado)
        }, 2000)
       
    }
    return(
        <CotizadorContext.Provider value={{
            datos,
            handleOnChange,
            error, 
            setError,
            handleCotizar,
            result,
            cargando
        }}>
            {children}
        </CotizadorContext.Provider>
    )
};
export default CotizarProvider;