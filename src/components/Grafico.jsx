import React from "react";
import {
  LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer
} from "recharts";

const Grafico = ({ lista }) => {
  return (
    <div style={{ width: "100%", height: '400px' }}>
      <ResponsiveContainer>
        <LineChart data={lista} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="mes" label={{ value: "Mês", position: "insideBottomRight", offset: -5 }} />
          <YAxis label={{ value: "R$", angle: -90, position: "insideLeft" }} />
          <Tooltip formatter={(value) => `R$ ${Number(value).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`} />
          <Line type="monotone" dataKey="total" stroke="#8884d8" name="Total Acumulado" />
          <Line type="monotone" dataKey="jurosAcumulados" stroke="#82ca9d" name="Juros Acumulados" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Grafico;
