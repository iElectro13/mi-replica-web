let navBar = document.querySelectorAll(".item")
const mainSec = document.querySelector("#main-sec")
const secondSec = document.querySelector("#second-sec")
const aprendizaje = document.querySelector("#aprendizaje")
const menu = document.querySelector(".responsive-menu")


navBar.forEach(item => {
    item.addEventListener("click", () => {
        navBar.forEach(element => {
            element.classList = "item"
        })
        item.classList.toggle("active")
    })
})

menu.addEventListener("click", () => {
    menu.classList.toggle("active")
})

window.addEventListener('scroll', function() {
	let positionA = mainSec.getBoundingClientRect();
	let positionB = secondSec.getBoundingClientRect();
	let positionC = aprendizaje.getBoundingClientRect();


	// checking for partial visibility
	if(positionA.top < window.innerHeight && positionA.bottom >= 2) {
		navBar.forEach(item => {
            item.id == "inicio" ? item.classList = "item active" : item.classList = "item"; console.log(item.id)
        });
	}else if(positionB.top < window.innerHeight && positionB.bottom >= 2) {
        navBar.forEach(item => {
            item.id == "notas" ? item.classList = "item active" : item.classList = "item"
        });
    } else if(positionC.top < window.innerHeight && positionC.bottom >= 2) {
        navBar.forEach(item => {
            item.id == "aprendizajeButton" ? item.classList = "item active" : item.classList = "item"
        });
    }
});