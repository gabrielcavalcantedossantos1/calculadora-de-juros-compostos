import { Route, Routes } from "react-router-dom"

import Calculadora from "./pages/Calculadora"
import Inicio from "./pages/Inicio"
import Error404 from "./pages/Error404"

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Inicio/>}/>
        <Route path="/calculadora" element={<Calculadora/>}/>
        <Route path="*" element={<Error404/>}/>
      </Routes>
    </div>
  )
}

export default App