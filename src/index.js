import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';
import MyInfo from './tutorial/test1'
import SearchField from './assignment/search'
import LocalStorageTest from './tutorial/localstoragetest';

class LandingHeader extends Component {

    render() {
        let localData = localStorage.getItem('savedData');
        let noDataMsg = "no data in storage"
        let dataFoundMsg = "Storage found, contains: "
        let actualMsg;
        if (!localData) {
            actualMsg = noDataMsg;
        } else {
            actualMsg = dataFoundMsg + " " + localData;
        }
        return (
            <div>
                <p>{`${actualMsg}`}</p>
                <h1>Grrr</h1>
                <MyInfo />
            </div>
        );
    }
}

ReactDOM.render(
    <LandingHeader />, document.getElementById("root"));

localStorage.setItem("savedData", "donkeyballs!")


//ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//<MyInfo />
//<SearchField />
serviceWorker.register();