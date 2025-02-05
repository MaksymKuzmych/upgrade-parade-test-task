import { NavLink } from 'react-router';

import { Account, Logout } from '../../assets/svg';
import Logo from '../../assets/images/logo.png';

export const Header = () => {
  return (
    <header className='flex justify-between bg-neutral-800 px-5 py-7'>
      <NavLink to='/'>
        <img src={Logo} alt='Logo' className='h-6' />
      </NavLink>
      <div className='flex gap-16'>
        <div className='flex gap-3'>
          <img src={Account} alt='Account' />
          <p className='text-white'>mike-dawson@gmail.com</p>
        </div>
        <button onClick={() => alert('Sign Out')} className='flex cursor-pointer gap-3'>
          <img src={Logout} alt='Account' />
          <p className='text-white'>Sign Out</p>
        </button>
      </div>
    </header>
  );
};
