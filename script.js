document.addEventListener('DOMContentLoaded', () => {
  let expression = '';
  const screen = document.getElementById('screen');
  const audio = document.getElementById('audio');

  document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', () => {
      playSound();

      const value = button.getAttribute('data-value');

      if (value === '=') {
        calculate();
      } else if (value === 'C') {
        clearScreen();
      } else {
        expression += value;
        screen.value = expression;
      }
    });
  });

  function playSound() {
    audio.currentTime = 0;
    audio.play();
  }

  function calculate() {
    try {
      const result = eval(expression);
      screen.value = result;
      expression = result.toString();
    } catch (error) {
      screen.value = 'holla world! kkkkk';
      expression = '';
    }
  }

  function clearScreen() {
    expression = '';
    screen.value = '';
  }
});