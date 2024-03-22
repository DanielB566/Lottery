let userInputArray = [];

function storeinputs() { // takes the user input and adds it the userInputArray using push. Then goes into html and changes list with the value of the index number of the array.
  let addnames = prompt("Enter a name to add to the list:");
  userInputArray.push(addnames);
  document.getElementById("input1").textContent = userInputArray[0];
  document.getElementById("input2").textContent = userInputArray[1];
  while (addnames === null || addnames === "") {
    addnames = prompt("Please enter a vaild name:"); // countines to ask for name until they enter a vaild response
    break;
  }
}
