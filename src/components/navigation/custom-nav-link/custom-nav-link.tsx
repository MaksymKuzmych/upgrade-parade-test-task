import { NavLink } from 'react-router';

import { ArrowRightWhite, ArrowRightYellow } from '../../../assets/svg';

interface ICustomNavLinkProps {
  to: string;
  title: string;
}

export const CustomNavLink = ({ to, title }: ICustomNavLinkProps) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex justify-between ${isActive ? 'text-yellow-400' : 'text-white'}`
      }
    >
      {({ isActive }) => (
        <>
          <span>{title}</span>
          <img src={isActive ? ArrowRightYellow : ArrowRightWhite} alt='Arrow Right' />
        </>
      )}
    </NavLink>
  );
};
