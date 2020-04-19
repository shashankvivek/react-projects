import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AuthorQuiz from './AuthorQuiz';
import * as serviceWorker from './serviceWorker';
import * as _ from 'underscore';

const authors = [
  {
    name: 'Mark',
    imageUrl: '1.jpg',
    books : ['Book1', 'Book2']
  },
  {
    name: 'Sheela',
    imageUrl: '1.jpg',
    books : ['Book11', 'Book12']
  },
  {
    name: 'Jason',
    imageUrl: '1.jpg',
    books : ['Book21', 'Book22']
  }
]

function getData(authors){
  const allBooks = authors.reduce(function(p,c){
    return p.concat(c.books);
  },[]);
  const four = _.shuffle(allBooks).slice(0,4);
  const answer = _.sample(four);
  return {
    author : authors.find(a => a.books.some(title=>title === answer)),
    books : four
  }
}


const state = {
  turnData: getData(authors),
  highlight: 'none'
}

function onAnswerSelected(answer){
  console.log(answer)
  const isCorrect = state.turnData.author.books.some(title=> title === answer);
  state.highlight =  isCorrect ? 'correct' : 'incorrect';
  render();
}

function render(){
  ReactDOM.render(
    <React.StrictMode>
      <AuthorQuiz {...state} onAnswerSelected={onAnswerSelected}/>
    </React.StrictMode>,
    document.getElementById('root')
  );
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
render();
serviceWorker.unregister();
