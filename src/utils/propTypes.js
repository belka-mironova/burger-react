import PropTypes from "prop-types";

export const IngredientPropTypes = PropTypes.shape({
  _id: PropTypes.string.isRequired,
  elementId: PropTypes.string,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  image_large: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  calories: PropTypes.number.isRequired,
  proteins: PropTypes.number.isRequired,
  fat: PropTypes.number.isRequired,
  carbohydrates: PropTypes.number.isRequired,
});
