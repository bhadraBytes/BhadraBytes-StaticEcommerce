// Activating the hamburger list when clicked
const bar = document.getElementById('bar');
const nav = document.getElementById('navlist');
const close = document.getElementById('close');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('activate');
        formBox.style.display = 'none';
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('activate');
        // formBox.style.display = 'flex';  
        formBox.style.display = 'flex';
    })
}

// making Search bar work when use click the search button 

const closeBtn = document.querySelector(".searchclose");
const searchBtn = document.querySelector("#sBtn");
const inputBox = document.querySelector("#sBar");
const formBox = document.querySelector(".searchBar");
const logo = document.querySelector(".main-logo");
const cart = document.querySelector(".mobile-cart");
const hamburger = document.querySelector("#bar");

searchBtn.addEventListener("click", function (e) {
    logo.style.display = 'none';
    cart.style.display = 'none';
    hamburger.style.display = 'none';
    let input = inputBox.value;
    if (input == "") {
        e.preventDefault();
    }
    else {
        inputBox.submit();
    }
    inputBox.style.display = "flex";
    closeBtn.style.display = "flex";
    formBox.style.backgroundColor = "white";
    formBox.classList.add("full");
});

closeBtn.addEventListener("click", function () {
    formBox.classList.remove("full");
    formBox.style.backgroundColor = "transparent";
    inputBox.style.display = "none";
    closeBtn.style.display = "none";
    logo.style.display = 'flex';
    cart.style.display = 'initial';
    hamburger.style.display = 'flex';
});


// LoginClose Activation here 

let loginClose = document.getElementById('closeL')
let loginHeader = document.getElementsByClassName('login_header')

if (loginClose) {
    loginClose.addEventListener('click', () => {
        for (let i = 0; i < loginHeader.length; i++) {
            loginHeader[i].style.display = 'none';
        }
    });
}