import { useState } from 'react'
import './App.css'
import AfterSplit from '../Pages/AfterSplit'
import BeforeSplit from '../Pages/BeforeSplit'

function App() {
  const [people, setPeople] = useState('')
  const [peopleNumber, SetPeoplenumber] = useState(true)
  const [totalTip, setTotalTip] = useState('0.00')
  const [TipPerPerson, setTipPerPerson] = useState('0.00')
  const [bill, setBill] = useState('')
  const [custom, setCustom] = useState('')
  const [selected, setSelected] = useState('')


  return (
    <div className='Application'>
      <img src='/logo.svg' />
      <div className='App'>
        <BeforeSplit
          people={people} setPeople={setPeople}
          setTotalTip={setTotalTip} setTipPerPerson={setTipPerPerson}
          peopleNumber={peopleNumber} SetPeoplenumber={SetPeoplenumber}
          bill={bill} setBill={setBill}
          custom={custom} setCustom={setCustom}
          selected={selected} setSelected={setSelected}
          />
        <AfterSplit 
          totalTip={totalTip} setTotalTip={setTotalTip}
          TipPerPerson={TipPerPerson} setTipPerPerson={setTipPerPerson} 
          setBill={setBill} setCustom={setCustom}
          peopleNumber={peopleNumber} setPeople={setPeople} setSelected={setSelected}
        />
      </div>
    </div>
  )
}

export default App
