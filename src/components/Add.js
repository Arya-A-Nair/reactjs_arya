import React from 'react'
import validator from 'validator'
import { useContext } from 'react'
import { userdata, Option } from '../App'




const Add = () => {
    let data1=useContext(userdata)
    let [option,setoption]=useContext(Option)


    const [name, setName] = React.useState("")
    const [email, setEmail] = React.useState('')
    const [contact, setContact] = React.useState('')
    const [address, setAddress] = React.useState('')
    const [emailerror, setEmailerror] = React.useState('' )
    const [contactError, setContactError] = React.useState('')

    let nameChange=(value)=>{
        setName(value)
    }
    let emailChange=(value)=>{
        if (validator.isEmail(value)) {
            setEmailerror('')
        }
        else{
            setEmailerror('Invalid Email')
        }
        setEmail(value)
    }
    let contactChange=(value)=>{
        let pattern=new RegExp(/^[0-9]{10}$/)
        if(pattern.test(value)){
            setContactError('')
        }
        else{
            setContactError('Invalid Contact')
        }
        setContact(value)
    }

    let addressChange=(value)=>{
        setAddress(value)
    }

    let handleSubmit=async (e)=>{
        e.preventDefault()
        
        let data={
            name,
            email,
            contact,
            address
        }
        data1.push(data)
        console.log(data1)
        setoption("Show")

        let response=await fetch('https://dry-bayou-99944.herokuapp.com/profiles',{
            method:'POST',
            headers:{
                Accept:'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(data)
        })
        let res=await response.json()
        console.log(res)
        
        
    }

    return (
    <form className="Add-data" onSubmit={(e)=>handleSubmit(e)}>
            <div>Name</div>
            <input type="input" className="input"  name="name" id='name' value={name} onChange={(e)=>nameChange(e.target.value)}  required /><span></span>
        
            <div>Email</div>
            
            <input type="email" className="input"  name="email" id='email' value={email} onChange={(e)=>emailChange(e.target.value)} required />
            <div>{emailerror}</div>
        
        
            <div>Contact</div>
            <input type="number" className="input"  name="contact" id='contact' value={contact} onChange={(e)=>contactChange(e.target.value)} required />
            <div>{contactError}</div>

        
    
            <div>Address</div>
            <input type="text" className="input"  name="address" id='address' value={address} onChange={(e)=>addressChange(e.target.value)} required /><span></span>

            <div></div>
            <div>
                <button type="submit" className="submit">Submit</button>
            </div>
            <div></div>
    </form>
    )
}

export default Add