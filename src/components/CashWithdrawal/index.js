// Write your code here
import {Component} from 'react'
import DenominationItem from '../DenominationItem/index'

import './index.css'

class CashWithdrawal extends Component {
  state = {inputValue: 0, initialValue: 2000}

  onClickUpdate = event => {
    const {initialValue} = this.state
    console.log(event.target)
  }

  render() {
    const {denominationsList} = this.props
    const {inputValue} = this.state
    return (
      <div className="container">
        <div className="page-container">
          <div className="name-container">
            <p className="letter">S</p>
            <h1 className="name">Sarah Williams</h1>
          </div>
          <div className="balance-container">
            <p className="balance">Your Balance</p>
            <div className="money">
              <h1 className="initial-balance">2000</h1>
              <p className="text">In Rupees</p>
            </div>
          </div>
          <h1 className="withdraw-text">WithDraw</h1>
          <ul className="denomination-container">
            {denominationsList.map(each => (
              <DenominationItem
                denominatonList={each}
                key={each.id}
                value={inputValue}
                onClickUpdate={this.onClickUpdate}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
