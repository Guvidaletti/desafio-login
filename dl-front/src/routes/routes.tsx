import {
  OidcConfiguration,
  OidcProvider,
  OidcSecure,
} from '@axa-fr/react-oidc';
import { Link, Route, Routes as RouterRoutes } from 'react-router';
import Auth from '../components/auth/auth';
import Layout from '../components/layout/layout';
import UserInfos from '../components/userInfos/userInfos';
import HomePage from '../pages/homePage/homePage';

const config: OidcConfiguration = {
  client_id: window.env.auth.id,
  redirect_uri: window.location.origin + '/login',
  silent_login_uri: window.location.origin + '/login/silent_renew',
  authority: window.env.auth.domain,
  scope: 'openid profile',
  storage: window.localStorage,
};

export default function Routes() {
  return (
    <RouterRoutes>
      <Route
        path='/'
        element={
          <OidcProvider configuration={config}>
            <Layout />
          </OidcProvider>
        }
      >
        <Route path='/' Component={HomePage} />
        <Route path='/login' element={<></>} />
        <Route
          path='/'
          element={
            <OidcSecure>
              <Auth />
            </OidcSecure>
          }
        >
          <Route
            path='/teste'
            element={
              <div>
                <h2>/test (Rota fechada)</h2>
                <br />
                <UserInfos />
                <br />
                <Link to={'/'}>Home</Link>
                <br />
                <Link to={'/interno'}>Interno</Link>
              </div>
            }
          />
          <Route
            path='/interno'
            element={
              <div>
                <h2>/interno (Rota fechada)</h2>
                <br />
                <UserInfos />
                <br />
                <Link to={'/'}>Home</Link>
                <br />
                <Link to={'/teste'}>Test</Link>
              </div>
            }
          />
        </Route>
      </Route>
    </RouterRoutes>
  );
}
