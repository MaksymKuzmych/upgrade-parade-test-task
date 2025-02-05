import { Route, Routes } from 'react-router';

import { NotFound, ProductList } from '../screens';

export const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<ProductList />} />
      <Route path='/my-account' element={<></>} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
};
