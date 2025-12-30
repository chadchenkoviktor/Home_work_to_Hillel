import { Component } from 'react'
import smail_1 from './assets/1.png'
import smail_2 from './assets/2.png'
import smail_3 from './assets/3.png'
import smail_4 from './assets/4.png'
import Smile from './components/Smile'
import './App.css'

class App extends Component () {
  constructor(props) {
    super(props);

    this.state = {
      smile1: 0,
      smile2: 0,
      smile3: 0,
      smile4: 0,
      winner: null,
      isResultShown: false
    }
  }
  
  handleClick = (smileNumber) => {
    this.setState({
      `smile${smileNumber}`: this.state[`smile${smileNumber}`] + 1
    })
  } 

  showResult = () => {
    this.setState({
      isResultShown: !this.state.isResultShown
    })
  }
  
  return (
    <>
      <div className='card'>
        <Smile index={1} handleClick={handleClick} smileLink={smail_1} count={this.state.smile1}/>
        <Smile index={2} handleClick={handleClick} smileLink={smail_2} count={this.state.smile2}/>
        <Smile index={3} handleClick={handleClick} smileLink={smail_3} count={this.state.smile3}/>
        <Smile index={4} handleClick={handleClick} smileLink={smail_4} count={this.state.smile4}/>
      </div>
      <div className="card">
        <button onClick={showResult}>
          Show Result
        </button>  
      </div>
      {isResultShown ? <ItemResult/> : null}
    </>
  )
}

export default App;
