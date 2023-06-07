import { h, render } from 'preact';
import { Router, Route, Link } from 'preact-router';
import ExpensesContainer from './containers/ExpensesContainer';
import ExpensesList from './components/ExpensesList';

const App = () => (
  <div>
    <nav>
      <Link href="/">Home</Link>
      <Link href="/expenses">Expenses</Link>
    </nav>
    <Router>
      <Route path="/" component={ExpensesContainer} />
      <Route path="/expenses" component={ExpensesList} />
    </Router>
  </div>
);

export default App;

