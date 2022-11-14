const Button = ({ children, label = "default", className = "", link = "", onClick }) => {

  return <div className="btn-wrap">
    <button
      type="button"
      onClick={onClick}
      className={`btn ${className}`}
    >
      {children
        ? children
        : label
      }
    </button>
  </div>
};

export default Button;