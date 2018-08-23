function getIt(){
  $('p').on('click', function(){
    alert('Hey!')
  })
}

function frameIt(){
  $('img').onload = $('img').addClass('tasty')
}

function pressIt(){
  $('#typing').on()
}

$(document).ready(function(){

getIt()
frameIt()
});
