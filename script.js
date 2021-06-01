// it listens to the click.
document.getElementById('button1').addEventListener('click', home)

// it lets the button know what to do after the click.
function home () {
  alert('Hello, World')
}

// it listens to the click.
document.getElementById('button2').addEventListener('click', home2)

// it lets this button know what to do after the click.
function home2 () {
  document.getElementById('id1').style.color = 'red'
}
