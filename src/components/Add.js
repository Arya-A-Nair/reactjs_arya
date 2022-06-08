import React from 'react'
import validator from 'validator'
const Add = () => {
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

  return (
    <form>
        <div>
            <label>Name</label>
            <input type="input" className="input"  name="name" id='name' value={name} onChange={(e)=>nameChange(e.target.value)}  required />
        </div>
        <div>
            <label>Email</label>
            <input type="email" className="input"  name="email" id='email' value={email} onChange={(e)=>emailChange(e.target.value)} required />
            <span className="error">{emailerror}</span>
        </div>
        <div>
            <label>Contact</label>
            <input type="number" className="input"  name="contact" id='contact' value={contact} onChange={(e)=>contactChange(e.target.value)} required />
            <span className="error">{contactError}</span>

        </div>
        <div>
            <label>Address</label>
            <input type="text" className="input"  name="address" id='address' value={address} onChange={(e)=>addressChange(e.target.value)} required />
        </div>

    </form>
    )
}

export default Add