var x = document.getElementById("log") ;
var y = document.getElementById("reg") ;
var z = document.getElementById("btn") ;

function register() {
    x.style.left = "-400px" ;   
    y.style.left = "90px" ;
    z.style.left = "110px" ;
}

function login() {
    x.style.left = "90px" ;   
    y.style.left = "490px" ;
    z.style.left = "0px" ;
}

function check(input) {
    if (input.value != document.getElementById('pass').value) {
        input.setCustomValidity('Passwords must match');
    } else {
        input.setCustomValidity('');
    }
}

var modal = document.getElementById("mod");
var btn = document.getElementById("logi");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";
}
  
span.onclick = function() {
    modal.style.display = "none";
  }
  
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

const formInput = document.querySelector(".input");
const formInpt = document.querySelector("#pass");
const formInut = document.querySelector("#cpass");
const formButton = document.querySelector(".submit");
formButton.disabled = true;

formInput.addEventListener("keyup", buttonState);

function buttonState() {
    if (document.querySelector(".input").value === "") {
        formButton.disabled = true;
    }
    else {
        formButton.disabled = false;
    }
}