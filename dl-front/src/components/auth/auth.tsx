import { useOidc } from '@axa-fr/react-oidc';
import { createPortal } from 'react-dom';
import { Outlet } from 'react-router';
import { Fragment } from 'react/jsx-runtime';
import { FixedIds } from '../../libraries/fixedIds';
import { useLayoutEffect, useState } from 'react';

export default function Auth() {
  const { login, logout, isAuthenticated } = useOidc();

  const [h, setH] = useState<HTMLElement>();
  useLayoutEffect(() => {
    setH(document.getElementById(FixedIds.header) ?? undefined);
  }, []);

  return (
    <Fragment>
      {!!h &&
        createPortal(
          <Fragment>
            <h4>Desafio Login</h4>
            {isAuthenticated ? (
              <button key='logout' onClick={() => logout('/')}>
                Logout
              </button>
            ) : (
              <button key='login' onClick={() => login()}>
                Login
              </button>
            )}
          </Fragment>,
          h
        )}
      <Outlet />
    </Fragment>
  );
}
