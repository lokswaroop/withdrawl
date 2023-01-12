// Write your code here
import './index.css'

const DenominationItem = props => {
  const {DenominationDetails, updateBalance} = props
  const {value} = DenominationDetails

  const click = () => {
    updateBalance(value)
  }

  return (
    <li>
      <button type="button" className="button" onClick={click}>
        {value}
      </button>
    </li>
  )
}
export default DenominationItem
