const app = "I don't do much."

function keyHandler(e) {
  if (e.key === "ArrowLeft") {
      var leftNumbers = dodger.style.left.replace('px','')
      var left = parseInt(leftNumbers, 10)

      dodger.style.left = `${left -1}px`
  } else if (e.key === "ArrowRight") {
    var leftNumbers = dodger.style.left.replace('px','')
    var left = parseInt(leftNumbers, 10)

    dodger.style.left = `${left +1}px`
  }
}


document.addEventListener('keydown', keyHandler)
