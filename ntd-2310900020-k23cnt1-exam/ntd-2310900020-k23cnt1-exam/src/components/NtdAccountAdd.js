import React, { useState } from "react";

const NtdAccountAdd = ({ onAdd }) => {
  const [newAccount, setNewAccount] = useState({ id: "", name: "", email: "", amount: "" });

  const handleChange = (e) => {
    setNewAccount({ ...newAccount, [e.target.name]: e.target.value });
  };

  const ntdHandleSubmit = (e) => {
    e.preventDefault();
    onAdd({ ...newAccount, amount: Number(newAccount.amount) });
    setNewAccount({ id: "", name: "", email: "", amount: "" });
  };

  return (
    <div>
      <h2>Thêm Tài Khoản</h2>
      <form onSubmit={ntdHandleSubmit}>
        <input type="text" name="id" placeholder="ID" value={newAccount.id} onChange={handleChange} required />
        <input type="text" name="name" placeholder="Name" value={newAccount.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" value={newAccount.email} onChange={handleChange} required />
        <input type="number" name="amount" placeholder="Amount" value={newAccount.amount} onChange={handleChange} required />
        <button type="submit">Thêm Tài Khoản</button>
      </form>
    </div>
  );
};

export default NtdAccountAdd;
