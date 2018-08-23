function getIt(){
  $('p').on('click', function(){
    alert('Hey!')
  })
}

function frameIt(){
  $('img').onload = $('img').addClass('tasty')
}

function pressIt(){
  $('#typing').on('keydown', function(){
    
  })
}

$(document).ready(function(){

getIt()
frameIt()
});
