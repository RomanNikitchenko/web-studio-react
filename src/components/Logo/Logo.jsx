import { Link } from 'react-router-dom';
import s from './Logo.module.css';

export const Logo = () => {
  return (
    <Link className={s.link} to="/">
      <span className={s.linkSpan}>Web</span>Studio
    </Link>
  );
};
