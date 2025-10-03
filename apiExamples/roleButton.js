export function roleButtonExample() {
  const roleButton = document.getElementById("roleButton");
  const roleButtonOndark = document.getElementById("roleButton-ondark");

  roleButton.addEventListener("click", () => {
    alert("You clicked the role button!");
  });

  roleButtonOndark.addEventListener("click", () => {
    alert("You clicked the role button!");
  });
}
