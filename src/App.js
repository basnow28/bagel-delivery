import { Router } from 'react-router-dom'
import Routes from './routes'
import history from './services/history'
import GlobalStyles from './styles/global'
import { Provider } from 'react-redux'
import { store } from './store'

import Text from './containers/WhatWeDo/Text.js'



function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Routes />
        <GlobalStyles />
      </Router>
    </Provider>
  );
}

export default App;
