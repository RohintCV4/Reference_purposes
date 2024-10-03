import React from 'react'

const Input = ({ id, placeholder, name, type, LabelName, value, onChange, className }) => {
  return (
    <>
      <label id={id} htmlFor={name} className='px-2'>{LabelName}</label>
      <div>
        <input
          className={className}
          type={type}
          id={id}
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          required />
      </div>
    </>
  )
}

export default Input