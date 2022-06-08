import React from 'react'
import { useContext, createContext, useState } from 'react'
import { Option } from '../App'

const Header = () => {
    let [option,setoption]=useContext(Option)
    let color1={
        backgroundColor:option==="Add"?"#65637B":"#FFFFFF",
        color:option==="Add"?"white":"black"
    }
    let color2={
        backgroundColor:option==="Show"?"#65637B":"#FFFFFF",
        color:option==="Show"?"white":"black"
    }

    return (
        <div className='header'>
            <div className="options" id="Add" style={color1} onClick={()=>setoption("Add")}>Add Data</div>
            <div className="options" id="Show" style={color2} onClick={()=>setoption("Show")}>Show Data</div>
        </div>
    )
}

export default Header