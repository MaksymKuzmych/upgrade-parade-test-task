import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { Router } from './router';
import { Header, Navigation } from './components';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <div className='flex flex-1'>
        <aside className='bg-gray-700 px-5 py-8'>
          <Navigation />
        </aside>
        <Router />
      </div>
    </QueryClientProvider>
  );
};

export default App;
