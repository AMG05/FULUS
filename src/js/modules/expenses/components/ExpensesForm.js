import { h } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import { BrowserRouter as Router, Route, Link } from 'preact-router-dom';



function ExpensesForm ({ expenses, setExpenses }) {
    const [newExpense, setNewExpense] = useState('');
  
    const handleInput = (event) => setNewExpense(event.target.value);
  
    const handleSubmit = (event) => {
      event.preventDefault();
      const updatedExpenses = [...expenses, { name: newExpense, id: Date.now() }];
      setExpenses(updatedExpenses);
      setNewExpense('');
      localStorage.setItem('expenses', JSON.stringify(updatedExpenses));
    };
  
    return (
      <div>
        <h1 className="title">Add Expense</h1>
        <form className="expenses" autoComplete="off" onSubmit={handleSubmit}>
          <input type="text" name="item" id="item" value={newExpense} onInput={handleInput} />
          <button type="submit">+ Add Expense</button>
        </form>
      </div>
    );
  }

  export default ExpensesForm;