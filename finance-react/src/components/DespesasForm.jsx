export default function DespesasForm() {
  return (
    <form>
      <input placeholder="Descrição" />
      <input type="number" placeholder="Valor" />
      <select>
        <option>Alimentação</option>
        <option>Transporte</option>
      </select>
      <button>Salvar</button>
    </form>
  )
}
