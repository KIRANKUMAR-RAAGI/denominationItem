import './index.css'

const DenominationItem = props => {
  const {denominatonList, onClickUpdate} = props
  const {id, value} = denominatonList

  const onClickUpdateBalance = () => {
    onClickUpdate(id)
  }

  return (
    <button type="button" className="button" onClick={onClickUpdateBalance}>
      {value}
    </button>
  )
}

export default DenominationItem
