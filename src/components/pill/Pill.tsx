import React from 'react'
import './pill.css'

interface Props{
    label:string;
    isActive?:boolean;
    onClick?:(e?:any) => void;
}

const Pill:React.FC<Props> = ({label, isActive, onClick}) => {
  return (
    <div onClick={onClick} className={isActive ? "" : "pill-content"}>
      {label}
    </div>
  );
}

export default Pill