import {Link} from 'react-router-dom';
import {AppRoutes} from '../../consts';

export function NotFoundPage () {
  return(
    <>
      <h1>Страница не найдена</h1>
      <Link to={AppRoutes.Main}>Вернуться на главную</Link>
    </>
  );
}
