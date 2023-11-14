var cardimage=document.getElementById("images");
console.log(cardimage);
var cardheading=document.getElementById("heading");
console.log(cardheading);
var cardparas=document.getElementById("para");
console.log(cardparas);
var cardbuttons=document.getElementById("buttons");
console.log(cardbuttons);

cardbuttons.addEventListener("click",function(){
    cardheading.innerText="panda";
    cardheading.style.color="purple";
    cardparas.innerText="It is a bear species";
    cardparas.style.color="purple";
    cardimage.src="images/panda.jpg";
})


cardbuttons.addEventListener("mousemove",function(){
    cardheading.innerHTML="Rose";
    cardheading.style.color="red";
    cardparas.innerHTML="It is a bear species";
    cardparas.style.color="red";
    cardimage.src="images/rose.jpg";
})