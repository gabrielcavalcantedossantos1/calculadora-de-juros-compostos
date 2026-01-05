import { Link } from "react-router-dom"
import "./Error404.css"

const Error404 = () => {
  return (
    <div className="error">
        <h1>Erro 404!</h1>
        <p>Não ha nada para ver aqui!</p>

        <nav>
          <Link to="/">
            Voltar
          </Link>
        </nav>
    </div>
  )
}

export default Error404