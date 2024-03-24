import React, { useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';
import axios from 'axios';
import { Alert } from './Alert';
import { ExpenseList } from './ExpenseList';
import ExpressForms from './Expenseform';
import './NewMenu.css';

const initialExpenses = localStorage.getItem('expenses') ? JSON.parse(localStorage.getItem('expenses')) : [];

function NewMenu() {
  const [expenses, setExpenses] = useState(initialExpenses);
  const [charge, setCharge] = useState('');
  const [amount, setAmount] = useState('');
  const [alert, setAlert] = useState({ show: false });
  const [edit, setEdit] = useState({ show: false });
  const [id, setId] = useState(0);
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    setName(localStorage.getItem('username') || '');
    setPassword(localStorage.getItem('password') || '');
    console.log('We called useEffect');
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [expenses]);

  const handleCharge = (e) => {
    console.log(`charge: ${e.target.value}`);
    setCharge(e.target.value);
  };

  const handleAmount = (e) => {
    console.log(`amount: ${e.target.value}`);
    setAmount(e.target.value);
  };

  const handleAlert = ({ type, text }) => {
    setAlert({ show: true, type, text });
    setTimeout(() => {
      setAlert({ show: false });
    }, 5000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(charge, amount); 
    if (charge !== '' && amount > 0) {
      try {
        const formData = new URLSearchParams();
        formData.append('name', name);
        formData.append('password', password);
        formData.append('location', JSON.stringify({ latitude: 0, longitude: 0 }));
        formData.append('foodMenu', JSON.stringify({
          name: localStorage.getItem('foodName') || '',
          quantity: localStorage.getItem('quantity') || '',
          price: localStorage.getItem('price') || '',
        }));
        formData.append('DateOfJoining', new Date());
        formData.append('phone', 1234567890);
        formData.append('email', '');
        formData.append('age', 30);
        formData.append('upVotes', 0);
        formData.append('downVotes', 0);
        formData.append('id', uuid());
        formData.append('password', password);
  
        const response = await axios.post('https://team-elegance-htt-e3iv.vercel.app/addAdmin', formData, {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        });
        console.log(response.data);
      } catch (error) {
        console.error('Error adding admin:', error);
        handleAlert({ type: 'danger', text: 'An error occurred while adding admin' });
      }
  
      if (edit.show) {
        let tempExpense = expenses.map((item) => (item.id === id ? { ...item, charge, amount } : item));
        setExpenses(tempExpense);
        setEdit({ show: false });
      } else {
        const singleExpense = { id: uuid(), charge: charge, amount: amount };
        setExpenses([...expenses, singleExpense]);
        handleAlert({ type: 'success', text: 'Item edited' });
      }
  
      handleAlert({ type: 'success', text: 'Item added' });
      setCharge('');
      setAmount('');
    } else {
      handleAlert({ type: 'danger', text: 'Charge cannot be an empty value and amount value has to be greater than zero' });
    }
  };
  
  const handleDelete = (id) => {
    console.log(`Item deleted : ${id} `);
    const newExpenses = expenses.filter((item) => item.id !== id);
    setExpenses(newExpenses);
    handleAlert({ type: 'danger', text: 'Item deleted' });
  };

  const handleEdit = (id) => {
    const expense = expenses.find((item) => item.id === id);
    let { charge, amount } = expense;
    setCharge(charge);
    setAmount(amount);
    console.log(expense);
    setEdit({ show: true });
    setId(id);
  };

  return (
    <div className="App">
      <div className="circle">
        {alert.show && <Alert type={alert.type} text={alert.text} />}

        <h1 id="title-text" style={{ margin: 0, paddingTop: '100px' }}>
          ZORKO'S MENU
        </h1>
        <main className="App">
          <ExpressForms
            charge={charge}
            amount={amount}
            handleAmount={handleAmount}
            handleCharge={handleCharge}
            handleSubmit={handleSubmit}
            edit={edit}
          ></ExpressForms>
          <ExpenseList expenses={expenses} handleDelete={handleDelete} handleEdit={handleEdit} />
        </main>
        <h1 id="total-spending">
          TOTAL SPENDING: <span className="total">${expenses.reduce((acc, curr) => (acc += parseInt(curr.amount)), 0)}</span>
        </h1>
      </div>
    </div>
  );
}

export default NewMenu;
