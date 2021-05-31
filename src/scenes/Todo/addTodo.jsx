import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodo } from "../../redux/actions/actions";

const AddTodo = ({ addTodo }) => {
  const [input, setInput] = useState('')


  const updateInput = input => {
    setInput(input);
  };

  const handleAddTodo = () => {
    addTodo(input);
    setInput('');
  };


  return (
    <div>
      {console.log('input', input)}
      <input
        onChange={e => updateInput(e.target.value)}
        value={input}
      />
      <button className="add-todo" onClick={handleAddTodo}>
        Add Todo
        </button>
    </div>
  );

}

export default connect(
  null,
  { addTodo }
)(AddTodo);
// export default AddTodo;
