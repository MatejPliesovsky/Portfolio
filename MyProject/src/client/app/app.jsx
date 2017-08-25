import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
import { browserHistory, Router, Route, IndexRoute } from 'react-router';
import Index from './index.jsx';
//import Welcome from './Welcome.jsx';

const target = document.getElementById('app');
const node = <Router history={browserHistory}>
    <Route path="/" component={Main}>
        <Route path="index" component={index}/>
    </Route>
</Router>;

ReactDOM.render(node, target);
