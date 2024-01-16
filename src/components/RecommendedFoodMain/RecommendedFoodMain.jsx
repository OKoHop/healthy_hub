import { useState, useEffect } from 'react';

import RecommendedFoodCard from '../RecommendedFoodCard/RecommendedFoodCard';
import {
  RecommendedFoodSection,
  TitleSection,
  RecommendedFoodList,
  SeeMoreButton,
  StyledArrowRight,
} from './RecommendedFoodMain.styled';

import { getRecommendedFood } from '../../helpers/getRecommendedFood';
import { randomizeFood } from '../../helpers/randomizeFood';

const RecommendedFoodMain = () => {
  const [arrayForRender, setArrayForRender] = useState([]);
  useEffect(() => {
    getRecommendedFood()
      .then((responce) => {
        setArrayForRender(randomizeFood(responce));
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <RecommendedFoodSection>
      <TitleSection>Recommended food</TitleSection>
      <RecommendedFoodList>
        {arrayForRender.map(({ _id, img, name, amount, calories }) => (
          <RecommendedFoodCard
            key={_id}
            id={_id}
            img={img}
            name={name}
            amount={amount}
            calories={calories}
          />
        ))}
      </RecommendedFoodList>
      <SeeMoreButton to="/recommended-food">
        See more
        <StyledArrowRight />
      </SeeMoreButton>
    </RecommendedFoodSection>
  );
};

export default RecommendedFoodMain;
