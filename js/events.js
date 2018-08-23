function getIt(){
  $('p').on('click', function(){
    alert('Hey!')
  })
}

function frameIt(){
  $('img').onload = $('img').addClass('tasty')
}

function pressIt(){
  $('#typing').on('keydown', function(key) {
    if(key.which == 83)
      alert('s was pressed')
  })
}

$(document).ready(function(){

getIt()
frameIt()
});
