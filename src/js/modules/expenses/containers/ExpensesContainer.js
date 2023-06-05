import { h } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import ExpensesNav from '../components/ExpensesNav';
import Header from '../components/Header';
import ExpensesList from '../components/ExpensesList';


function ExpensesContainer () {

    const [expenses, setExpenses] = useState([]);
    const [newExpense, setnewExpense] = useState('');

    useEffect(() => {
        const savedExpenses = localStorage.getItem('expenses');
        if (savedExpenses) {
            setExpenses(JSON.parse(savedExpenses));
        }
    }, []);
    

    const handleInput = event => setnewExpense(event.target.value);

    function handleSubmit(event) {
        event.preventDefault();
        const updatedExpenses = [...expenses, {name: newExpense, id:Date.now()} ];
        setExpenses(updatedExpenses);
        setnewExpense('');
       
        localStorage.setItem('expenses', JSON.stringify(updatedExpenses));
    }

    function handleRemove(id) {
        const updatedExpenses = expenses.filter(item => item.id !== id);
        setExpenses(updatedExpenses);
        localStorage.setItem('expenses', JSON.stringify(updatedExpenses));
    }

    function handleEdit(id, newName) {
        setExpenses(
            expenses.map(item => {
                if (item.id === id) {
                    return { ...item, name: newName };
                }

                return item;
            })
        );
    }

   


    return (
    <div>
        <Header />
        <div class="expenses-list">
        <h1 className="title">Recent transactions</h1>
        <form class="expenses" autocomplete="off" onSubmit={handleSubmit}>
            <input type="text" name="item" id="item" value={newExpense} onInput={handleInput} />
            <button type="submit">+ Add Expense</button>
        </form>
        <ul className="list">
            {expenses.map(item => (
                <li key={item.id}>{item.name}
                <button onClick={() => handleRemove(item.id)} aria-label="Remove expense">Remove</button>
                <button onClick={() => handleEdit(item.id, prompt('Enter new expense name:'))} aria-label="Edit expense">Edit</button>
                </li>
                ))}
        </ul>
       
        </div>
        <ExpensesList />
        
        
    </div>
    );
}

export default ExpensesContainer;