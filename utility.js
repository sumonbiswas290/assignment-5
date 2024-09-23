
function alart() {
    alert("Hello! I am an alert box!");
  }

document.getElementById('history-btn').addEventListener('click', function(){
    alart()
    document.getElementById('donation').setAttribute('hidden', true)
    document.getElementById('history').removeAttribute('hidden')

})

document.getElementById('donation-btn').addEventListener('click', function(){
    document.getElementById('history').setAttribute('hidden', true)
    document.getElementById('donation').removeAttribute('hidden')

})
