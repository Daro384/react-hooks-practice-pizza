import React from "react";
import Pizza from "./Pizza";

function PizzaList({pizzas, editingPizza}) {

  const pizzaElements = pizzas.map(pizza => {
    return <Pizza key={pizza.id} pizza={pizza} editingPizza={editingPizza}/>
  })

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Topping</th>
          <th scope="col">Size</th>
          <th scope="col">Vegetarian?</th>
          <th scope="col">Edit</th>
        </tr>
      </thead>
      <tbody>
        {
          pizzaElements
        }
      </tbody>
    </table>
  );
}

export default PizzaList;
