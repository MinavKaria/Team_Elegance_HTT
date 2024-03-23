import React from 'react';
import { MdDelete, MdEdit } from 'react-icons/md';

export const ExpenseList = ({ expenses, handleEdit, handleDelete }) => {
  return (
    <div>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {expenses.map((expense) => (
          <li key={expense.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #ccc', padding: '10px 0' }}>
            <div style={{ flex: 1 }}>
              <span>{expense.charge}: </span>
              <span>Rs. {expense.amount}</span>
            </div>
            <div>
              <button style={{ backgroundColor: '#ffc107', color: '#fff', border: 'none', borderRadius: '5px', padding: '5px', marginRight: '5px', cursor: 'pointer' }} aria-label='edit button' onClick={() => handleEdit(expense.id)}>
                <MdEdit />
              </button>
              <button style={{ backgroundColor: '#dc3545', color: '#fff', border: 'none', borderRadius: '5px', padding: '5px', cursor: 'pointer' }} aria-label='delete button' onClick={() => handleDelete(expense.id)}>
                <MdDelete />
              </button>
            </div>
          </li>
        ))}
      </ul>
      {expenses.length > 0 && (
        <button style={{ backgroundColor: '#ff6347', color: '#fff', border: 'none', padding: '5px 10px', borderRadius: '5px', cursor: 'pointer' }}>
          clear expense <MdDelete style={{ fontSize: '20px', verticalAlign: 'middle' }} />
        </button>
      )}
    </div>
  );
};

export default ExpenseList;
