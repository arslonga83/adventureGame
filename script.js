import { adventureData } from './data.js'

const textDisplay= document.querySelector('#textDisplay')
const input = document.querySelector('#input')
const speed = 50; 
input.disabled = true
let i = 0
// let textIndex = 0
let currentId = 0

// const textToPrint = [
//   'Welcome the the adventure! You wake up on a deserted beach. You can\'t remember how you got here, but there are bits of driftwood all around, seemingly from a shipwreck. In front of you looms a dense jungle and the shore stretches out as far as you can see in either direction. Do you go "left", "right", or "straight"?',
//   'You proceed left and come to a rocky outcropping with a lighthouse. You don\'t see anyone around but the light is slowly turning. Do you "investigate" further or "continue" walking?',
//   'You make slow progress through the dense jungle foliage. The mosquitoes are ravenous and you are feeling worried about the plants you keep brushing against. Do you "keep going" or "retreat"?',
//   'The beach in this direction stretches on forever with no sign of any people or even animals. As the sun beats down you decide to stop and take a rest. Do you "sit on the beach" or "find a place to hide"?'
// ]

// function displayText() {
//   textDisplay.innerHTML += `
//     <br></br>
//     `
//     typeWriter(textToPrint[textIndex])
// }

function displayText() {
  textDisplay.innerHTML += `
    <br></br>
    `
    adventureData.map(data => {
      if (data.id === currentId) {
        typeWriter(data.text)
      }
    })
}

function typeWriter(text) {
  if (i < text.length) {
    textDisplay.innerHTML += text.charAt(i);
    i++;
    setTimeout(() => {
      typeWriter(text)
    }, speed);
  }
  else {
    i = 0
    input.disabled = false
    input.focus()
  }
}

setTimeout(() => {
  displayText()
}, 1000)

// input.addEventListener('keydown', (e) => {
//   if (e.code === 'Enter') {
//     let response = input.value
//     input.value = ''
//     if (response === 'left') {
//       textIndex = 1
//     } else if (response === 'straight') {
//       textIndex = 2
//     } else if (response === 'right') {
//       textIndex = 3
//     }
//     displayText()
//   }
// })

input.addEventListener('keydown', (e) => {
  console.log('click')
  if (e.code === 'Enter') {
    adventureData.map(data => {
      if (data.id === currentId) {
        data.options.map(option => {
          if (option.choice === input.value) {
            currentId = option.nextId
            input.value = ''
            input.disabled = true
            displayText()
          }
        })
      }
    })
  }
})

