
import { useState, React } from 'react'
import './SublettingForm.css'
import Navbar from '../home/components/navbar/Navbar'
import axios from 'axios'



export default function SublettingForm() {
  const [subletterName, setSubletterName] = useState("");
  const [phoneNumber, setphoneNumber] =useState("");
  const [startDateTime, setStartDateTime] =useState("");
  const [endDateTime, setEndDateTime] =useState("");
  const [rentAmount, setRentAmount] =useState(0);
  const [securityDepositAmount, setSecurityDepositAmount] =useState(0);


  const formData = {
     
    name: subletterName,
    phoneNumber,
    startDateTime,
    endDateTime,
    rentAmount,
    securityDepositAmount
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    
   axios.post('http://localhost:4000/order', formData) 
   paywithMpesa()
  };

  async function paywithMpesa() {
    try {
      const response = await axios.post('http://localhost:4000/stkPush', {phone: phoneNumber, amount: securityDepositAmount})
      console.log(response.data)
    } catch (error) {
      console.error('Error fetching listing:', error);
  }
  }

  return (
    <><Navbar /><form
      className="subletting-order-form"
      onSubmit={handleSubmit}>

      <h1>Subletting Order Form</h1>
      <div>
        <label className="subletting-order-form-label">Enter Name</label>
        <input
          type="text"
          name="subletterName"
          value={subletterName}
          onChange={(e) => setSubletterName(e.target.value)} />
      </div>
      <div>
        <label className="subletting-order-form-label">Phone Number</label>
        <input
          type="number"
          name="phoneNumber"
          value={phoneNumber}
          placeholder='254'
          onChange={(e) => setphoneNumber(e.target.value)} />
      </div>
      <div>
        <label className="subletting-order-form-label">Start Date</label>
        <input
          type="date"
          name="startDateTime"
          value={startDateTime}
          onChange={(e) => setStartDateTime(e.target.value)} />
      </div>
      <div>
        <label className="subletting-order-form-label">End Date</label>
        <input
          type="date"
          name="endDateTime"
          value={endDateTime}
          onChange={(e) => setEndDateTime(e.target.value)} />
      </div>
      <div>
        <label className="subletting-order-form-label">Rent Amount</label>
        <input
          type="number"
          name="rentAmount"
          value={rentAmount}
          onChange={(e) => setRentAmount(e.target.value)} />
      </div>
      <div>
        <label className="subletting-order-form-label">Security Deposit Amount</label>
        <input
          type="number"
          name="securityDepositAmount"
          value={securityDepositAmount}
          onChange={(e) => setSecurityDepositAmount(e.target.value)} />
      </div>
      <button type="submit">Submit</button>
    </form></>
  );
};

