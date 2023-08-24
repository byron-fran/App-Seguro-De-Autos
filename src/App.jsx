import AppSeguro from "./components/AppSeguro"
import CotizarProvider from "./context/CotizadorProvider"
function App() {
  

  return (
    <>
    <CotizarProvider>
       <AppSeguro/>
    </CotizarProvider>
   
    </>
  )
}

export default App
