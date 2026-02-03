import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts'

export default function ExpensesPieChart({ despesas, despesaTotal }) {
  const COLORS = ['#3b82f6', '#60a5fa', '#93c5fd', '#bfdbfe', '#e0f2fe']

  return (
    <div style={{ width: '100%', height: 300 }}>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={despesas}
            dataKey="valor"
            nameKey="categoria"
            outerRadius="80%"
            label={(entry) =>
              `${entry.categoria} (${((entry.valor / despesaTotal) * 100).toFixed(0)}%)`
            }
          >
            {despesas.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip formatter={(value) => `R$ ${value.toFixed(2)}`} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}
