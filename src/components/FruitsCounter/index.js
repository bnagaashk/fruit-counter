// Write your code here
import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {mango: 0, banana: 0}

  mangoonclick = () => {
    this.setState(prevState => ({mango: prevState.mango + 1}))
  }

  onbananaChange = () => {
    this.setState(prevState => ({banana: prevState.banana + 1}))
  }

  render() {
    const {mango, banana} = this.state
    return (
      <div className="bg-container">
        <div className="card">
          <h1 className="heading">
            Bob ate {mango} mangoes {banana} bananas
          </h1>
          <div className="fruit">
            <img
              src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
              alt="Mango"
              height="300"
              width="400"
            />
            <button type="button" className="btn" onClick={this.mangoonclick}>
              Eat Mango
            </button>
          </div>
          <div className="fruit">
            <img
              src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
              alt="banana"
              height="300"
              width="400"
            />
            <button type="button" className="btn" onClick={this.onbananaChange}>
              Eat Banana
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
