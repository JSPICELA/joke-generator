// USE WITH FIREBASE AUTH
// import ViewDirectorBasedOnUserAuthStatus from '../utils/viewDirector';
import 'bootstrap'; // import bootstrap elements and js
import '../styles/main.scss';
import events from '../events/eventListeners';
import domBuilder from '../utils/domBuilder';
import { createJokeButton } from '../components/buttons';

const init = () => {
  domBuilder();
  createJokeButton();
  events();
};

init();
