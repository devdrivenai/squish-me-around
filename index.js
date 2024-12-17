const form = document.querySelector('form')
const input = document.querySelector('.input-text')
const output = document.querySelector('.output-text')
const resetOutput = document.querySelector('.reset-output')

form.onsubmit = (ev) => {
  ev.preventDefault()
  if (input.value.trim() === '') {
    input.focus()
    return
  }
  output.textContent = input.value.trim()
  input.value = ''
}

resetOutput.onclick = () => {
  output.textContent = ''
}