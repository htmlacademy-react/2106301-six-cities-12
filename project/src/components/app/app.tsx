import {HomePage} from '../../pages/homePage/homePage';
import {Route, Routes} from 'react-router-dom';
import {LoginPage} from '../../pages/loginPage/loginPage';
import {OfferPage} from '../../pages/offerPage/offerPage';
import {FavoritesPage} from '../../pages/favoritesPage/favoritesPage';
import {TemplatePage} from '../../pages/templatePage/templatePage';
import {AppRoutes, AuthorizationStatus, CityListNames} from '../../consts';
import {CityList} from '../cityList/cityList';
import {PrivateRoute} from '../privateRoute/privateRoute';
import {NotFoundPage} from '../../pages/notFoundPage/notFoundPage';


function App(): JSX.Element {

  return (
    <Routes>
      <Route path={AppRoutes.Main} element={<TemplatePage/>}>
        <Route path={AppRoutes.Main} element={<HomePage/>}>
          <Route path={'paris'} element={<CityList city={CityListNames.Paris}/>}/>
          <Route path={'cologne'} element={<CityList city={CityListNames.Cologne}/>}/>
          <Route path={'brussels'} element={<CityList city={CityListNames.Brussels}/>}/>
          <Route path={'amsterdam'} element={<CityList city={CityListNames.Amsterdam}/>}/>
          <Route path={'hamburg'} element={<CityList city={CityListNames.Hamburg}/>}/>
          <Route path={'dusseldorf'} element={<CityList city={CityListNames.Dusseldorf}/>}/>
        </Route>
        <Route path={AppRoutes.Room} element={<OfferPage/>}/>
        <Route path={AppRoutes.NotFound} element={<NotFoundPage/>}/>
      </Route>
      <Route path={AppRoutes.Login} element={<LoginPage/>}/>
      <Route
        path={AppRoutes.Favorites}
        element={
          <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
            <FavoritesPage/>
          </PrivateRoute>
        }
      />
    </Routes>
  );
}

export default App;
