import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { Table } from './components';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Table />
    </QueryClientProvider>
  );
};

export default App;
