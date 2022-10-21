import React from "react";

function PizzaForm({editPizza, updatePizza, setEditPizza}) {

  const onSubmittingPizza = event => {
    event.preventDefault()
    updatePizza(editPizza)
  }

  return (
    <form onSubmit={onSubmittingPizza}>
      <div className="form-row">
        <div className="col-5">
          <input
            className="form-control"
            type="text"
            name="topping"
            placeholder={"Pizza Topping"}
            value={editPizza.topping}
            onChange={event => setEditPizza({...editPizza, topping:event.target.value})}
          />
        </div>
        <div className="col">
          <select 
            className="form-control" 
            name="size" 
            value={editPizza.size} 
            onChange={event => setEditPizza({...editPizza, size:event.target.value})} 
          >
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              checked={editPizza.vegetarian}
              name="vegetarian"
              value="Vegetarian"
              onChange={() => setEditPizza({...editPizza, vegetarian:(!editPizza.vegetarian)})}
            />
            <label className="form-check-label">Vegetarian</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              checked={!editPizza.vegetarian}
              name="vegetarian"
              value="Not Vegetarian"
              onChange={() => setEditPizza({...editPizza, vegetarian:(!editPizza.vegetarian)})}
            />
            <label className="form-check-label">Not Vegetarian</label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default PizzaForm;
