import {HomePage} from '../../pages/homePage/homePage';
import {Route, Routes} from 'react-router-dom';
import {LoginPage} from '../../pages/loginPage/loginPage';
import {OfferPage} from '../../pages/offerPage/offerPage';
import {FavoritesPage} from '../../pages/favoritesPage/favoritesPage';
import {TemplatePage} from '../../pages/templatePage/templatePage';
import {AppRoutes, AuthorizationStatus, CityListNames} from '../../consts';
import {PrivateRoute} from '../privateRoute/privateRoute';
import {NotFoundPage} from '../../pages/notFoundPage/notFoundPage';
import {offers} from '../../mocks/offers';


function App(): JSX.Element {

  return (
    <Routes>
      <Route path={AppRoutes.Main} element={<TemplatePage/>}>
        <Route path={AppRoutes.Main} element={<HomePage cities={CityListNames}/>}/>
        <Route path={AppRoutes.Room} element={<OfferPage offers={offers}/>}/>
        <Route path={AppRoutes.NotFound} element={<NotFoundPage/>}/>
        <Route
          path={AppRoutes.Favorites}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
              <FavoritesPage offers={offers}/>
            </PrivateRoute>
          }
        />
      </Route>
      <Route path={AppRoutes.Login} element={<LoginPage/>}/>
    </Routes>
  );
}

export default App;
