
// typing animation
const text = ["it's me Ankit" , "i am frontend developer" , "designer"];
let count = 0;
let index = 0;
let currentText ="";
let letter ="";
(function typing(){
if(count === text.length){
    count = 0;
}
currentText = text[count];
letter= currentText.slice(0,++index);
document.querySelector(".typing").textContent=letter;
if(letter.length === currentText.length){
    count++;
    index=0;
}
setTimeout(typing,250)

}())
// typing animatin function end
