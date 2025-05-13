import React from 'react'
import './AfterSplit.css'

export default function AfterSplit({
  totalTip, TipPerPerson, setCustom,
  setTotalTip, setTipPerPerson, 
  setBill, setPeople, setSelected}) {

  const Reset = () => {
    setTotalTip('0.00')
    setTipPerPerson('0.00')
    setBill('')
    setPeople('')
    setCustom('')
    setSelected('')
  }

  return (
    <div className='AfterSplit'>
      <div className='TipAmount'>
        <div>
          <p className='header'> Tip Amount </p>
          <p className='person'> / person </p>
        </div>
        <p className='amount'> ${totalTip} </p>
      </div>
      <div className='TotalAmount'>
        <div>
          <p className='header'> Total </p>
          <p className='person'> / person </p>
        </div>
        <p className='amount'> ${TipPerPerson} </p>
      </div>
      <button onClick={Reset} className={`Reset ${totalTip > 0? "billavailable" : ""} `}> Reset </button>
    </div> 
  )
}
