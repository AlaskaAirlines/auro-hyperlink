function sayHello() {
  alert('Hello, you clicked the button!');
}

function handleKeyPress(event) {
  if(event.keyCode === 13) {
    event.preventDefault();
    alert('Win for a11y! The return key submits!')
  }
  else if(event.keyCode === 32) {
    event.preventDefault();
    alert('Win for a11y! The spacebar submits!')
  }
}
