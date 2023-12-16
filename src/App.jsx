import { lazy} from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';


const SignUpPage = lazy(() => import('./pages/SignUpPage/SignUpPage'));
const Today = lazy(() => import('./pages/Today/Today'));
const Welcome = lazy(() => import('./pages/Welcome/Welcome'));

function App() {
  return (
    <>
      <h1>Main Page</h1>
      <Routes>
      <Route path='/' element={<Layout />}>
      <Route index element={<Welcome />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/main" element={<Today />} />
      </Route>
     
      </Routes>
    </>
  );
}
export default App;
