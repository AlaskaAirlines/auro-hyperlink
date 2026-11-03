export function roleButtonExample() {
  const roleButton = document.getElementById("roleButton");
  const roleButtonOndark = document.getElementById("roleButton-ondark");

  const handleAction = () => {
    alert("You clicked the role button!");
  };

  // Enter and Space don't fire `click` on the link, so handle those keys too.
  const handleKeydown = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleAction();
    }
  };

  for (const button of [roleButton, roleButtonOndark]) {
    button.addEventListener("click", handleAction);
    button.addEventListener("keydown", handleKeydown);
  }
}
