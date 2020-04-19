import React from 'react';


const Book = ({ title, onAnswerSelected }) => {
    return (
        <div onClick={()=> onAnswerSelected(title)} className="answer">
            <h4>{title}</h4>
        </div>

    )
}

export default Book;