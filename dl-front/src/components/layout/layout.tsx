import { Outlet } from 'react-router';
import { FixedIds } from '../../libraries/fixedIds';
import styles from './layout.module.scss';

export default function Layout() {
  return (
    <main data-testid='layout'>
      <header id={FixedIds.header} className={styles.header} />
      <div className={styles.content}>
        <Outlet />
      </div>
    </main>
  );
}
