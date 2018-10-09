import React from 'react';
import { Provider } from 'react-redux';
import store from './store/index'
import App from './components/App'

export default class Body extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    )
  }
}