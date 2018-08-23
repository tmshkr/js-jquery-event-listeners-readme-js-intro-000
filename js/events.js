function getIt(){
  $('p').on('click', function(){
    alert('Hey!')
  })
}

function frameIt(){
  document.querySelector('img').onload = console.log(this)
}

$(document).ready(function(){

getIt()
frameIt()
});
