const stoplight = document.getElementById('stoplight');
const walklight = document.getElementById('walklight');
const btn = document.getElementById('btn');

const lightsToggle = () => {
  stoplight.classList.toggle('stop-on');
  stoplight.classList.toggle('stop-off');
  walklight.classList.toggle('walk-on');
  walklight.classList.toggle('walk-off');
};

// stage 1
// const lightsHandler = () => {
//   lightsToggle();
//   setTimeout(() => {
//     lightsToggle();
//   }, '5000');
// };

// stage 2
const countdown = (seconds, message) => {
  let timer = setInterval(() => {
    if (seconds <= 0) {
      clearInterval(timer);
      document.getElementById('countdown').innerHTML = message;
    } else {
      document.getElementById('countdown').innerHTML =
        seconds + ' seconds remaining';
    }
    seconds -= 1;
  }, 1000);
};

const lightsHandler = (seconds) => {
  countdown(5, 'safe to walk');
  const lightsInterval = setInterval(() => {
    lightsToggle();
    if (seconds <= 0) {
      clearInterval(lightsInterval);
    } else {
      seconds -= 1;
    }
  }, '6000');
};

btn.addEventListener('click', lightsHandler(5));
