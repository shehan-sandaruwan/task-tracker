import PropTypes from "prop-types";

const Button = ({ color, text, onClick }) => {
  return (
    <button
      style={{ backgroundColor: color }}
      className="btn"
      onClick={onClick}
    >
      {text}{" "}
    </button>
  );
};

const onClick = () => {
  console.log("Hello");
};

Button.defaultProps = {
  onClick: onClick,
  color: "steelBlue",
};

Button.propTypes = {
  color: PropTypes.string,
  text: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};
export default Button;
