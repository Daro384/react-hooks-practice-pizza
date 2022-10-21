import React from "react";

function Pizza({pizza, editingPizza}) {

  const onEdit = event => {
    editingPizza(pizza)
  }

  const vegetarian = pizza.vegetarian ? "Yes":"No"

  return (
    <tr>
      <td>{pizza.topping}</td>
      <td>{pizza.size}</td>
      <td>{vegetarian}</td>
      <td>
        <button 
          type="button" 
          className="btn btn-primary"
          onClick={onEdit}
        >
          Edit Pizza
        </button>
      </td>
    </tr>
  );
}

export default Pizza;
