import React, { useEffect } from 'react'

function MoneyList({ list, handleDelete }) {
    // useEffect(()=>{
    //     const negativeList = list.filter( item => item.status == false);
    //     console.log(negativeList)
    //     return negativeList
    // },[list])
    const incomeList = list.filter(item => item.status === true || item.status === "true");
    const expensesList = list.filter(item => item.status === false || item.status === "false");

    return (
        <div className="monney__list">
            <div className="monney__list__col monney__list--income"><h4 className="monney__list__heading">INCOME</h4>
            {
                    incomeList.map(item => (
                        <div key={item.id} className="income__item list-item">
                            <p key={item.id}>{item.description}:    {item.value}</p>
                            <button onClick={() => handleDelete(item.id)}><i class="fa fa-times-circle" aria-hidden="true"></i></button>
                        </div>
                    ))
                }
            </div>

            <div className="monney__list__col monney__list--expenses"><h4 className="monney__list__heading">EXPENSES</h4>
            {
                    expensesList.map(item => (
                        <div key={item.id} className="expenses__items list-item">
                            <p key={item.id}>{item.description}:    {item.value}</p>
                            <button onClick={() => handleDelete(item.id)}><i class="fa fa-times-circle" aria-hidden="true"></i></button>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default MoneyList
