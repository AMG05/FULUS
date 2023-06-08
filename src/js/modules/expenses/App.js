import { h, render } from 'preact';
import { Router, Route, Link } from 'preact-router';
import ExpensesContainer from './containers/ExpensesContainer';
import ExpensesList from './components/ExpensesList';
import ExpensesForm from './components/ExpensesForm';


const App = () => (
  <div>
    {/* <nav>
      <Link href="/">Home</Link>
      <Link href="/expenses">Expenses</Link>
    </nav> */}
    <Router>
      <Route path="/" component={ExpensesContainer} />
      <Route path="/expenses" component={ExpensesList} />
      {/* <Route path="/budget" component={ExpensesForm} /> */}
    </Router>
  </div>
);

export default App;

