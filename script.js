import { adventureData } from './data.js'

const textDisplay= document.querySelector('#textDisplay')
const input = document.querySelector('#input')
const speed = 50; 
input.disabled = true
let i = 0
let currentId = 0

function displayText() {
  textDisplay.innerHTML += `
    <br></br>
    `
    adventureData.map(data => {
      if (data.id === currentId) {
        typeWriter(data.text, data.options)
      }
    })
}

function typeWriter(text, options) {
  if (i < text.length) {
    textDisplay.innerHTML += text.charAt(i);
    i++;
    window.scrollBy(0, 1)
    setTimeout(() => {
      typeWriter(text, options)
    }, speed);
  }
  else {
    if (options.length > 0) {
      i = 0
      input.disabled = false
      input.focus()
    } else {
      textDisplay.innerHTML += `<br></br><div class="end">|-----THE END-----|</div>`
    } 
  } 
}


setTimeout(() => {
  displayText()
}, 1000)

input.addEventListener('keydown', (e) => {
  console.log('click')
  if (e.code === 'Enter') {
    adventureData.map(data => {
      if (data.id === currentId) {
        if (data.options) {
          data.options.map(option => {
            if (option.choice === input.value) {
              currentId = option.nextId
              input.value = ''
              input.disabled = true
              displayText()
            }
          })
        }
      }
    })
  }
})


