import { Meteor } from 'meteor/meteor';
//import Meteor library

import React from 'react';
//import React library

import { render } from 'react-dom';

import App from "../imports/App.jsx";


Meteor.startup(() => {
  render(<App />, document.getElementById('app'));
});
