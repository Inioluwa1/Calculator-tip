import React, {useState} from 'react'
import './BeforeSplit.css'

export default function BeforeSplit({
  people, setPeople, setTotalTip, 
  setTipPerPerson, peopleNumber, SetPeoplenumber, 
  bill, setBill, custom, setCustom, selected, setSelected}) {
    
  const numbers = [5, 10, 15, 25, 50];

  const handleBillChange = (e) => {
    setBill(e.target.value)
  }

  const handlePeopleChange = (e) => {
    setPeople(e.target.value)
  }

  const handleCustomPercent = (e) => {
    setCustom(e.target.value)
  }

  const CalculateTip = (value) => {
    if(!bill){
      alert("Bill cannot be left empty")
    }

    if(people == 0){
      SetPeoplenumber(false)
      return
    }
    
    setSelected(value)
    SetPeoplenumber(true)
    let percent = value/100;
    let tip = (percent * bill).toFixed(2);
    let tipPerPerson = (tip/people).toFixed(2);
    setTotalTip(tip);
    setTipPerPerson(tipPerPerson);
  }

  const submitInput = (e) => {
    if(people == 0){
      SetPeoplenumber(false)
      return
    }
    if(!bill){
      alert("Bill cannot be left empty")
    }
    if(e.key === "Enter") {
      SetPeoplenumber(true)
      let percent = custom/100;
      let tip = (percent * bill).toFixed(2);
      let tipPerPerson = (tip/people).toFixed(2);
      setTotalTip(tip);
      setTipPerPerson(tipPerPerson);
    }
  }

  return (
    <div className='BSplit'>
      <div>
        <p className='Bill'> Bill </p>
        <div className='DollarInput'>
          <img src='/icon-dollar.svg' />
          <input type='number' className='AmountInput' placeholder='0' value={bill} onChange={handleBillChange} />
        </div>

        <div>
          <p className='SelectTip'> Select Tip % </p>
          <div className='SelectedTips'>
            {numbers.map((num, index) => (
              <p key={index} 
                onClick={() => CalculateTip(num)} 
                className={`SelectedTipsText ${selected === num? "clicked" : ""}`} > {num}% </p>
            ))}
            <input type='text' placeholder='Custom' value={custom} onChange={handleCustomPercent} onKeyDown={submitInput} />
          </div>
        </div>

        <div>
          <div className='PeopleError'>
            <p className='People'> Number of People</p>
            {peopleNumber || <p className='errorText'> Can't be zero  </p>}
          </div>
          <div className={`PeopleDivisor ${peopleNumber? "" : "error"}`}>
            <img src='/icon-person.svg' />
            <input type='number' placeholder='0' value={people} onChange={handlePeopleChange} />
          </div>
        </div>
      </div>
    </div>
  )
}
