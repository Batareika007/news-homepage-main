const burgerBtn = document.querySelector(".burger__inner")
const burgerMenu = document.getElementById("burger_open")
const burgerClose = document.getElementById("burger_close")

burgerBtn.addEventListener("click", (e) => {
	document.querySelector(".header__nav").classList.toggle("active")
	document.querySelector("body").classList.toggle("active")
	burgerBtn.classList.toggle("active")
})
