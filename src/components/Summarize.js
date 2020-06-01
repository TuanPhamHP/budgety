import React from "react";
let date = new Date();
const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function Summarize({ list }) {
  let sum = list.reduce(
    (sum, item) =>
      item.status === true || item.status === "true"
        ? sum + item.value
        : sum - item.value,
    0
  );
  let incomeTotal = list.reduce(
    (incomeTotal, item) =>
      item.status ? incomeTotal + item.value : incomeTotal,
    0
  );
  let expensesTotal = list.reduce(
    (expensesTotal, item) =>
      item.status === "false" ? expensesTotal - item.value : expensesTotal,
    0
  );
  return (
    <div className="summary">
      <p className="summary__date">
        Available Budget in :{" "}
        {`${monthNames[date.getMonth()]} ${date.getDate()}`}
      </p>
      <h1
        className="summary__money"
        className={
          sum >= 0 ? "summary__sum income-lger" : "summary__sum expense-lger"
        }
      >
        {sum}
      </h1>
      {/* <p className="summary__expenses">
        {expensesTotal} :{" "}
        {expensesTotal / incomeTotal
          ? `${Math.trunc((expensesTotal * 100) / incomeTotal)}%`
          : "---"}
      </p> */}
    </div>
  );
}

export default Summarize;
