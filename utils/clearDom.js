const clearDom = () => {
  document.querySelector('#joke-setup').innerHTML = '';
  document.querySelector('#joke-delivery').innerHTML = '';
  document.querySelector('#joke-button').innerHTML = '';
  document.querySelector('#punchline-button').innerHTML = '';
  document.querySelector('#reset-button').innerHTML = '';
};

export default clearDom;
