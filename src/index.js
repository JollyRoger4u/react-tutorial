import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';
import MyInfo from './tutorial/test1'
import SearchField from './assignment/search'
//import LocalStorageTest from './tutorial/localstoragetest';
import logo from "./logo.svg"
let counter = 0;
class LandingHeader extends Component {

    render() {
        let localData = localStorage.getItem('savedData');
        let noDataMsg = "no data in storage"
        let dataFoundMsg = "Storage found, contains: "
        let actualMsg;
        //let iconOfDoom = "./pub"
        if (!localData) {
            actualMsg = noDataMsg;
        } else {
            actualMsg = dataFoundMsg + " " + localData;
        }
        return (
            <div>
                <SearchField />
                <p>{`${actualMsg}`}</p>
                <h1>Grrr</h1>
                <MyInfo />
                <img src={logo} onClick={logoClick} className="mainLogo" alt=""></img>
                <h1>{counter}</h1>
            </div>
        );
    }
}
function logoClick() {
    counter++;

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