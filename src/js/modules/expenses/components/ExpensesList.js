import { h } from 'preact';
import ExpensesNav from '../components/ExpensesNav';
import Header from '../components/header';
import { useState, useEffect } from 'preact/hooks';
import { BrowserRouter as Router, Route, Link } from 'preact-router-dom';



function ExpensesList ({ expenses, handleRemove, handleEdit }) {
    return (
      <div>
        <h1 className="title">Recent transactions</h1>
        <ul className="list">
          {expenses.map((item) => (
            <li key={item.id}>
              {item.name}
              <button onClick={() => handleRemove(item.id)} aria-label="Remove expense">
                Remove
              </button>
              <button onClick={() => handleEdit(item.id, prompt('Enter new expense name:'))} aria-label="Edit expense">
                Edit
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
}

export default ExpensesList;


