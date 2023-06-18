const luck = ["Acredite em si mesmo e conquiste o impossível.", "A sorte favorece os corajosos.", 
"A persistência é a chave para o sucesso.", "O caminho para a felicidade está na simplicidade.",
"A vida é uma aventura, aproveite cada momento.", "Grandes sonhos começam com pequenos passos.", 
"O sorriso é o melhor presente que você pode oferecer.", "A gratidão transforma o comum em extraordinário.",
"Acredite nas suas capacidades, elas são ilimitadas.", "A felicidade está nas pequenas coisas do dia a dia."]
const yourLuck = luck[Math.floor(Math.random() * luck.length)]
const btnReset = document.querySelector("#btnReset")
const imgTry = document.querySelector("#imgTry")
const home = document.querySelector(".home")
const sorte = document.querySelector(".sorte")
arr = yourLuck

imgTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)

function handleTryClick(e){
  e.preventDefault()
  toggleMain()

  sorte.querySelector("p").innerText = arr
}
function handleResetClick() {
  toggleMain()
}

function toggleMain(){
  home.classList.toggle("hide")
  sorte.classList.toggle("hide")
}