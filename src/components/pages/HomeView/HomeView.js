import React, {Component} from 'react';

class HomeView extends Component {
    render() {
        return (
            <>
                <h2>Welcome to the research!</h2>
                <h2>say something</h2>
                <ul>
                    <li><a href="/three-js">Three.js</a>
                    </li>

                    <li><a href="/babylon-js">Babylon.js</a>
                    </li>
                </ul>
            </>
        );
    }
}

export default HomeView;