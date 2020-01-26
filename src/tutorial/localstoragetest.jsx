import React, { Component } from 'react';


class LocalStorageTest extends Component {

    componentWillMount() {
        const storageTest = localStorage.getItem('test')
        console.log(storageTest);
        if (storageTest) {
            return (
                <div className="mainPageHeader">
                    <h1>Guide to the Apocalypse</h1>
                    <p>Written by Roger Pettersson</p>
                </div>
            );

        } else
            localStorage.setItem('test', 'localstorage is working as intended')
        return (<p>localstorage set?</p>)
    }


}
export default LocalStorageTest;