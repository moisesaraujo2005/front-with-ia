import {  useState } from "react"
import "./App.css"
import Card from "./Card"

function App() {

const [contador, setContador] = useState(0) 
console.log("renderizou")

  let contarNumero = () =>{
    setContador(contador+1)
  }
  return (
    <div>
      {contador}

      {contador > 30 ? (
        <p>O número {contador} é maior que 30 ✅</p>
      ) : (
        <p>O número {contador} é menor ou igual a 30 ❌</p>
      )}

      
      {/* <Card paragrafo={"Professor nota 10"}/>
      <Card titulo={"Pedro"} paragrafo={"Ele é inteligente"}/>
      <Card titul
    ={"Fernando"} paragrafo={"Ele é legal"}/> */}
    <button onClick={contarNumero}>
      Contar
    </button>
    </div>
  )
}

export default App
