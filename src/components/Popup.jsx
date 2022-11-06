const Popup = ({ children, className = "" }) => {
  return <div className={`popup-container ${className}`}>
    <div className="popup-wrap">
      {children}
    </div>
  </div>
}

Popup.Content = ({ children }) => {
  return <div className="popup-content">
    {children}
  </div>
}

Popup.Tool = ({ children }) => {
  return <div className="popup-tool">
    {children}
  </div>
}

export default Popup;