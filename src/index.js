import React from 'react';
import { render } from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import rootReducer from './reducers';
import App from './containers/app';

const store = createStore(rootReducer);

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.querySelector('#root')
);

reportWebVitals();