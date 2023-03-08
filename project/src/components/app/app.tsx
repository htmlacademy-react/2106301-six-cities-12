import {HomePage} from '../../pages/homePage/homePage';
import {Route, Routes} from 'react-router-dom';
import {LoginPage} from '../../pages/loginPage/loginPage';
import {OfferPage} from '../../pages/offerPage/offerPage';
import {FavoritesPage} from '../../pages/favoritesPage/favoritesPage';
import {TemplatePage} from '../../pages/templatePage/templatePage';
import {AppRoutes} from '../../consts';

type AppProps = {
  offersSum: number;
}
function App({offersSum}: AppProps): JSX.Element {

  return (
    <Routes>
      <Route path={AppRoutes.Main} element={<TemplatePage/>}>
        <Route path={AppRoutes.Main} element={<HomePage offersSum={offersSum}/>}/>
        <Route path={AppRoutes.Login} element={<LoginPage/>}/>
        <Route path={AppRoutes.Room} element={<OfferPage/>}/>
        <Route path={AppRoutes.Favorites} element={<FavoritesPage/>}/>
        <Route path={AppRoutes.NotFound} element={<HomePage offersSum={offersSum}/>}/>
      </Route>
    </Routes>
  );
}

export default App;
