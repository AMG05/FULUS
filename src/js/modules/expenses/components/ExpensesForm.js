import { h, useState } from 'preact';
import ExpensesNav from '../components/ExpensesNav';
import Header from '../components/header';

function ExpensesForm() {
    const [newExpense, setNewExpense] = useState('');
    const [expenses, setExpenses] = useState([]);

    function handleSubmit(event) {
        event.preventDefault();
        const updatedExpenses = [
            ...expenses,
            { name: newExpense, id: Date.now() },
        ];
        setExpenses(updatedExpenses);
        setNewExpense('');

        localStorage.setItem('expenses', JSON.stringify(updatedExpenses));
    }

    const handleInput = event => setNewExpense(event.target.value);

    return (
        <>
        
        <h3>Add new transaction</h3>
        <form className="expenses" autoComplete="off" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
              type="text"
              name="item"
              placeholder="Enter text"
              value={newExpense}
              onInput={handleInput}
          />
          <div className="form-control">
            <label htmlFor="amount">
              Amount <br />
              (negative - expense, positive - income)
            </label>
            <input type="number" placeholder="Enter amount..." />
          </div>
          <button type="submit">+ Add Expense</button>
          </div>
        </form>
     
        </>
    );
}

export default ExpensesForm;
