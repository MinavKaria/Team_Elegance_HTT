
import React, { useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';
import { Alert } from './Alert';
import { ExpenseList } from './ExpenseList';
import ExpressForms from './Expenseform';
import './NewMenu.css'


const initialExpenses =localStorage.getItem('expenses')? JSON.parse(localStorage.getItem
  ('expenses')): [];





function NewMenu() {
  
  const [expenses, setExpenses] = useState(initialExpenses);
  
  const [charge, setCharge] = useState('');

  const [amount, setAmount] = useState('');

  const[alert, setAlert] = useState({show: false})

  const [edit, setEdit] = useState({show: false})

  const [id, setId] = useState(0)
 


  useEffect(()=>{
    console.log('We called useEffect')
    localStorage.setItem("expenses",JSON.stringify(expenses))
  },[expenses])






  const handleCharge = e =>{
    console.log(`charge:   ${e.target.value}`)
    setCharge(e.target.value)
  }
  const handleAmount = e =>{
    console.log(`amount:   ${e.target.value}`)
    setAmount(e.target.value)
    
  }

  const handleAlert = ({type, text}) =>{
    setAlert({show: true, type, text})
    setTimeout(()=>{
      setAlert({show:false})
    },5000)
  }
  const handleSubmit = e =>{
    e.preventDefault();

    if(charge !== " " && amount > 0){
      if(edit.show){
        let tempExpense = expenses.map(item=>{
          return item.id === id? {...item, charge, amount}
          : item;
        })
        setExpenses(tempExpense)
        setEdit({show: false})
      }else{
        const singleExpense = {id: uuid(), charge: charge, amount:amount}
        setExpenses([...expenses, singleExpense])
        handleAlert({type:'success', text:"Item edited"})
      }
      // Check if charge already exists
      const existingExpense = expenses.find(item => item.charge.toLowerCase() === charge.toLowerCase());
      if (existingExpense) {
        handleAlert({ type: 'danger', text: 'Item with the same name already exists' });
      } 

      handleAlert({type:'success', text:"Item added"})
      setCharge('');
      setAmount('');

    }else{
      handleAlert({type: 'danger',
       text: 'charge cant be an empty value and amount value has to be greater than zero'});
    }
  }
  
  const handleDelete = (id)=>{
    console.log(`Item deleted : ${id} `)
    const newExpenses = expenses.filter((item)=> item.id!== id )
    setExpenses(newExpenses)
    handleAlert({type: "danger", text: `item deleted`})

  }  
  const handleEdit = (id)=>{
    const expense = expenses.find(item => item.id === id)
    let {charge, amount} = expense
    setCharge(charge);
    setAmount(amount);  
    console.log(expense)
    setEdit({show: true})
    setId(id)

  }  





  return (
    <div className="App">
    <div className="circle">
      {alert.show && <Alert type={alert.type} text= {alert.text} />}
     
      <h1 id='title-text' style={{
        margin:0,
        paddingTop:'100px'
      }}>ZORKO'S MENU</h1>
      <main className='App'>
        <ExpressForms charge={charge} 
        amount={amount} 
        handleAmount={handleAmount}
        handleCharge={handleCharge} 
        handleSubmit={handleSubmit}
        edit = {edit}></ExpressForms>
        <ExpenseList expenses = {expenses} 
        handleDelete={handleDelete}
        handleEdit={handleEdit}/>
      </main>
      <h1 id='total-spending'>
        TOTAL SPENDING: <span className='total'>
          ${expenses.reduce((acc,curr)=>{
            return (acc+= parseInt(curr.amount))
          },0)}
        </span>
      </h1>
      
      
    </div>
    </div>
  );
}

export default NewMenu;
