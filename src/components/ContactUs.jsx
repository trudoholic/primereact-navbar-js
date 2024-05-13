// import React from 'react'
import {useState} from 'react'
// import styles from './ContactUs.module.css'
import {InputText} from 'primereact/inputtext'
import {InputTextarea} from 'primereact/inputtextarea'

export default function ContactUs() {
  const [, setFirstName] = useState("") //firstName
  const [, setLastName] = useState("") //lastName
  const [, setAddress] = useState("") //address
  const [, setCity] = useState("") //city
  const [, setZip] = useState("") //zip

  return (
    // <div className={styles.contactUsDiv}>
    <div>

      <div className="p-fluid p-formgrid p-grid">
        <div className="p-field p-col-12 p-md-6">
          <label htmlFor="firstname6">Firstname</label>
          <InputText id="firstname6" type="text" onChange={(e)=>setFirstName(e.target.value)} />
        </div>
        <div className="p-field p-col-12 p-md-6">
          <label htmlFor="lastname6">Lastname</label>
          <InputText id="lastname6" type="text" onChange={(e)=>setLastName(e.target.value)} />
        </div>
        <div className="p-field p-col-12">
          <label htmlFor="address">Address</label>
          <InputTextarea id="address" type="text" onChange={(e)=>setAddress(e.target.value)} rows="4" />
        </div>
        <div className="p-field p-col-12 p-md-6">
          <label htmlFor="city">City</label>
          <InputText id="city" type="text" onChange={(e)=>setCity(e.target.value)} />
        </div>
        <div className="p-field p-col-12 p-md-3">
          <label htmlFor="zip">Zip</label>
          <InputText id="zip" type="text" onChange={(e)=>setZip(e.target.value)} />
        </div>
      </div>

    </div>
  )
}
