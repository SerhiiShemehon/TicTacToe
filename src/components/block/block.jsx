import React, {useState} from "react";

import './block.scss';

export const Block = ({
                          step,
                          changeStep,
                          numberI,
                          numberJ,
                          currentBlockNumber
}) => {
    const [checked, setChecked] = useState(false);
    const [user, setChangeUser] = useState('user_x');

    const blockClick = () => {
        if(!checked){
            let value = 0;
            if(step % 2 === 0){
                setChangeUser('user_x');
                value = 1;
            } else {
                setChangeUser('user_o');
                value = 10;
            }
            setChecked(true);
            changeStep();
            currentBlockNumber(numberI, numberJ, value);
        }
    }

    let blockUser = checked ? user : '';

    return (
        <div
            className={`block-item ${blockUser}`}
            onClick={blockClick}
        />
    )
}