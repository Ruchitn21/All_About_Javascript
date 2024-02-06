// 4 Pillars of DOM

// 1 : selecting an element
const a = document.querySelector("h1");

// alternate options to select 

// const a = document.getElementsByTagName("h1")
// const a = document.getElementsByClassName();

console.log(a);

// 2 : Changing HTML
a.innerHTML = "Changed the Name";

// 3 : Changing CSS
a.style.color = "red";
a.style.backgroundColor = "black";

// 4 : Event Listener
a.addEventListener("click",function(){
    console.log("hey");
    a.innerHTML = "New Heading Changed on Click"
    a.style.color= "yellow";
    a.style.backgroundColor = "black";
})

// ==================================================================================

// Bulb On Off Feature

const bulb = document.querySelector("#bulb")
const button = document.querySelector("button")

const options = ["yellow", "white"]

counter = 0

button.addEventListener("click",function(){
    bulb.style.backgroundColor = options[counter%2]
    counter++;
})

// ===================================================================================

// Selecting multiple elements

const h = document.querySelectorAll("h1")
console.log(h)  // returns the array of elements with h1 tag

h.forEach(function(e){
    e.style.color = "red"
})

// textContent
// .innerHTML selects the entire elememt selected
// .textContent selects only the text data from the element

a.innerHTML = "<h1>Hello World</h1>"
a.textContent = "Hello" // here h1 property will get lost