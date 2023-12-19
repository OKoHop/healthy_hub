import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import SignIn from './pages/SignInPage/SignIn';

const Today = lazy(() => import('./pages/Today/Today'));
const Welcome = lazy(() => import('./pages/Welcome/Welcome'));
const Diary = lazy(() => import('./pages/DiaryPage/DiaryPage'));
const SignUpPage = lazy(() => import('./pages/SignUpPage/SignUpPage'));
const RecFoodPage = lazy(() =>
  import('./pages/RecommendedFoodPage/RecommendedFoodPage')
);

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Welcome />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/forgot-password" />
          <Route path="/main" element={<Today />} />
          <Route path="/dashboard" />
          <Route path="/diary" element={<Diary />} />
          <Route path="/recommended-food" element={<RecFoodPage />} />
          <Route path="/settings" />
          <Route path="*" element={<Welcome />} />
        </Route>
      </Routes>
    </>
  );
}
export default App;
