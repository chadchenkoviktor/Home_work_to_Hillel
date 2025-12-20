import { useState } from 'react'
import smail_1 from './assets/1.png'
import smail_2 from './assets/2.png'
import smail_3 from './assets/3.png'
import smail_4 from './assets/4.png'
import ItemResult from './ItemResult'
import './App.css'

function App() {
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)
  const [count3, setCount3] = useState(0)
  const [count4, setCount4] = useState(0)
  

  return (
    <>
      <div className='card'>
        <div onClick={() => setCount1((count1) => count1 + 1)}className='item'>
          <img src={smail_1} className="smail" alt="smail" />
          <span>
           {count1}
          </span>
        </div>
        <div onClick={() => setCount2((count2) => count2 + 1)}className='item'>
          <img src={smail_2} className="smail" alt="smail" />
          <span>
           {count2}
          </span>
        </div>
        <div onClick={() => setCount3((count3) => count3 + 1)} className='item'>
          <img src={smail_3} className="smail" alt="smail" />
          <span>
           {count3}
          </span>
        </div>
        <div onClick={() => setCount4((count4) => count4 + 1)}className='item'>
          <img src={smail_4} className="smail" alt="smail" />
          <span>
           {count4}
          </span>
        </div>
      </div>
      <div className="card">
        <button>
          Show Result
        </button>  
      </div>
      <div className='item-result'>
        <img src={smail_1} className="smail-result" alt="smail" />
        <span>
          {count4}
        </span>
      </div>
      <ItemResult/>
    </>
  )
}

export default App
