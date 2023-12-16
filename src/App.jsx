import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './components/SharedLayout/SharedLayout';
import { GlobalStyle } from './GlobalStyles';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import Today from './pages/Today/Today';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<SignUpPage />} />
          <Route path="main" element={<Today />} />
        </Route>
      </Routes>
    </>
  );
}
export default App;
