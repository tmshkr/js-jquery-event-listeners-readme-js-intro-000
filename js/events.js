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
    if(key.which === 71)
      alert('g was pressed')
  })
}

function submitIt(){
  $('form').on('submit', function(){
    alert('g was pressed')
  })
}

$(document).ready(function(){

  getIt()
  frameIt()
  pressIt()
  
})