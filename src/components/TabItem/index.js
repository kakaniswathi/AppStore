// Write your code here
import './index.css'

const TabItem = props => {
  const {tabDetails, onActiveTabId, isActive} = props
  const {tabId, displayText} = tabDetails

  const updateTabId = () => {
    onActiveTabId(tabId)
  }
  const activeTabClassName = isActive ? 'active-tab-btn' : ''
  return (
    <>
      <li>
        <button
          type="button"
          onClick={updateTabId}
          className={`button ${activeTabClassName}`}
        >
          {displayText}
        </button>
      </li>
    </>
  )
}

export default TabItem
