import React from 'react';
import Book from './Book';
import { PropTypes } from 'prop-types';


const Turn = ({ author, books , highlight , onAnswerSelected }) => {

    function getBackgroundColor(selection){
        const mapping = {
            none: '',
            correct : 'green',
            incorrect: 'red'
        }
        return mapping[selection];
    }
    return (
        <div className="row turn" style={{ backgroundColor: getBackgroundColor(highlight) }}>
            <div className="col-4 offset-1" >
                <img src={author.imageUrl} className="authorimage" alt={author.name} />
            </div>
            <div className="col-6">
                {books.map(title => <Book key={title} title={title} onAnswerSelected={onAnswerSelected}/>)}
            </div>

        </div>
    )
}

Turn.propType = {
    author: PropTypes.shape({
         name: PropTypes.string.isRequired,
         imageUrl: PropTypes.string.isRequired,
         books: PropTypes.arrayOf(PropTypes.string).isRequired
    }),
    books: PropTypes.arrayOf(PropTypes.string).isRequired,
    onAnswerSelected : PropTypes.func.isRequired,
    highlight: PropTypes.string.isRequired
}

export default Turn;