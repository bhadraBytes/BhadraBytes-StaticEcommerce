let loginBtn = document.querySelector(".login");
let signupBtn = document.querySelector(".signup");
let loginOptions = document.querySelector(".login-box");
let signupOptions = document.querySelector(".signup-box");
let loginBtnRegister = document.querySelector("#login-btn-login");
let signupBtnRegister = document.querySelector("#signup-btn-register");
let pageContainer = document.querySelector(".login-container");
let forgotBtn = document.querySelector(".forgot-btn");

loginBtn.addEventListener("click", () => {
  loginBtn.classList.remove("active");
  signupBtn.classList.add("active");
  signupOptions.style.display = "none";
  loginOptions.style.display = "flex";
  signupBtnRegister.style.display = "none";
  loginBtnRegister.style.display = "flex";
  pageContainer.style.height = "350px";
  forgotBtn.style.display = "flex"
});

signupBtn.addEventListener("click", () => {
  signupBtn.classList.remove("active");
  loginBtn.classList.add("active");
  loginOptions.style.display = "none";
  signupOptions.style.display = "flex";
  loginBtnRegister.style.display = "none";
  signupBtnRegister.style.display = "flex";
  pageContainer.style.height = "400px";
  forgotBtn.style.display = "none";
});

window.addEventListener("load", () => {
  loginBtn.classList.add("active");
  signupBtn.classList.remove("active");
  loginBtn.click();
});
