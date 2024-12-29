import { useOidcUser } from '@axa-fr/react-oidc';
import { Fragment } from 'react/jsx-runtime';

export default function UserInfos() {
  const { oidcUser } = useOidcUser();
  return oidcUser ? (
    <section>
      <div>
        Nome: <span>{oidcUser.name}</span>
      </div>
      <div>
        Grupos: <span>{oidcUser.groups?.join(', ')}</span>
      </div>
      <div>
        Username: <span>{oidcUser.preferred_username}</span>
      </div>
    </section>
  ) : (
    <Fragment />
  );
}
