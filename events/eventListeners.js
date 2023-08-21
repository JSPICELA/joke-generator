import getJoke from '../api/jokeAPI';
import { createJokeButton, getAnotherJokeButton, punchLineButton } from '../components/buttons';
import clearDom from '../utils/clearDom';
import domBuilder from '../utils/domBuilder';

const events = () => {
  getJoke().then((joke) => {
    document.querySelector('#joke-button').addEventListener('click', () => {
      document.querySelector('#joke-setup').innerHTML += `${joke.setup}`;
      document.querySelector('#joke-button').innerHTML = '';
      punchLineButton();
    });
    document.querySelector('#punchline-button').addEventListener('click', () => {
      document.querySelector('#joke-delivery').innerHTML = `${joke.delivery}`;
      document.querySelector('#punchline-button').innerHTML = '';
      getAnotherJokeButton();
      document.querySelector('#new-joke-button').addEventListener('click', () => {
        clearDom();
        domBuilder();
        createJokeButton();
        events();
      });
    });
  });
};

export default events;
