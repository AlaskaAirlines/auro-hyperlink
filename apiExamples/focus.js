export function focusExample() {
  const focusExample = document.getElementById("focusExample");
  const focusExampleBtn = document.getElementById("focusExampleBtn");

  focusExampleBtn.addEventListener('click', () => {
    focusExample.focus();
  });
}
