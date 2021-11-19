// constants
const container =  document.querySelector("#container");
const colorChoices = document.querySelector('.colorChoices');
const reset = document.querySelector("#reset");
const rows = document.querySelector("#rows");
const cols = document.querySelector("#cols");


// variables
let row = document.createElement("div");
let elem = document.createElement("div");
let colorChoiceBox = document.createElement("div");
let selectedColor = 'tomato';


// adding classes to elements
row.classList.add('row');
elem.classList.add('elem');
colorChoiceBox.classList.add("colorChoiceBox");

// appending clickable elemen
for(let i=0; i < 16; i++){
    row.append(elem.cloneNode(true))
}

// appending clickable elemen
for(let i=0; i < 16; i++){
    container.append(row.cloneNode(true))
}

// elem logic to change or remove colors
let elems = document.querySelectorAll('.elem');

elems.forEach(elem => {
    elem.addEventListener('click',()=>{
        if(selectedColor == undefined){
            alert("Please choose a color before clicking a box")
        }else{
            if(elem.classList[1] == selectedColor){
                elem.classList.remove(selectedColor)
            }else{
                elem.classList.remove(elem.classList[1]);
                elem.classList.add(selectedColor);
            }
        }
        

       
    })
    
});

// appending color choice boxes
 for (let i=0; i<3; i++){
     colorChoices.append(colorChoiceBox.cloneNode(true));
 }

// color choice box logic to choose which color to apply to clicked elem 
let colorChoiceBoxes = document.querySelectorAll('.colorChoiceBox');

colorChoiceBoxes[0].classList.add('tomato');
colorChoiceBoxes[0].classList.add('active');
colorChoiceBoxes[1].classList.add('darkGrey');
colorChoiceBoxes[2].classList.add('teal');

function removeActive(){
    colorChoiceBoxes.forEach(colorChoiceBox => {
        colorChoiceBox.classList.remove("active");
    })
}

colorChoiceBoxes.forEach(colorChoiceBox => {
    colorChoiceBox.addEventListener("click",()=>{
        selectedColor = colorChoiceBox.classList[1];
        removeActive();
        colorChoiceBox.classList.add("active");
    })
})



// reset function to remove all colors from all elems
reset.addEventListener("click",()=>{
    elems.forEach(elem => {
        elem.classList.remove(elem.classList[1])
    })
})

// tutorial
let howToUse = document.querySelector("#howToUse");

howToUse.addEventListener("click",()=>{
    alert("How to use \n1. Click on a colored box to choose a color \n2. With the color selected, click on one of the boxes in the grid to add or remove color \n3. Hit the reset button to start from scratch \n5. Have fun!  ");
})


