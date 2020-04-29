import React from 'react';

import {MContext} from '../Provider.jsx';

import './styles.css'
import Upload from '../display/Upload.jsx';


export default class Buttons extends React.Component {

    render (){
        return (
            <div className="container mt-2 mb-2">
                <div className="row">
                    <div className="col-4">
                        <button className="btn btn-block btn-success"> LOAD DATA</button>
                    </div>
                    <div className="col-4">
                    <button className="btn btn-block btn-success"> LOAD MODEL</button>
                    </div>
                    <div className="col-4">
                    <button className="btn btn-block btn-success"> PLAY </button>
                    </div>
                </div>
            </div>
        );
    }
}