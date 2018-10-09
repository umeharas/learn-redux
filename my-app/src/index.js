import React from 'react';
import ReactDOM from 'react-dom';
import './css/common.scss';
import './css/normalize.scss';
import Body from './js/index'

// class Main extends React.Component {
//   render() {
//     return (
//       <div>
//         <Body/>
//       </div>
//     )
//   }
// }

ReactDOM.render(
  <Body />, 
  document.getElementById('app')
);