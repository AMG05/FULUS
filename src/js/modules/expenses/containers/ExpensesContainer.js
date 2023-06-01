import { h } from 'preact';
import { useState } from 'preact/hooks';
import ExpensesNav from '../components/ExpensesNav';
import Header from '../components/Header';
import ExpensesList from '../components/ExpensesList';


function ExpensesContainer () {

    const [expenses, setExpenses] = useState([]);
    const [newExpense, setnewExpense] = useState('');
    // const items = [];
    // const [items, setItems] = useState([]);

    const handleInput = event => setnewExpense(event.target.value);

    function handleSubmit(event) {
        event.preventDefault();
        setExpenses([...expenses, {name: newExpense, id: Date.now() }]);
        setnewExpense('');
        // console.log("submitted!");
        // const name = event.currentTarget.item.value;
        // const item = {
        //     name,
        //     id: Date.now(),
        // };
        // // setItems(prevItems => [...prevItems, item]);
        // items.push(item);
        // console.log(`There are now ${items.length} in your state`);
        // event.target.reset();
        // displayItems()
    }

    // function displayItems() {
    //     console.log(items);
    //     const html = items.map((item) => `<li>${item.name}</li>`).join('');
    //     console.log(html);
    //     // list.innerHTML = html;
    // }


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
                <li key={item.id}>{item.name}</li>
                ))}
        </ul>
       
        </div>
        <ExpensesList />
        
        
    </div>
    );
}

export default ExpensesContainer;