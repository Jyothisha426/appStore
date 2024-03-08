import './index.css'

const TabItem = props => {
  const {tabDetails, clickTabItem, isActive} = props
  const {tabId, displayText} = tabDetails

  const onClickTab = () => {
    clickTabItem(tabId)
  }

  const selectedTabStyles = isActive ? 'active-tab-styles' : ''

  return (
    <li className="tab-item">
      <button
        type="button"
        className={`tab-btn ${selectedTabStyles} `}
        onClick={onClickTab}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
