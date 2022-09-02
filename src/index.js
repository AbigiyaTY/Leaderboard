import './style.css';
import scoreDisplay from './modules/scoreDisplay.js';
import score from './modules/score.js';
import newScoure from './modules/newScoure.js';

const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/S3tjwkpNca6mnDXnIB4B/scores';

const Submit = document.getElementById('Submit');
const refresh = document.getElementById('refresh');

refresh.addEventListener('click', async () => {
  const recentScores = await score(url);

  scoreDisplay(recentScores);
});

Submit.addEventListener('click', async () => {
  const nameEntered = document.getElementById('name');
  const scoreEntered = document.getElementById('scoreInput');

  if (nameEntered.value !== '' && scoreEntered.value !== '') {
    newScoure(url, nameEntered.value, scoreEntered.value);
    nameEntered.value = '';
    scoreEntered.value = '';
  }
});