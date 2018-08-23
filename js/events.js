function getIt(){
  $('p').on('click', function(){
    alert('Hey!')
  })
}

function frameIt(){
  $('img').load(function(){
    addClass('tasty')
  })
}

$(document).ready(function(){

getIt()
frameIt()

});
