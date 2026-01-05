import { useState } from "react";
import Tabela from "../components/Tabela";
import Grafico from "../components/Grafico";

import "./Calculadora.css"

const Calculadora = () => {
  const [capitalInicial, setCapitalInicial] = useState("")
  const [juros, setJuros] = useState("")
  const [tempo,setTempo] = useState('')
  const [tipoTempo, setTipoTempo] = useState('meses')
  const [aporteMensal,setAporteMensal] = useState('')

  const [resultados, setResultados] = useState([])

  const enviar = (e) => {
    e.preventDefault();

    const capital = Number(capitalInicial);
    const taxa = Number(juros);
    let periodo = Number(tempo)
    const tipoTemp = tipoTempo
    const aporte = Number(aporteMensal)

    if(tipoTemp === "anos") {
       periodo = periodo * 12
    }

    let valorAtual = capital
    let jurosTotais = 0
    const jurosMensal = (taxa / 100) / 12

const lista = []

for (let mes = 1; mes <= periodo; mes++) {
  // 1. adiciona aporte
  valorAtual += aporte

  // 2. calcula juros do mês
  const jurosDoMes = valorAtual * jurosMensal

  // 3. soma os juros
  valorAtual += jurosDoMes
  jurosTotais += jurosDoMes

  // 4. salva os dados do mês
  lista.push({
    mes: mes,
    aporte: aporte,
    jurosMes: jurosDoMes.toFixed(2),
    total: valorAtual.toFixed(2),
    jurosAcumulados: jurosTotais.toFixed(2)
  })
}
setResultados(lista)
  }


  return (
    <main className="calculator">
      <section className="formulario">
        <h1>Dados do investimento</h1>

        <form onSubmit={enviar}>
          <label>
            <span>Capital inicial</span>
            <input
              type="number"
              value={capitalInicial}
              onChange={(e) => setCapitalInicial(e.target.value)}
              min="0"
            />
          </label>

          <label>
            <span>Taxa de juros (%)</span>
            <input
              type="number"
              value={juros}
              onChange={(e) => setJuros(e.target.value)}
              min="0"
            />
          </label>

          <label>

            <div className="container-select">

              <span>Tempo</span>
                <select 
                value={tipoTempo}
                onChange={(e)=>setTipoTempo(e.target.value)}>
                  <option value="meses">Meses</option>
                  <option value="anos">Anos</option>
                </select>

            </div>

            <input type="number" 
            onChange={(e)=>setTempo(e.target.value)} 
            value={tempo}
            min="0"/>
          </label>

          <label>
            <span>Aporte mensal</span>
            <input type="number"
            onChange={(e)=>setAporteMensal(e.target.value)} 
            value={aporteMensal}
            min='0'/>
          </label>

          <button type="submit">Calcular</button>
        </form>
      </section>

      <section>
        {resultados.length > 0 && <Tabela lista={resultados}/>}
      </section>

      <section>
        {resultados.length > 0 && <Grafico lista={resultados}/>}
      </section>
    </main>
  );
};

export default Calculadora;
