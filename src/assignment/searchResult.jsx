import React from 'react';

class SearchResult extends React.Component {
    render() {
        return (

            <li>
                {this.props.singleEntry.name}
                <br />
                {this.props.singleEntry.job}
                <p>git test</p>
            </li>

        )
    }
}

export default SearchResult;