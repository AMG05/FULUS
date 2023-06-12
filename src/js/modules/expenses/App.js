import { h, render } from 'preact';
import { Router, Route, Link } from 'preact-router';
import ExpensesContainer from '../expenses/containers/ExpensesContainer';
import AddExpenseContainer from './containers/AddExpenseContainer';


const App = () => (
  <div>
    {/* <nav>
      <Link href="/">Home</Link>
      <Link href="/expenses">Expenses</Link>
    </nav> */}
    <Router>
      <Route path="/" component={ExpensesContainer} />
      <Route path="/expenses" component={AddExpenseContainer} />
      {/* <Route path="/budget" component={ExpensesForm} /> */}
    </Router>
  </div>
);

export default App;

