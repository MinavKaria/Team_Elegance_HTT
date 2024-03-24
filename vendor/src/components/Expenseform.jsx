import React from 'react'
import { MdSend } from 'react-icons/md'
import './Expenseform.css'
import Image from './Image'
const ExpressForm = ({charge,amount,handleCharge,handleAmount,handleSubmit, edit}) => {
  return (
    <form onSubmit={handleSubmit} className='formclass'>
      <div className='form-center'>
        <div className='form-group'>
          <input type='text' className='form-control' id='charge' name='charge' placeholder='Food Item' 
          value={charge} onChange={handleCharge}></input>
        </div>
        <div className='form-group'>
          <input type='number' className='form-control' id='amount' name='amount' placeholder='e.g. 100'
          value={amount} onChange={handleAmount}></input>
        </div>
        <Image/>
      </div>
      <span className='spanline'></span>
      <button type='submit' className='btn'>{edit.show? 'edit':"submit"} <MdSend className='btn-icon'/></button>
    </form>
  )
}


export default ExpressForm