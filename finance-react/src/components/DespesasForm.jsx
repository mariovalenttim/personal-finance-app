import { useState } from 'react'
import { supabase } from '../lib/supabase'

export default function DespesasForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [amount, setValor] = useState('')
  const [date, setData] = useState('')
  const [description, setDescricao] = useState('')
  const [type, setTipo] = useState('despesa')
  const [loading, setLoading] = useState(false)
  const [user, setUser] = useState(null)

  // Faz login rápido
  async function handleLogin(e) {
    e.preventDefault()
    setLoading(true)

    try {
      const { data: sessionData, error: loginError } = await supabase.auth.signInWithPassword({
        email,
        password
      })

      if (loginError) {
        console.error('Erro no login:', loginError.message)
        alert('Erro no login: ' + loginError.message)
      } else {
        setUser(sessionData.user)
        alert('Login bem-sucedido!')
      }
    } catch (err) {
      console.error('Erro inesperado no login:', err)
    } finally {
      setLoading(false)
    }
  }

  // Insere transação
  async function handleSubmit(e) {
    e.preventDefault()
    if (!amount || !date || !description) return

    if (!user) {
      alert('Faça login antes de enviar uma transação')
      return
    }

    setLoading(true)

    try {
      const { data, error } = await supabase.from('transactions').insert([
        {
          amount: Number(amount),
          date,
          description,
          type,
          user_id: user.id
        }
      ])

      if (error) {
        console.error('Erro ao inserir transação:', error)
        alert('Erro ao inserir: ' + error.message)
      } else {
        console.log('Transação inserida:', data)
        setValor('')
        setData('')
        setDescricao('')
        setTipo('despesa')
      }
    } catch (err) {
      console.error('Erro inesperado:', err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      {!user && (
        <form onSubmit={handleLogin}>
          <h3>Login rápido</h3>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <button type="submit" disabled={loading}>
            {loading ? 'Entrando...' : 'Login'}
          </button>
        </form>
      )}

      {user && (
        <form onSubmit={handleSubmit}>
          <h3>Adicionar transação</h3>
          <input
            type="number"
            placeholder="Valor"
            value={amount}
            onChange={e => setValor(e.target.value)}
          />
          <input
            type="date"
            value={date}
            onChange={e => setData(e.target.value)}
          />
          <input
            type="text"
            placeholder="Descrição"
            value={description}
            onChange={e => setDescricao(e.target.value)}
          />
          <select value={type} onChange={e => setTipo(e.target.value)}>
            <option value="despesa">Despesa</option>
            <option value="receita">Receita</option>
          </select>
          <button type="submit" disabled={loading}>
            {loading ? 'Enviando...' : 'Enviar'}
          </button>
        </form>
      )}
    </div>
  )
}