import './App.css';
import { ThemeProvider } from 'styled-components';
import { theme, General } from 'Styles';
import Checkout from 'Pages/Checkout';
import Shop from 'Pages/Shop';
import { Switch, Route, HashRouter } from 'react-router-dom';
import { Store } from 'Store';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <General>
        <HashRouter basename='/'>
          <Store>
            <Switch>
              <Route path='/checkout' component={Checkout} />
              <Route path='/' component={Shop} />
            </Switch>
          </Store>
        </HashRouter>
      </General>
    </ThemeProvider>
  );
};

export default App;
