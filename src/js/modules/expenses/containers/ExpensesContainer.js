import { h } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import Balance from '../components/Balance';
import NavBar from '../components/NavBar';
import IncomeExpense from '../components/IncomeExpense';


function ExpensesContainer () {
    const [expenses, setExpenses] = useState([]);

    useEffect(() => {
        const savedExpenses = localStorage.getItem('expenses');
        if (savedExpenses) {
            setExpenses(JSON.parse(savedExpenses));
        }
    }, []);

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
        <NavBar />
        <Balance />
        <IncomeExpense />
        
        <div class="expenses-list">
            <h1 class="title">Recent transactions</h1>
            {
                expenses.length > 0
                    ? <ul class="list">
                        {expenses.map(item => (
                            <li key={item.id}>
                                {item.name}
                                {item.amount}
                                <button onClick={() => handleRemove(item.id)} aria-label="Remove expense">Remove</button>
                                <button onClick={() => handleEdit(item.id, prompt('Enter new expense name:'))} aria-label="Edit expense">Edit</button>
                            </li>
                            ))}
                    </ul>
                    : <p class="message">No expenses yet</p>
            }
        </div>
        
    </div>
    );
}

export default ExpensesContainer;