let heading = document.getElementById("mainHeading"); 
let paragraph = document.getElementById("paragraph"); let input = 
document.getElementById("userInput"); 
let fontSize = 16; 
// Change heading text (onclick using addEventListener) 
document.getElementById("changeTextBtn").addEventListener("click", function () { 
if (input.value !== "") { heading.innerHTML = input.value; 
} 
}); 
document.getElementById("bgColorBtn").addEventListener("click", function () { 
document.body.style.backgroundColor = 
"#" + Math.floor(Math.random() * 16777215).toString(16); 
}); 
document.getElementById("fontSizeBtn").addEventListener("click", function () { 
fontSize += 2; 
paragraph.style.fontSize = fontSize + "px"; 
});