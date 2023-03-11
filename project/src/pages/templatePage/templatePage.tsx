import {Header} from '../../components/header/header';
import {Footer} from '../../components/footer/footer';
import {Outlet} from 'react-router-dom';

export function TemplatePage () {
  return(
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  );
}
