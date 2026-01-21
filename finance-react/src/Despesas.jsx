import DespesasForm from './components/DespesasForm'
import { supabase } from './lib/supabase'

export default function Despesas() {
  console.log(supabase)

  return (
    <>
      <h1>Despesas</h1>
      <DespesasForm />
    </>
  )
}
