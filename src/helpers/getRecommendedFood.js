import axios from 'axios';

export const getRecommendedFood = async () => {
  try {
    const { data } = await axios.get('/api/recommended-food');
    return data;
  } catch (err) {
    // console.log(err);
  }
};
