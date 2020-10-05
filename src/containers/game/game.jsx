import React, {useEffect} from "react";
import {connect} from "react-redux";

import {
    getBlocks,
    updateBlocks,
    winGame,
    updateStep
} from "actions";

import {isWin} from 'service/isWin';
import {Block} from 'components/block'

import './game.scss';

const Game = ({
        blocks,
        getBlocks,
        updateBlocks,
        winGame,
        updateStep,
        step
  }) => {
    useEffect(() => {
        getBlocks();
    }, []);

    useEffect(() => {
        if( step > 4 && !!isWin(blocks) ){
            winGame(isWin(blocks));
        } else if (step >= 9){
            winGame('Draw');
        }
    }, [blocks, step]);

    const currentBlockNumber = (numberI, numberJ, value) => {
        const newBlocksData = [...blocks];
        newBlocksData[numberI][numberJ].value = value;
        updateBlocks(newBlocksData);
    }

    const changeStep = () => {
        updateStep(step + 1);
    };

    return (
        <div className="game-board">
            {blocks && blocks.length && blocks.map((item,i) => <React.Fragment key={i}>
                {item.map((block, j) => <Block
                    key={`${i}${j}`}
                    step={step}
                    changeStep={changeStep}
                    numberI={block.numberI}
                    numberJ={block.numberJ}
                    currentBlockNumber={currentBlockNumber}
                />)}
            </React.Fragment> )}
        </div>
    )
}

const mapStateToProps = (state) => ({
    blocks: state.blocksReducer.blocks,
    step: state.stepReducer.step
});

const mapDispatchToProps = {
    getBlocks,
    updateBlocks,
    winGame,
    updateStep
};

export const GameContainers = connect(
    mapStateToProps,
    mapDispatchToProps
)(Game);