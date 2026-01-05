# 📈 Calculadora de Juros Compostos

Aplicação web desenvolvida em **React** para simular investimentos com **juros compostos**, exibindo a evolução do capital **mês a mês**, com **tabela detalhada** e **gráfico ao final da página**.

O projeto utiliza **React Router DOM** para navegação entre páginas e foi desenvolvido com foco em boas práticas de **front-end**.

---

## 🚀 Funcionalidades

- Definição de:
  - Capital inicial
  - Taxa de juros (%)
  - Tempo (meses ou anos)
  - Aporte mensal
- Conversão automática de anos para meses
- Cálculo de juros compostos mensalmente
- Tabela com detalhamento mês a mês:
  - Mês
  - Aporte
  - Juros do mês
  - Total acumulado
  - Juros acumulados
- Gráfico de evolução do investimento
- Navegação com **React Router DOM**
- Layout responsivo

---

## 🧮 Como funciona o cálculo

A cada mês:
1. O aporte mensal é somado ao capital
2. Os juros são calculados sobre o valor total
3. O valor final do mês é armazenado para exibição

Cálculo da taxa mensal:

taxaMensal = (taxaAnual / 100) / 12

## 🛠️ Tecnologias utilizadas

- React
- React Router DOM
- JavaScript (ES6+)
- CSS Grid e Flexbox
- React Hooks (useState)

---

## 📂 Estrutura do projeto

src/
├── components/
│ ├── Tabela.jsx
│ └── Grafico.jsx
├── pages/
│ └── Calculadora.jsx
├── routes/
│ └── AppRoutes.jsx
├── styles/
│ └── Calculadora.css
└── App.jsx
