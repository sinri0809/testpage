const Button = ({ children, label = "default", className = "", link = "" }) => {
  return <div className="btn-wrap">
    <button className={`btn ${className}`}>
      {children
        ? children
        : label
      }
    </button>
  </div>
};

export default Button;