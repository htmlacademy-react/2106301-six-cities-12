import {HomePage} from '../../pages/homePage/homePage';

type AppProps = {
  offersSum: number;
}
function App({offersSum}: AppProps): JSX.Element {

  return (
    <HomePage offersSum={offersSum}/>
  );
}

export default App;
