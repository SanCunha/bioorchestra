import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';

import {Tasks} from '../../api/csv.js'

import Papa from 'papaparse'

export default class Upload extends React.Component {   
    render () {
        return (
            <div className="container">
                <form encType="multipart/form-data" >
                    <fieldset>
                        <legend> UPLOAD FILES </legend>
                        <div className="input-group mb-3">
                            <div className="custom-file">
                                
                            </div>
                        </div>
                        <div>
                            <button onClick={this.importCSV} className="btn btn-block btn-success"> UPLOAD </button>                     
                        </div>
                    </fieldset>
                </form>
            </div>
        );
    }
}
