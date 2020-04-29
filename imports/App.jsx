import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';

import {Tasks} from './api/csv.js'

//import React library
import './global.css'
import Header from './components/header/Header.jsx';
import Display_Left from './components/display/Display_Left.jsx';
import Display from './components/display/Display.jsx';
import Buttons from './components/buttons/Buttons.jsx';
import MyProvider from './components/Provider.jsx';

class App extends React.Component {

    render(){
        return (
            <div className="container-fluid">
                <div className="row rounded">
                    <div className="col-12"><Header/></div>
                </div>
                <div className="row display mt-1 rounded">
                    <div className="col-12"><Display_Left/></div>
                </div>
                <div className="row mt-1 rounded">
                    <div className="col-12"><Buttons/></div>
                </div>
            </div> 
        )
    }   
}
export default withTracker(() => {
    return {
      csv: Tasks.find({}).fetch(),
    };
  })(App);
