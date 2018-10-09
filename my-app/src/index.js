import React from 'react';
import ReactDOM from 'react-dom';
import './css/common.scss';
import './css/normalize.scss';
import Body from './js/components/body'

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Body/>
      </div>
    )
  }
}

ReactDOM.render(
  <Main />, 
  document.getElementById('app')
);