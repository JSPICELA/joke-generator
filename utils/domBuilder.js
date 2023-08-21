const domBuilder = () => {
  document.querySelector('#app').innerHTML += '<div id="joke-setup"></div>';
  document.querySelector('#app').innerHTML += '<div id="joke-delivery"></div>';
  document.querySelector('#app').innerHTML += '<div id="joke-button"></div>';
  document.querySelector('#app').innerHTML += '<div id="punchline-button"></div>';
  document.querySelector('#app').innerHTML += '<div id="reset-button"></div>';
};

export default domBuilder;
