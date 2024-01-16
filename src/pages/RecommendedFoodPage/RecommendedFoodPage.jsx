import { useState, useRef, useEffect } from 'react';
import { getRecommendedFood } from '../../helpers/getRecommendedFood';

import RecommendedFoodCard from '../../components/RecommendedFoodCard/RecommendedFoodCard';
import image from '../../images/RecommendedFoodPage/Ketogenic.png';
import {
  Container,
  Content,
  HeaderPage,
  TitlePage,
  InfoBox,
  Img,
  RecommendedFoodList,
} from './RecommendedFoodPage.styled';
import BackLink from '../../components/BackLink';

import { randomizeFood } from '../../helpers/randomizeFood';

export default function RecommendedFood() {
  const [arrayForRender, setArrayForRender] = useState([]);

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
          <BackLink />
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
