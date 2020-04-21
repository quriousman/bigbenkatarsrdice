var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomImageSource1 = "images/dice"+randomNumber1+".png"
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImageSource2 = "images/dice"+randomNumber2+".png"
console.log(randomImageSource1);
console.log(randomImageSource2);

document.querySelector(".img1").setAttribute("src", randomImageSource1);
document.querySelector(".img2").setAttribute("src", randomImageSource2);

if (randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "🍟 Bigben Win 🥓";
}
else if (randomNumber1 < randomNumber2){
  document.querySelector("h1").innerHTML = "🥐 Katarsr Win 🥐";
}
else {
  document.querySelector("h1").innerHTML = "Draw 🍳";
}
