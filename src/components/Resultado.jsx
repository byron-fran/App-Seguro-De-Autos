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
    <div>
      <h2>Resumen</h2>
        <p>
          <span>Marca</span>{nombreMarca.nombre}
        </p>
        <p> <span>Plan</span> {nombrePlan.nombre} </p>
        <p> <span>Año del auto</span>{yearRef.current}</p>
        <h2>Total de resumen: <span>{result}</span></h2>
    </div>
  )
}

export default Resultado