import { Route, Routes } from 'react-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { ProductList } from './screens';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path='/' element={<ProductList />} />
      </Routes>
    </QueryClientProvider>
  );
};

export default App;
