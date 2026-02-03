import { useEffect, useState } from 'react'
import { supabase } from './lib/supabase'
import './App.css'

function App() {
  const [usuarios, setUsuarios] = useState([])

  useEffect(() => {
    supabase
      .from('usuarios')
      .select('*')
      .then(({ data, error }) => {
        if (!error && data) {
          setUsuarios(data)
        }
      })
  }, [])

  return (
    <div className="app">
      
      <header className="top-bar">
        <h1 className="logo">💰 Personal Finance App</h1>

        <div className="header-profile">
          <div className="profile-avatar" title="Perfil do usuário">
            👤
          </div>
        </div>
      </header>

      <main className="content">
        <section className="card balance-card">
          <h2>Saldo atual</h2>
          <p className="saldo">R$ 0,00</p>
        </section>

        <section className="card users-card">
          <h2>Usuários (teste)</h2>

          {usuarios.length === 0 ? (
            <p className="empty-text">Nenhum usuário encontrado</p>
          ) : (
            <ul className="users-list">
              {usuarios.map((u) => (
                <li key={u.id} className="user-item">
                  {u.nome}
                </li>
              ))}
            </ul>
          )}
        </section>
      </main>
    </div>
  )
}

export default App
