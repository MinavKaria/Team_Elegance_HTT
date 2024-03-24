import React from 'react'
import { MdSend } from 'react-icons/md'
import './Expenseform.css'
const ExpressForm = ({charge,amount,handleCharge,handleAmount,handleSubmit, edit}) => {
  return (
    <form onSubmit={handleSubmit} className='formclass'>
      <div className='form-center'>
        <div className='form-group'>
          <input type='text' className='form-control' id='charge' name='charge' placeholder='Food Item' 
          value={charge} onChange={handleCharge}></input>
        </div>
        <div className='form-group'>
          <label htmlFor='amount'>COST PER DISH:&nbsp;&nbsp;&nbsp;</label>
          <input type='number' className='form-control' id='amount' name='amount' placeholder='e.g. 100'
          value={amount} onChange={handleAmount}></input>
        </div>
      </div>
      <span className='spanline'></span>
      <button type='submit' className='btn'>{edit.show? 'edit':"submit"} <MdSend className='btn-icon'/></button>
    </form>
  )
}


export default ExpressForm