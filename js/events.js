function getIt(){
  $('p').on('click', function(){
    alert('Hey!')
  })
}

function frameIt(){
  $('img').onload = addClass('tasty')
}

$(document).ready(function(){

getIt()
frameIt()

});
