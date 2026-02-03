import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts'

export default function IncomeExpensesChart({ dados }) {
  // dados é um array de objetos: [{ mes: 'Jan', receita: 1000, despesa: 500 }, ...]
  return (
    <div style={{ width: '100%', height: 300 }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={dados}>
          <XAxis dataKey="mes" />
          <YAxis />
          <Tooltip formatter={(value) => `R$ ${value.toFixed(2)}`} />
          <Legend />
          <Bar dataKey="receita" fill="#34d399" />
          <Bar dataKey="despesa" fill="#f87171" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
