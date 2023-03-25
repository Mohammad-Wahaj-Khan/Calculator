function setNumber(num) {
    var input = document.getElementById("number")
    input.value = input.value + num
}


function ans(){
    var inputValue = document.getElementById("number")
    var output = eval(inputValue.value)
    inputValue.value = output
}

// Get the delete button element by ID
const deleteButton = document.getElementById("deleteButton");

// Add an event listener to the delete button
deleteButton.addEventListener("click", function() {
  // Write a function that removes the item you want to delete
  // For example, if you have a list of items with IDs, you can remove the item with a specific ID
  const itemToRemove = document.getElementById("item1");
  itemToRemove.remove();
});



// function setNumber(num) {
//     var input = document.getElementById("number")
//     // input.value = input.value + num
//     input.value += num

//     // console.log(num, input, "num")
// }


// function ans() {
//     var inputValue = document.getElementById("number")
//     var output = eval(inputValue.value)
//     inputValue.value = output
// }


