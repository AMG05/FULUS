import { h, useState} from 'preact';
import ExpensesNav from '../components/ExpensesNav';
import Header from '../components/header';
import ExpensesList from '../components/ExpensesList';
import ExpensesForm from '../components/ExpensesForm';

function ExpensesContainer () {

    return (
    <div>
        <Header />
        <ExpensesNav />
        <h1 className="title">I am the expenses container!</h1>
        <p>this is a paragraph of annes app</p>
        <ExpensesList />
        <ExpensesForm />
        
    </div>
    );
}

export default ExpensesContainer;