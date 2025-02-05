import { Search, SubmitButton, Table } from '../../components';

export const ProductList = () => {
  return (
    <main className='m-7 flex-1'>
      <h1 className='mb-8 text-xl font-semibold'>Product List</h1>
      <p className='mb-5'>Review and manage the products available on the marketplace.</p>
      <Search />
      <Table />
      <SubmitButton />
    </main>
  );
};
