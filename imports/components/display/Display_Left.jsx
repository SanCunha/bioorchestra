import React from 'react'
import {MContext} from '../Provider.jsx';
import {Tasks} from '../../api/csv.js'

import './styles.css'


export default class Display_Left extends React.Component {
    constructor() {
        super();
        this.state = {
            nameFile: undefined,
            urlfile: undefined,
            pathfile: undefined
        };
        this.updateData = this.updateData.bind(this);
    }

    handleChange = event => {
        event.defaultPrevented
        this.setState({
            urlfile: event.target.value
        });
    };
    sleep(milliseconds) {
        const date = Date.now();
        var currentDate = null;
        do {
          currentDate = Date.now();
        } while (currentDate - date < milliseconds);
      }
    createJSON = async () => {
        console.log("on loading")
        document.getElementById("loading").style.display = "flex";
        console.log(this.state)
        const urlfile  = this.state;
        const index = this.state.urlfile.toString().lastIndexOf('/')
        this.nameFile = this.state.urlfile.toString().slice((index + 1))
        const JSON = {
            name: this.nameFile,
            path: this.state.urlfile
        }
        setTimeout(() => {document.getElementById("results").style.display = "flex",
                          document.getElementById("loading").style.display = "none"; }, 2000)
        this.updateData(JSON)
    };

    updateData(data) {
        console.log(data);
        Tasks.insert({
            data,
            createdAt: new Date()
        })
    }
    render (){
        return (
            <div className="main rounded">
                <div className="upload">
                    <div className="top container-fluid">
                        <div className="row justify-content-center">
                            <h5>UPLOAD FILES</h5>
                        </div>
                        <div className="row">
                            <div className="url">
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1"/>
                                    <label className="form-check-label" htmlFor="exampleRadios1">
                                        URL
                                    </label>
                                </div>
                                <div>
                                    <input type="text" onChange={this.handleChange} className="form-control" placeholder="URL"/>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="url">
                                <div className="form-check mt-4">
                                    <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2"/>
                                    <label className="form-check-label" htmlFor="exampleRadios2">
                                        PATH
                                    </label>
                                </div>
                                <div>
                                    <input type="text" className="form-control" placeholder="REMOTE ACESS"/>
                                </div>
                                <button className="btn btn-block btn-dark w-25 mt-1">TERMINAL</button>
                            </div>
                        </div>
                        <div className="row">
                            <button className="btn btn-block btn-info mt-3" onClick={this.createJSON}>UPLOAD</button>
                        </div>
                        <div>
                            <hr></hr>
                        </div>
                    </div>
                </div>
                <div className="results">
                    <div className="top container-fluid">
                        <div className="row justify-content-center">
                            <h5 align="center">RESULTS</h5>
                        </div>
                        <div className="row hidden justify-content-center" id="loading">
                            <div className="spinner-border" role="status">
                                <span className="sr-only">Loading...</span>
                            </div>
                        </div>
                        <div className="row hidden align-items-start" id="results">
                            <p>name: {this.nameFile}<br/></p>
                            <p>path: {this.state.urlfile}</p>
                        </div>
                    </div>
                </div>
            </div>
        );     
    }
}