export function roleButtonExample() {
  const roleButton = document.getElementById('roleButton');

  roleButton.addEventListener('click', () => {
    alert(`You clicked the role button!`);
  });

  roleButton.addEventListener('keydown', handleKeyPress);
}

function handleKeyPress(event) {
  if(event.key === 'Enter') {
    event.preventDefault();
    alert('Win for a11y! The return key submits!')
  }
  else if(event.key === ' ') {
    event.preventDefault();
    alert('Win for a11y! The spacebar submits!')
  }
}
