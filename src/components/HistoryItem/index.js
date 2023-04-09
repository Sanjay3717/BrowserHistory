import './index.css'

const HistoryItem = props => {
  console.log('Hello')
  const {historyDetails, deleteHistory} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyDetails
  const onClickDelete = () => {
    deleteHistory(id)
  }
  return (
    <li className="list-items">
      <div className="row-container">
        <div className="internal-container">
          <p className="time-color">{timeAccessed}</p>

          <img src={logoUrl} className="image " alt="domain logo" />
          <p className="">{title}</p>
          <p className=" domain">{domainUrl}</p>
        </div>
      </div>
      <button
        data-testid="delete"
        className="button-style"
        type="button"
        onClick={onClickDelete}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          className="delete-icon"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default HistoryItem
