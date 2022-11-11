var log = document.getElementById("log") ;
var reg = document.getElementById("reg") ;
var btn = document.getElementById("btn") ;

function register() {
    log.style.left = "-400px" ;   
    reg.style.left = "90px" ;
    btn.style.left = "110px" ;
}

function login() {
    log.style.left = "90px" ;   
    reg.style.left = "490px" ;
    btn.style.left = "0px" ;
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

const finput = document.querySelector(".input");
const butn = document.querySelector(".submit");
butn.disabled = true;

finput.addEventListener("keyup", butt);

function butt() {
    var x = document.querySelector(".input").value ;
    if (x.length < 13) {
        butn.disabled = true;
    }
    else {
        butn.disabled = false;
    }
}
