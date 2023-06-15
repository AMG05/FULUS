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
        <IncomeExpense expenses={expenses} />
        
        <div className="expenses-list-page">
            <h1 className="expenses-list__title">Recent transactions</h1>
            <div className="expenses-list-container">
            {
                expenses.length > 0
                    ? <ul class="expenses-list">
                        {expenses.map(item => (
                            <li className="expenses-item" key={item.id}>Name: 
                                {item.name}Amount:
                                {item.amount}
                                <div className="button-container">
                                <button className="button-remove" onClick={() => handleRemove(item.id)} aria-label="Remove expense">Remove</button>
                                <button className="button-edit" onClick={() => handleEdit(item.id, prompt('Enter new expense name:'))} aria-label="Edit expense">Edit</button>
                                </div>
                                </li>
                            ))}
                    </ul>
                    : <p class="message">No expenses yet</p>
            }
            </div>
        </div>
       
    </div>
    );
}


export default ExpensesContainer;