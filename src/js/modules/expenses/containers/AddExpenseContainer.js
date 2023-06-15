import { h } from 'preact';
import { route } from 'preact-router';
import { useState, useEffect } from 'preact/hooks';
import ExpensesForm from '../components/ExpensesForm';

function AddExpenseContainer () {
    const [newExpense, setNewExpense] = useState({ name: '',  amount: '' });
    const [expenses, setExpenses] = useState([]);
    const [error, setError] = useState();

    useEffect(() => {
        const savedExpenses = localStorage.getItem('expenses');
        if (savedExpenses) {
            setExpenses(JSON.parse(savedExpenses));
        }
    }, []);
    

    const handleInput = event => setNewExpense({ ...newExpense, [event.target.name]: event.target.value });

    const handleSubmit = event => {
        event.preventDefault();
        if (newExpense.name === '' || newExpense.amount === ''){
            setError(true);
            return;
        }
        
        setError(false);
        
        const updatedExpenses = [...expenses, { ...newExpense, id: Date.now() } ];
        setNewExpense({ name: '',  amount: '' });
        localStorage.setItem('expenses', JSON.stringify(updatedExpenses));
        route('/');
    };

   
    return <ExpensesForm onSubmit={handleSubmit} onInput={handleInput} value={newExpense} error={error} />;
}

export default AddExpenseContainer;