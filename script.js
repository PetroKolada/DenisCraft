const rulesButton = document.querySelector("#rulesButton")
const homeButton = document.querySelector("#homeButton")
const page = document.querySelector("#page")

rulesButton.addEventListener("click", function(){
    page.style.right = "100vw"
    rulesButton.style.color = "rgb(243, 154, 154)"
    homeButton.style.color = "white"
})

homeButton.addEventListener("click", function(){
    page.style.right = "0vw"
    homeButton.style.color = "rgb(243, 154, 154)"
    rulesButton.style.color = "white"
})