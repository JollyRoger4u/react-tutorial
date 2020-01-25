import React from 'react'

function MyInfo() {

    const firstName = "Roger";
    const lastName = "Pettersson";
    const date = new Date();
    const time = date.getHours();
    let greeting;
    if (time < 12) {
        greeting = "good morning"
    } else if (time > 12 && time < 18) {
        greeting = "good day"
    } else {
        greeting = "good evening"
    }
    return (
        <div>
            <p>{`${greeting}`}</p>
            <h1>Hellu, me nam iz {`${firstName} ${lastName}`}</h1>
            <p>I am currently learning react</p><ol>
                <p>I would like to visit</p>
                <li>China</li>
                <li>Japan</li>
                <li>the US of A</li>
            </ol>
        </div>
    )
}

export default MyInfo;
