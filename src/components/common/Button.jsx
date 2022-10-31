const Button = ({ label = "default", className = "", link = "" }) => {
  return <div className="btn__wrap">
    <button className={`btn ${className}`}>
      {label}
    </button>
  </div>
};

export default Button;