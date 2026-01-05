import "./Tabela.css"

const Tabela = ({lista}) => {
  return (
    <main>
        <h3>Lista de dados do investimento</h3>
        <div className='container'>
            <table>
                <thead>
                    <tr>
                        <th>Mês</th>
                        <th>Aporte</th>
                        <th>Juros do Mês</th>
                        <th>Total</th>
                        <th>Total de Juros</th>
                    </tr>
                </thead>
                <tbody>
                    {lista.map(item => (
                        <tr key={item.mes}>
                            <td>{item.mes}</td>
                            <td>R$ {Number(item.aporte).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                            <td>R$ {Number(item.jurosMes).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                            <td>R$ {Number(item.total).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                            <td>R$ {Number(item.jurosAcumulados).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>

                        </tr>
                    ))}
                </tbody>
            </table>    
        </div>
    </main>
  )
}

export default Tabela