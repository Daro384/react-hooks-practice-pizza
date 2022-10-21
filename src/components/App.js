import React, {useState, useEffect} from "react";
import Header from "./Header";
import PizzaForm from "./PizzaForm";
import PizzaList from "./PizzaList";
const api = "http://localhost:3001/pizzas"

function App() {

  const [pizzas, setPizzas] = useState([])
  const [editPizza, setEditPizza] = useState({topping:"", size:"small", vegetarian:false})

  useEffect(() => {
    fetch(api)
    .then(resp => resp.json())
    .then(data => setPizzas(data))
  }, [])

  const editingPizza = pizza => {
    setEditPizza(pizza)
  }

  const updatePizza = updatedPizza => {
    const updatedPizzas = pizzas.map(pizza => {
      if (updatedPizza.id === pizza.id) return updatedPizza
      else return pizza
    })
    setPizzas([...updatedPizzas])
  }

  return (
    <>
      <Header />
      <PizzaForm editPizza={editPizza} setEditPizza={setEditPizza} updatePizza={updatePizza}/>
      <PizzaList pizzas={pizzas} editingPizza={editingPizza}/>
    </>
  );
}

export default App;
