const menuBtn = document.querySelector(".menu-btn");

const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});

const themeBtn = document.getElementById("theme-toggle");

themeBtn.onclick = () => {

    document.body.classList.toggle("light-mode");

};

const texts = [

"Data Analyst",

"Freelancer",

"Python Developer"

];

let count = 0;

let index = 0;

let currentText = "";

let letter = "";

(function type(){

if(count === texts.length){

count = 0;

}

currentText = texts[count];

letter = currentText.slice(0, ++index);

document.querySelector(".typing").textContent = letter;

if(letter.length === currentText.length){

count++;

index = 0;

setTimeout(type,1000);

}

else{

setTimeout(type,100);

}

})();

let valueDisplays = document.querySelectorAll(".num");

valueDisplays.forEach((valueDisplay) => {

    let startValue = 0;

    let endValue = parseInt(valueDisplay.getAttribute("data-val"));

    let duration = 2000;

    let counter = setInterval(function(){

        startValue++;

        valueDisplay.textContent = startValue;

        if(startValue == endValue){

            clearInterval(counter);

        }

    }, duration / endValue);

});