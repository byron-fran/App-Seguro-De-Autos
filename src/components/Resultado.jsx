import { useRef, useCallback } from "react";
import useCotizador from "../hooks/useCotizador";
import { PLAN, MARCAS } from "../constants";

const Resultado = () => {
    const {result, datos} = useCotizador();
    const {marca, plan, year} = datos;
    const yearRef = useRef(year)
    const[nombreMarca] = useCallback( MARCAS.filter(m => m.id === Number(marca)), [result]);///memoriza los resultados 
    const[nombrePlan] = useCallback(PLAN.filter(p => p.id === Number(plan)), [result]) ;//memoriza los resultados 

    if(result === 0) return null;


  return (
    <div className="text-center">
      <h2 className="text-center font-bold text-gray-700 uppercase mt-5">Resumen</h2>
        <p className="text-center font-black uppercase">
          <span className="text-center font-bold text-gray-500">Marca: </span>{nombreMarca.nombre}
        </p>
        <p className="text-center font-black uppercase"> <span  className="text-center font-bold text-gray-500">Plan: </span> {nombrePlan.nombre} </p>
        <p className="text-center font-black uppercase"> <span  className="text-center font-bold text-gray-500">Año del auto: </span>{yearRef.current}</p>
        <h2 className="text-center font-bold text-gray-700 uppercase">Total de resumen: <span>{result}</span></h2>
    </div>
  )
}

export default Resultado