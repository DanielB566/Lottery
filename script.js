let namesArray = [] // Array to store names

// Function to add a name to the array and update the displayed list
function addName () {
  const nameInput = document.getElementById('nameInput') // Get the input element
  const name = nameInput.value.trim() // Get the trimmed value of the input
  if (name !== "") {
    namesArray.push(name) // Adds names to the array
    displayNames() 
    nameInput.value = '' 
  } else {
    alert('Please enter a valid name.') 
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

function pickRandomName(){
  if(namesArray.length === 0 ) {
    alert("Theirs no more names in the list!")
  }
  const randomNameDiv = document.getElementById('randomName')
  randomNameDiv.textContent = ''
  randNum = Math.floor(Math.random() * namesArray.length) // generates random number for the to be used in the index of the array
  const randomName = namesArray[randNum]
  randomNameDiv.textContent = randomName // displays the name onto the web page.
  namesArray.splice(randNum, 1)
  displayNames()
  
 

  confetti()
}

function resetBtn(){
  const randomNameDiv = document.getElementById('randomName')
  while(namesArray.length > 0){
    namesArray.pop()
    displayNames()
    randomNameDiv.textContent = ''
  }
  

}
document.getElementById('resetBtn').addEventListener('click', resetBtn)
document.getElementById('addNameBtn').addEventListener('click', addName) // takes the class in HTML "addNameBtn" and adds onclick with addName() func 
document.getElementById('pickRandomBtn').addEventListener('click', pickRandomName)  
document.addEventListener('keypress', function(e){
  if(e.key === "Enter")
    addName()
})

