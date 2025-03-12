import React, { useState } from "react";
import NtdAccountList from "./components/NtdAccountList";
import NtdAccountAdd from "./components/NtdAccountAdd";

const NtdApp = () => {
  const [accounts, setAccounts] = useState([
    { id: "2310900020", name: "Nguyen Tuan Dat", email: "meideeptry271@gmail.com", amount: 1200 },
    { id: "2300999922", name: "Nguyen Thi B", email: "ngthib@gmail.com", amount: 2000 },
    { id: "2310222299", name: "Le Van C", email: "lvanc@gmail.com", amount: 1500 },
  ]);

  const addAccount = (newAccount) => {
    setAccounts([...accounts, newAccount]);
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center">Ntd Account Management</h1>
      <div className="card p-4 shadow-sm">
        <NtdAccountAdd onAdd={addAccount} />
        <NtdAccountList accounts={accounts} />
      </div>
    </div>
  );
};

export default NtdApp;
