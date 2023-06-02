import { useState, useEffect } from 'preact/hooks';
import { BrowserRouter as Router, Route } from 'preact-router-dom';
import Header from '../components/Header';
import ExpensesList from '../components/ExpensesList';
import ExpensesForm from '../components/ExpensesForm';

function ExpensesContainer() {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const savedExpenses = localStorage.getItem('expenses');
    if (savedExpenses) {
      setExpenses(JSON.parse(savedExpenses));
    }
  }, []);

    function handleRemove(id) {
        const updatedExpenses = expenses.filter((item) => item.id !== id);
    setExpenses(updatedExpenses);
    localStorage.setItem('expenses', JSON.stringify(updatedExpenses));
  }

  function handleEdit(id, newName) {
    setExpenses(
      expenses.map((item) => {
        if (item.id === id) {
          return { ...item, name: newName };
        }
        return item;
      })
    );
  }

return (
    <Router>
      <div>
        <Header />
        <Route exact path="/">
          <ExpensesForm expenses={expenses} setExpenses={setExpenses} />
        </Route>
        <Route path="/list">
          <ExpensesList expenses={expenses} handleRemove={handleRemove} handleEdit={handleEdit} />
        </Route>
      </div>
    </Router>
 );
}

export default ExpensesContainer;
