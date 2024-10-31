import React from "react";

const Card = ({ card, handleSelected, rotated, disabled }) => {

    const handleClick = () => {
        if (!disabled) {
            handleSelected(card);
        }
    };

    return (
        <div className=' w-[170px] card'>
            <div className={rotated ? 'rotated' : ""} >
                <img className={`front size-full`} src={card.path} />
                <img
                    className='back'
                    onClick={handleClick}
                    src='/img/kapak1.jpg'
                />
            </div>
        </div>
    );
};

export default Card;