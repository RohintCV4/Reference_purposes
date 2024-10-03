import React from 'react'

const Button = ({type,onClick,classname,text}) => {
  return (
    
        <button type={type} onClick={onClick} className={classname}>{text}</button>
    
  )
}

export default Button