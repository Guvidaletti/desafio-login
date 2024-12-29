import { Link } from 'react-router';
import UserInfos from '../../components/userInfos/userInfos';

export default function HomePage() {
  return (
    <>
      <h2>Home Page (Rota aberta)</h2>
      <br />
      <UserInfos />
      <br />
      <Link to={'/interno'}>Interno</Link>
      <br />
      <Link to={'/teste'}>Test</Link>
    </>
  );
}
