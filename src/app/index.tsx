import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as Sentry from '@sentry/browser';

import './styles/style.css';
import {AppComponent} from '@components';
import CONFIG from '@config';

if (CONFIG.sentryDSN) {
  Sentry.init({dsn: CONFIG.sentryDSN});
}

ReactDOM.render(
  <AppComponent/>,
  document.getElementById("root")
);
