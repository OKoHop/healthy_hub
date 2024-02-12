import { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import ForgotPassword from './pages/ForgotPassword/ForgotPassword';
import { useDispatch } from 'react-redux';
import { refreshUser } from './redux/auth/operations';
import { RestrictedRoute } from './components/Routes/RestrictedRoutes';
import { PrivatRoute } from './components/Routes/PrivatRoutes';

const Today = lazy(() => import('./pages/Today/Today'));
const DashboardPage = lazy(() => import('./pages/DashboardPage/DashboardPage'));
const Welcome = lazy(() => import('./pages/Welcome/Welcome'));
const Diary = lazy(() => import('./pages/DiaryPage/DiaryPage'));
const SignUpPage = lazy(() => import('./pages/SignUpPage/SignUpPage'));
const RecFoodPage = lazy(() =>
  import('./pages/RecommendedFoodPage/RecommendedFoodPage')
);
const SignIn = lazy(() => import('./pages/SignInPage/SignIn'));
const Settings = lazy(() => import('./pages/SettingsPage/SettingsPage'));

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <RestrictedRoute redirectTo="/main" component={<Welcome />} />
            }
          />
          <Route
            path="/signup"
            element={
              <RestrictedRoute redirectTo="/main" component={<SignUpPage />} />
            }
          />
          <Route
            path="/signin"
            element={
              <RestrictedRoute redirectTo="/main" component={<SignIn />} />
            }
          />
          <Route
            path="/forgot-password"
            element={
              <RestrictedRoute
                redirectTo="/main"
                component={<ForgotPassword />}
              />
            }
          />
          <Route
            path="/main"
            element={<PrivatRoute redirectTo="/signin" component={<Today />} />}
          />
          <Route
            path="/dashboard"
            element={
              <PrivatRoute redirectTo="/signin" component={<DashboardPage />} />
            }
          />
          <Route
            path="/diary"
            element={<PrivatRoute redirectTo="/signin" component={<Diary />} />}
          />
          <Route
            path="/recommended-food"
            element={
              <PrivatRoute redirectTo="/signin" component={<RecFoodPage />} />
            }
          />
          <Route
            path="/settings"
            element={
              <PrivatRoute redirectTo="/signin" component={<Settings />} />
            }
          />
          <Route path="*" element={<Welcome />} />
        </Route>
      </Routes>
    </>
  );
}
export default App;
