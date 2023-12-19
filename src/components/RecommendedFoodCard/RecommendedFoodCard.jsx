import PropTypes from 'prop-types';
import {
  Value,
  ProductName,
  ProductDescription,
  Img,
  ImgThumb,
  ProductCard,
} from './RecommendedFoodCard.styled';

const RecommendedFoodCard = ({ id, img, name, amount, calories }) => {
  return (
    <ProductCard key={id}>
      <ImgThumb>
        <Img src={img} alt={name} />
      </ImgThumb>

      <ProductDescription>
        <ProductName>{name}</ProductName>
        <Value>
          {amount} <span>{calories} calories</span>
        </Value>
      </ProductDescription>
    </ProductCard>
  );
};

RecommendedFoodCard.propTypes = {
  id: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  calories: PropTypes.number.isRequired,
};

export default RecommendedFoodCard;
