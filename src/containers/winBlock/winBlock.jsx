import React from "react";
import {connect} from "react-redux";

import {
    updateStep,
    winGame
} from "../../actions";

import {Button} from 'components/button';

import './winBlock.scss';

const WinBlock = ({
    user,
    updateStep,
    winGame
}) => {
    const restart = () => {
        winGame(false);
        updateStep(0);
    }

    return (
        <div className="win-holder">
            <h1>{user}</h1>
            <Button text='restart' func={restart} />
        </div>
    )
}

const mapDispatchToProps = {
    winGame,
    updateStep
};

export const WinBlockContainers = connect(
    null,
    mapDispatchToProps
)(WinBlock);