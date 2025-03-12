import React from "react";

const NtdAccountList = ({ accounts }) => {
  return (
    <div className="mt-4">
      <h2>Account List</h2>
      <table className="table table-striped">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Amount ($)</th>
          </tr>
        </thead>
        <tbody>
          {accounts.map((acc, index) => (
            <tr key={index}>
              <td>{acc.id}</td>
              <td>{acc.name}</td>
              <td>{acc.email}</td>
              <td>${acc.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default NtdAccountList;
