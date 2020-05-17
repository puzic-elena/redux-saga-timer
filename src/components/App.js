import React from 'react';
import {connect} from 'react-redux';

const App = ({active, count, onReset, onStart, onPause}) => (

        <div>
            <header>Timer</header>
            <div>
                <span>{count}</span>
                <div>
                    <br/>
                    <button onClick={onStart} disabled={active}>Start</button>
                    <button onClick={onPause} disabled={!active}>Pause</button>
                    <button onClick={onReset}>Reset</button>
                </div>
            </div>
        </div>
);

const mapStateToProps = (state) => {
    return {
        active: state.active,
        reset: state.reset,
        count: state.count
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onStart: () => dispatch({type: 'START'}),
        onPause: () => dispatch({type: 'PAUSE'}),
        onReset: () => dispatch({type: 'RESET'})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);