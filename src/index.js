import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Firebase} from './firebase/Config'
import {FirebaseContext} from './Store/FirebasContext'

ReactDOM.render(
<FirebaseContext.Provider value={{Firebase}}>
<App />
</FirebaseContext.Provider>
, document.getElementById('root'));
