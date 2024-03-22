let namesArray = [] // Array to store names

// Function to add a name to the array and update the displayed list
function addName () {
  const nameInput = document.getElementById('nameInput') // Get the input element
  const name = nameInput.value.trim() // Get the trimmed value of the input
  namesArray.push(name)
  displayNames() 
  nameInput.value = ''
  if (name === '') {
    alert("Please enter a vaild name!"); // countines to ask for name until they enter a vaild response
  }
}

function displayNames(){
  const nameList = document.getElementById('nameList');
  nameList.innerHTML = '' // clear out previous list items(makes new list)

  for (let i = 0; i < namesArray.length; i++ ){
    const name = namesArray[i];

    const li = document.createElement("li");
    li.className = "list-group-item"

    const span = document.createElement('span');
    span.textContent = name

    li.appendChild(span)
    nameList.appendChild(li)
  }

}

document.getElementById('addNameBtn').addEventListener('click', addName) 