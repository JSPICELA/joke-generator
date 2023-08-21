const createJokeButton = () => {
  let domString = '';

  domString += '<button type="button" class="btn btn-primary" id="joke-button" >Get a Joke</button>';
  document.querySelector('#joke-button').innerHTML += domString;
};

const punchLineButton = () => {
  let domString = '';

  domString += '<button type="button" class="btn btn-primary" id="punchline-button" >Get the punchline</button>';
  document.querySelector('#punchline-button').innerHTML += domString;
};

const getAnotherJokeButton = () => {
  document.querySelector('#reset-button').innerHTML += '<button type="button" class="btn btn-primary" id="new-joke-button" >Get Another Joke</button>';
};

export { punchLineButton, createJokeButton, getAnotherJokeButton };
