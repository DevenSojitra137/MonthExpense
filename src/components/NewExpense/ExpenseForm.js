import React, { useState } from "react";
import "./ExpenseFrom.css";

export default function ExpenseForm(props) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  //   const [enteredInput, setEnteredInput] = useState({
  //     enteredTitle:'',
  //     enteredAmount:'',
  //     enteredDate:''
  //   });

  const titleChangeHandler = (e) => {
    setEnteredTitle(e.target.value);
    // setEnteredInput({
    //     ...enteredInput,
    //     enteredTitle: e.target.value
    // })
    // setEnteredInput((prevState) =>{
    //     return{...prevState,enteredTitle:e.traget.value}
    // })
  };
  const amountChangeHandler = (e) => {
    setEnteredAmount(e.target.value);
    // setEnteredInput({
    //     ...enteredInput,
    //     enteredAmount: e.target.value
    // })
    // setEnteredInput((prevState) =>{
    //     return{...prevState,enteredAmount:e.traget.value}
    // })
  };
  const dateChangeHandler = (e) => {
    setEnteredDate(e.target.value);
    // setEnteredInput({
    //     ...enteredInput,
    //     enteredDate: e.target.value
    // })
    // setEnteredInput((prevState) =>{
    //     return{...prevState,enteredDate:e.traget.value}
    // })
  };

  const inputChangeHandler = (indentifier, value) => {
    if (indentifier === "title") {
      setEnteredTitle(value);
    } else if (indentifier === "amount") {
      setEnteredAmount(value);
    } else {
      setEnteredDate(value);
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenses = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");

    props.onSaveExpenseData(expenses);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="">Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="">Amount</label>
          <input
            type="number"
            min="0.00"
            step="1"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="">Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
          <button type="submit" onClick={props.onCancle}>Cancle</button>
        </div>
      </div>
    </form>
  );
}
