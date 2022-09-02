import removeAllChild from './removed.js';

const scoreDisplay = (data) => {
  const laderList = document.getElementsByClassName('laderList')[0];
  removeAllChild(laderList);
  if (data.length > 0) {
    data.forEach((score) => {
      const scoreList = document.createElement('li');
      scoreList.className = 'scoreList';
      scoreList.innerHTML = `${score.user}: ${score.score}`;
      laderList.appendChild(scoreList);
    });
  }
};
export default scoreDisplay;