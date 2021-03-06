import React from 'react';
import { useLocation } from 'react-router-dom';

import NLink from '../link';
import { NAV_MAP } from '../../config/constants';

const NavLink = () => {
  const location = useLocation();

  const renderLink = (title: string) => {
    const path = NAV_MAP[title];
    const routePath = location.pathname + location.search;
    // TODO: Mess state...

    const active = routePath === path;

    return (
      <NLink
        title={title}
        path={path}
        active={active}
        bgSize="cover"
        fontWeight="bold"
        marginRight={8}
        bordered
        key={title}
      />
    );
  };

  return <>{Object.keys(NAV_MAP).map(renderLink)}</>;
};

export default NavLink;
