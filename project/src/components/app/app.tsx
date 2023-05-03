import {HomePage} from '../../pages/home-page/home-page';
import {Route, Routes} from 'react-router-dom';
import {LoginPage} from '../../pages/login-page/login-page';
import {OfferPage} from '../../pages/offer-page/offer-page';
import {FavoritesPage} from '../../pages/favorites-page/favorites-page';
import {TemplatePage} from '../../pages/template-page/template-page';
import {AppRoutes} from '../../consts';
import {PrivateRoute} from '../private-route/private-route';
import {NotFoundPage} from '../../pages/not-found-page/not-found-page';

function App(): JSX.Element {

  return (
    <Routes>
      <Route path={AppRoutes.Main} element={<TemplatePage/>}>
        <Route path={AppRoutes.Main} element={<HomePage/>}/>
        <Route path={AppRoutes.Room} element={<OfferPage/>}/>
        <Route path={AppRoutes.NotFound} element={<NotFoundPage/>}/>
        <Route
          path={AppRoutes.Favorites}
          element={
            <PrivateRoute>
              <FavoritesPage/>
            </PrivateRoute>
          }
        />
      </Route>
      <Route path={AppRoutes.Login} element={<LoginPage/>}/>
    </Routes>
  );
}

export default App;
