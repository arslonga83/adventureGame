const main = document.querySelector('#main')
const speed = 50; 
let i = 0

const arrayOfText = [
  'This is the first sentence.', 
  'Here is something else.',
  'This is part 3.'
]

function typeWriter(text) {
  if (i < text.length) {
    main.innerHTML += text.charAt(i);
    i++;
    setTimeout(() => {
      typeWriter(text)
    }, speed);
  }
  else (i = 0)
}



// document.addEventListener('keydown', (e) => {
//   if (e.code === 'Space' && arrayOfText.length > 0) {
//     main.innerHTML += `<br>`
//     typeWriter(arrayOfText.shift())
//   } else {
//     main.innerHTML += `<br>`
//     getInput()
//   }
// })

// function getInput() {
//   main.innerHTML += `
//   <input type="text">`
// }
