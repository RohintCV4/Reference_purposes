import React, { useState } from 'react'
import { set } from 'react-hook-form';

const ListItems = () => {
    const [checkBox, setCheckBox] = useState([]);
   
  function handleChange(e) {
    if (e.target.checked) {
      setCheckBox([...checkBox, e.target.value]);
      
    }
    else {
      setCheckBox(checkBox.filter((item) => item !== e.target.value));
    }
  }
  const isChecked = (value) => checkBox.includes(value);
  return (
    <div>
      <div>
        <input value="One" type="checkbox" onChange={handleChange} />
        {/* <span style={{ textDecoration: isChecked("One") ? "line-through" : "none", marginLeft: "3px" }}>One </span> */}
        {isChecked("One")?<s>One</s>:<span>One</span>}
      </div>
      <div>
        <input value="Two" type="checkbox" onChange={handleChange} />
        <span style={{ textDecoration: isChecked("Two") ? "line-through" : "none", marginLeft: "3px" }}>Two </span>
      </div>
      <div>
        <input value="Three" type="checkbox" onChange={handleChange} />
        <span style={{ textDecoration: isChecked("Three") ? "line-through" : "none", marginLeft: "3px" }}>Three </span>
      </div>
      <div>
        <input value="Four" type="checkbox" onChange={handleChange} />
        <span style={{ textDecoration: isChecked("Four") ? "line-through" : "none", marginLeft: "3px" }}>Four </span>
      </div>
      <div>
        <input value="Five" type="checkbox" onChange={handleChange} />
        <span style={{ textDecoration: isChecked("Five") ? "line-through" : "none", marginLeft: "3px" }}>Five </span>
      </div>
      {/* <div>The all checked values are {checkBox.join("\n, ")}</div> */}
      <div>
        <h4>Selected Items</h4>
        {
          checkBox.length > 0 ? (
            checkBox.map((item, val) => (
              <div key={val}>{item} </div>
            ))
          ) : (
            <div> All Boxes are Unchecked </div> 
          )
        }
      </div>
    </div>
  )
}

export default ListItems