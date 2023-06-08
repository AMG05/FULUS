import { h } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import Header from '../components/Header';
import ExpensesList from '../components/ExpensesList';
import Balance from '../components/Balance';
import Graph from '../components/Graph';
import NavBar from '../components/NavBar';
import IncomeExpense from '../components/IncomeExpense';
import ExpensesForm from '../components/ExpensesForm';


function ExpensesContainer () {

    const [expenses, setExpenses] = useState([]);
    const [newExpense, setnewExpense] = useState('');
    // const [amount, setAmount] = useState(0);
    // const [newAmount, setnewAmount] = useState();

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
        <NavBar />
        {/* <Header /> */}
        <Balance />
        <IncomeExpense />
        {/* <Graph /> */}
        
        <div class="expenses-list">
        <h1 className="title">Recent transactions</h1>
        <form class="expenses" autocomplete="off" onSubmit={handleSubmit}>
        <label for="text">Text</label>
            <input type="text" name="item" id="text" placeholder="Enter text" value={newExpense} onInput={handleInput} />
            {/* <input type="amount" placeholder="Enter amount" value={amount} onChange={handleAmountChange} */}
            {/* /> */}
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
        {/* <ExpensesList /> */}
        {/* <ExpensesForm /> */}
       
        
    </div>
    );
}

export default ExpensesContainer;