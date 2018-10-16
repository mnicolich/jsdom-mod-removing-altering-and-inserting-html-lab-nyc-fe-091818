/* Enter the code to remove the main node element under this comment */
document.querySelector('div p').remove()

/* Create your new element here and assign it to newHeader */
const newHeader = null;
let pTag = document.createElement('p')
pTag.innnerText = "Melissa is the champion!"
let thirdDiv = document.querySelector("#victory")
thirdDiv.appendChild(pTag)
