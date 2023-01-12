// Write your code here
import {Component} from 'react'
import DenominationItem from '../DenominationItem'
import './index.css'

class CashWithdrawal extends Component {
  state = {balance: 2000}

  updateBalance = value => {
    this.setState(prev => ({balance: prev.balance - value}))
  }

  render() {
    const {denominationsList} = this.props
    const {balance} = this.state
    return (
      <div className="bg">
        <div className="card">
          <h1>S</h1>
        </div>

        <h1 className="white">Sarah Williams</h1>
        <p className="black">Your Balance</p>
        <div>
          <h1 className="white">{balance}</h1>
          <p className="black">In Rupees</p>
        </div>
        <p className="white">Withdraw</p>
        <p className="black">CHOOSE SUM(IN RUPEES)</p>
        <ul>
          {denominationsList.map(each => (
            <DenominationItem
              key={each.id}
              denominationDetails={each}
              updateBalance={this.updateBalance}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default CashWithdrawal
