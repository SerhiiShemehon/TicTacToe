import React from 'react';
import {connect} from "react-redux";

import {GameContainers} from "containers/game";
import {WinBlockContainers} from "containers/winBlock"

import './app.scss';

function App({
    userWin
}) {

    return (
        <div className="app">
            <h1 className="title-block">Tic Tac Toe</h1>
            { !!userWin
                ? <WinBlockContainers user={userWin} />
                : <GameContainers />
            }
        </div>
    );
}

const mapStateToProps = (state) => ({
    userWin: state.winGameReducer.userWin
});

export const AppContainers = connect(
    mapStateToProps
)(App);

