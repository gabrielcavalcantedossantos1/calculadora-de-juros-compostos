import { Link } from "react-router-dom"
import "./Inicio.css"

const Inicio = () => {
  return (
    <main>
      <h1>Calculadora de Juros Compostos</h1>

      <p>
        Simule investimentos e acompanhe a evolução do seu dinheiro
        mês a mês.
      </p>

      <ul>
        <li>Defina o capital inicial</li>
        <li>Informe a taxa de juros</li>
        <li>Escolha o período em meses ou anos</li>
        <li>Evolução mensal com ou sem aporte</li>
      </ul>

      <nav>
        <Link to="/calculadora">Ir para calculadora</Link>
      </nav>
    </main>
  );
};

export default Inicio;
