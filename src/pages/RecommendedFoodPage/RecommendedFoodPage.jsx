import { useState, useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getRecommendedFood } from '../../helpers/getRecommendedFood';

import RecommendedFoodCard from '../../components/RecommendedFoodCard/RecommendedFoodCard';
import image from '../../images/RecommendedFoodPage/Ketogenic.png';
import {
  Container,
  Content,
  HeaderPage,
  BackLink,
  ArrowReturn,
  TitlePage,
  InfoBox,
  Img,
  RecommendedFoodList,
} from './RecommendedFoodPage.styled';

import { randomizeFood } from '../../helpers/randomizeFood';

import arrowRight from '../../images/RecommendedFoodPage/arrow-right.svg';
import { getStats } from '../../redux/statistics/statisticOperations';

export default function RecommendedFood() {
  const [arrayForRender, setArrayForRender] = useState([]);

  const dispatch = useDispatch();
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/main');

  useEffect(() => {
    getRecommendedFood()
      .then((responce) => {
        setArrayForRender(randomizeFood(responce, 10));
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <Container>
      <Content>
        <HeaderPage>
          <BackLink
            to={backLinkLocationRef.current}
            onClick={() => dispatch(getStats('today'))}
          >
            <ArrowReturn src={arrowRight} alt="arrow right" />
          </BackLink>
          <TitlePage>Recommended food</TitlePage>
        </HeaderPage>

        <InfoBox>
          <Img src={image} alt="Banner recommended food" />

          <RecommendedFoodList>
            {arrayForRender.map(({ _id, img, name, amount, calories }) => {
              return (
                <RecommendedFoodCard
                  key={_id}
                  id={_id}
                  img={img}
                  name={name}
                  amount={amount}
                  calories={calories}
                />
              );
            })}
          </RecommendedFoodList>
        </InfoBox>
      </Content>
    </Container>
  );
}
