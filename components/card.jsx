import PropTypes from "prop-types";

const Card = ({ name,office, text, imgSrc }) => {
  return (
    <div className="card">
      <img src={imgSrc} alt={name} className="card__img" />
      <div className="cardName">{name}</div>
      <div className="card__office cardText">{office}</div>
      <div className="cardText">XYZ Pvt. Ltd.</div>
      <div className="cardText">{text}</div>
    </div>
  );
};

// Prop types validation
Card.propTypes = {
  heading: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired, // Ensure imgSrc is a valid string (URL)
};

export default Card;
