import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { changeCurrentType } from 'redux/extraInfo/extraInfo-slice';
import s from './PortfolioProduct.module.css';
import { useMediaQuery } from '@react-hook/media-query';

export const PortfolioProduct = ({
  img,
  description,
  title,
  text,
  index,
  options,
}) => {
  const isDesktopAndTablet = useMediaQuery(
    'only screen and (min-width: 768px) and (max-width: 1199px)'
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (title.length > 28 && isDesktopAndTablet === true) {
      dispatch(changeCurrentType(index % 2 === 1 ? index - 1 : index + 1));
    } else if (title.length > 28 && isDesktopAndTablet === false) {
      dispatch(changeCurrentType([]));
    }
  }, [dispatch, index, title.length, isDesktopAndTablet]);

  return (
    <li className={s.portfolioItem}>
      <NavLink onClick={e => e.preventDefault()} className={s.portfolioLink}>
        <div className={s.portfolioDescription}>
          <img alt={img.alt} className={s.portfolioImg} />
          <p className={s.portfolioText}>{description}</p>
        </div>
        <div className={`${s.thumb} ${options.includes(index) && s.thumbItem}`}>
          <h2 className={s.thumbTitle}>{title}</h2>
          <p className={s.thumbText}>{text}</p>
        </div>
      </NavLink>
    </li>
  );
};

export default PortfolioProduct;
