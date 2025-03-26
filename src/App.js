let inputDescription = document.getElementById("description");
let inputPrice = document.getElementById("price");
let inputCategory = document.getElementById("category")
localStorage.setItem("Achat", inputDescription.value, inputPrice.value , inputCategory.value);

export default App.js