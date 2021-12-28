import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {number: 0}

  onGenerate = () => {
    const value = Math.ceil(Math.random() * 100)
    this.setState(prevState => ({number: value}))
  }

  render() {
    const {number} = this.state
    return (
      <div className="main-container">
        <di className="card-container">
          <h1>Random number</h1>
          <p>Generate a random number in the range 0 to 100</p>
          <button type="button" onClick={this.onGenerate}>
            Generate
          </button>
          <p>{number}</p>
        </di>
      </div>
    )
  }
}

export default RandomNumberGenerator
