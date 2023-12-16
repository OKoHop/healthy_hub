import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';


export const Layout = () => {
  return (
    <div>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Layout;
