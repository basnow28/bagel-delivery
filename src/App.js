import { Router } from 'react-router-dom'
import Routes from './routes'
import history from './services/history'
import GlobalStyles from './styles/global'
import { Provider } from 'react-redux'
import { store } from './store'
import Dashboard from './containers/Dashboard'
import Navbar from './containers/Navbar'


function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Routes />
        <Dashboard/>
        <GlobalStyles />
      </Router>
    </Provider>
  );
}

export default App;
