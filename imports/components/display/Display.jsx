import React from 'react'
import {MContext} from '../Provider.jsx';

import './styles.css'


export default class Display extends React.Component {
    render (){
        return (
            <div className="container-fluid border border-dark upload rounded">
                <div className="row header">
                    <h5 align="center">RESULTS</h5>
                </div>
            </div>   
        )     
    }
}