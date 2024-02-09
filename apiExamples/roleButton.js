export function roleButtonExample() {
  const roleButton = document.getElementById('roleButton');

  roleButton.addEventListener('click', () => {
    alert(`You clicked the role button!`);
  });

  roleButton.addEventListener('keydown', handleKeyPress);
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
