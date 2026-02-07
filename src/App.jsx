// App.jsx
import { useState } from 'react'
import ExpensesPieChart from './components/charts/ExpensesPieChart.jsx'
import IncomeExpensesChart from './components/charts/IncomeExpensesChart.jsx'
import BalanceEvolutionChart from './components/charts/BalanceEvolutionChart.jsx'
import './App.css'

export default function App() {
  // Mock de usuários
  const mockUsuarios = [
    { id: 1, nome: 'Mario' },
    { id: 2, nome: 'Igor' },
    { id: 3, nome: 'lukinhas' }
  ]

  // Mock de despesas
  const mockDespesas = [
    { categoria: 'Aluguel', valor: 1200 },
    { categoria: 'Comida', valor: 450 },
    { categoria: 'Lazer', valor: 300 },
    { categoria: 'Transporte', valor: 200 },
    { categoria: 'Educação', valor: 150 }
  ]

  // Mock receita x despesa mensal
  const dadosMensais = [
    { mes: 'Jan', receita: 5000, despesa: 2300 },
    { mes: 'Fev', receita: 4500, despesa: 2500 },
    { mes: 'Mar', receita: 6000, despesa: 3000 },
    { mes: 'Abr', receita: 5500, despesa: 2800 },
    { mes: 'Mai', receita: 5800, despesa: 3100 }
  ]

  // Dados do saldo (baseado na diferença receita - despesa)
  const dadosSaldoMensal = dadosMensais.map(item => ({
    mes: item.mes,
    saldo: item.receita - item.despesa
  }))

  const receitaTotal = 5000
  const despesaTotal = mockDespesas.reduce((acc, d) => acc + d.valor, 0)
  const saldo = receitaTotal - despesaTotal

  const [usuarios] = useState(mockUsuarios)
  const [despesas] = useState(mockDespesas)

  return (
    <div className="layout">
      {/* SIDEBAR */}
      <aside className="sidebar">
        <h2 className="sidebar-logo">💳 Finance</h2>

        <nav className="sidebar-nav">
          <a className="active">📊 Dashboard</a>
          <a>💸 Despesas</a>
          <a>💰 Receitas</a>
          <a>📈 Relatórios</a>
          <a>⚙️ Configurações</a>
        </nav>
      </aside>

      {/* ÁREA PRINCIPAL */}
      <div className="main-area">
        {/* TOP BAR */}
        <header className="top-bar">
          <h1 className="logo">💰 Personal Finance App</h1>
          <div className="header-profile">
            <div className="profile-avatar">👤</div>
          </div>
        </header>

        <main className="content">
          {/* CARDS */}
          <div className="card-grid">
            <div className="card">
              <h2>Saldo Atual</h2>
              <p
                className="saldo"
                style={{ color: saldo >= 0 ? '#22c55e' : '#ef4444' }}
              >
                R$ {saldo.toFixed(2)}
              </p>
            </div>

            <div className="card">
              <h2>Receita Total</h2>
              <p className="receita">
                R$ {receitaTotal.toFixed(2)}
              </p>
            </div>

            <div className="card">
              <h2>Despesa Total</h2>
              <p className="despesa">
                R$ {despesaTotal.toFixed(2)}
              </p>
            </div>
          </div>

          {/* GRÁFICOS */}
          <div className="charts-row">
            <div className="card chart-card">
              <h2>Despesas por Categoria</h2>
              <ExpensesPieChart
                despesas={despesas}
                despesaTotal={despesaTotal}
              />
            </div>

            <div className="card chart-card">
              <h2>Receita x Despesa Mensal</h2>
              <IncomeExpensesChart dados={dadosMensais} />
            </div>

            <div className="card chart-card">
              <h2>Evolução do Saldo</h2>
              <BalanceEvolutionChart dados={dadosSaldoMensal} />
            </div>
          </div>

          {/* USUÁRIOS */}
          <section className="card">
            <h2>Usuários (teste)</h2>
            <ul className="users-list">
              {usuarios.map(u => (
                <li key={u.id} className="user-item">{u.nome}</li>
              ))}
            </ul>
          </section>
        </main>
      </div>
    </div>
  )
}
