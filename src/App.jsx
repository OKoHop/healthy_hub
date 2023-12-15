import { Route, Routes } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyles';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import Today from './pages/Today/Today';

function App() {
  return (
    <>
      <h1>Main Page</h1>
      <Routes>
        <Route path="/main" element={<Today />} />
      </Routes>
      <SignUpPage />
      <GlobalStyle />
    </>
  );
}
export default App;
