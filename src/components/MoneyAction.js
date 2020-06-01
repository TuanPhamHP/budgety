import React,{useState} from 'react';
import PropTypes from 'prop-types';
import { statuses } from '../constants/constants';

// const newItem = {
//     description : "",
//     value:"",
//     status:true,
// }


function MoneyAction({handleAddItem}) {
    // const [value, setValue] = useState([]);
    const [item, setItem] = useState({
        description : "",
        value: "",
        status: statuses.INCOME,
    });
    const handleUpdateItem = (event, field) => {
        const { value } = event.target;
        const newItem = { ...item };
        newItem[field] = value;
        handleClassName()
        setItem(newItem);
        console.log(item.status)
        // return(item.status)
    }
    const handleSaveItem = (event) => {
        event.preventDefault();
        // console.log(item)
        handleAddItem(item)
        setItem({
            description : "",
            value: "",
            status: statuses.INCOME,
        })
    };
    const handleClassName = ()=>{
        return document.getElementById('money-status').options[document.getElementById('money-status').selectedIndex].value;
    }

    // "" 123456
    // 246
    return (
        <div className="money-action">
            <form action="submit" onSubmit={(event) => handleSaveItem(event)}>
                <select id="money-status"
                    value={item.status}
                    onChange= {event => handleUpdateItem(event, 'status')} 
                    className={item.status==='true'||item.status=== true ? 'money__input' : 'money__input money--expense'}>
                    <option value={statuses.INCOME}  className="money__input">+</option>
                    <option value={statuses.EXPENSE}  className="money__input">-</option>
                </select>
                <input 
                    required
                    type="text" 
                    className={item.status==='true'||item.status=== true ? "money__input money__description" : "money__input money__description money--expense" } 
                    onChange={event => handleUpdateItem(event, 'description')} 
                    value={item.description}
                    placeholder="Add your description here"
                />
                <input
                    type="number" 
                    className={item.status==='true'||item.status=== true ? 'money__input money__amount' : 'money__input money__amount money--expense'}
                    onChange={event => handleUpdateItem(event, 'value')} 
                    value={item.value}
                    placeholder="$ Amount of money $"   
                />
                <button className={item.status==='true'||item.status=== true ? 'money__input money-submit' : 'money__input money-submit money--expense'} type="submit">ADD</button>
            </form>
            
        </div>
    )
}

MoneyAction.propTypes = {
    handleAddItem: PropTypes.func
};

export default MoneyAction






