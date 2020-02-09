import React, { Component } from "react";
import SearchResult from "./searchResult";
let testData = [{
    id: 1,
    name: "Aaaaron",
    job: "Ass inspector"
},
{
    id: 2, name: "Bertram",
    job: "Boob inspector"
}, {
    id: 3, name: "Cecil",
    job: "clothing shrinker"
}, {
    id: 4, name: "David",
    job: "Dementor"
}, {
    id: 5, name: "Eric",
    job: "Elasticity tester"
}]
let defaultPlaceholder = true;

class SearchField extends Component {
    constructor() {
        super();
        this.state = {
            initialTerm: "What would you like to find?",
            searchTerm: "",
            stateData: testData
        };
    }
    render() {
        let filteredSearch = this.state.stateData.filter(
            (singleEntry) => {
                return (
                    singleEntry.name.toLowerCase().indexOf(
                        this.state.searchTerm.toLowerCase()) !== -1
                );
            }
        );
        return (
            <div>
                <h3>search:</h3>
                <input type="text"
                    placeholder={this.state.initialTerm}
                    value={this.state.searchTerm}
                    onChange={this.updateSearchTerm.bind(this)} />

                <button onClick={this.updateSearchTerm.bind(this)}>Find it!</button>
                <ul>
                    {filteredSearch.map((singleEntry) => {
                        return (
                            <SearchResult singleEntry={singleEntry} key={singleEntry.id} />
                        )
                    })}
                </ul>
            </div>)
    }
    updateSearchTerm = (event) => {
        { console.log(event.target.value) }
        this.setState({ searchTerm: event.target.value.substr(0, 20) })
    }
}


export default SearchField;