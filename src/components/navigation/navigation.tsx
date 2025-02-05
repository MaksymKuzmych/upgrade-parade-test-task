import { CustomNavLink } from './custom-nav-link';

export const Navigation = () => {
  return (
    <nav className='flex min-w-64 flex-col gap-6'>
      <CustomNavLink to='/' title='Product List' />
      <CustomNavLink to='/my-account' title='My Account' />
    </nav>
  );
};
